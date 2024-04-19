window.getMessageTemplates = async () => {
  try {
    const response = await fetch('/api/chat/get-message-templates');
    const data = await response.json();
    return [data.templates.own, data.templates.recipient];
  } catch (error) {
    console.error('Error fetching message templates:', error);
    return [null, null];
  }
};

window.chatScroll = () => {
  const chatParentDivWrapper = document.getElementById('chat-parent-div-wrapper');
  chatParentDivWrapper.scrollTop = chatParentDivWrapper.scrollHeight;
}

window.fmtMongoDate = (date) => {
  const jsDate = new Date(date);
  const formattedTime = moment(jsDate).format('YYYY-MM-DD hh:mm A');

  return formattedTime;
}

window.updateNewMessageTemplates = async (msgTemplate, newMessage, msgEvent) => {
  const chatWrapper = document.getElementById('chat-parent-div-wrapper');

  if (chatWrapper) {
    const recipientUserId = chatWrapper.getAttribute('data-recipient-user-id');
    let msgSenderId = recipientUserId;
    let msgRecipientId = window.senderId;

    if (msgEvent == 'sent') {
      msgSenderId = window.senderId;
      msgRecipientId = recipientUserId;
    }

    if (msgSenderId == newMessage.senderId && msgRecipientId == newMessage.recipientId) {
      let message = msgTemplate.replace('<%- message.body %>', newMessage.body);
      message     = message.replace('<%- UtilsLib.fmtMongoDbDate(message.created) %>', fmtMongoDate(newMessage.created));
      chatWrapper.innerHTML += message;
      chatScroll();  
    }
  }
}

window.getLoadingMsgContent = () => {
  const loadingMsg = "The chat Alien is currently rearranging the bits and bytes. Brace yourself for intergalactic conversations!";
  const loadingContent = `
    <div class="relative flex justify-center items-center" id="heartbeat-joke-div" >
      <div class="flex text-center">
        <img src="/img/chat/chat-loading.png" width="160" height="160" class="p-5">
        <h2 class="italic font-bold default-chat-page-quote text-3xl p-5 mr-5">
          <span class="text-gray-700 dark:text-gray-50">
            ${loadingMsg.substring(0, Math.ceil(loadingMsg.length / 2)).trim()} 
          </span>
          <span class="group-data-[theme-color=violet]:text-violet-500 group-data-[theme-color=green]:text-green-500 group-data-[theme-color=red]:text-red-500">
            ${loadingMsg.substring(Math.ceil(loadingMsg.length / 2)).trim()}
          </span>
        </h2>
      </div>
    </div>`;

  return loadingContent;
}

let ownMsgTemplate = '';
let recipientMsgTemplate = '';

(async () => {
  [ownMsgTemplate, recipientMsgTemplate] = await getMessageTemplates();
})();
  
if (document.querySelector(".chat-user-list")) {
  Array.from(document.querySelectorAll(".chat-user-list li")).forEach((item) => {
    item.addEventListener("click", () => {
      const identifier = item.dataset.identifier;
      const loadingContent = getLoadingMsgContent();
      document.getElementById('heartbeat-chat-content').innerHTML = loadingContent;

      fetch(`/api/chat/${identifier}`)
      .then(response => response.text())
      .then(data => {
        document.getElementById('heartbeat-chat-content').innerHTML = data;
        document.querySelectorAll('.hearbeat-contact').forEach(cnt => cnt.classList.remove('active'));
        document.getElementById(item.getAttribute('id')).classList.add('active');
      })
      .then(() => {
        chatScroll();
      })
      .catch(error => {
        console.error('API Error:', error);
      });
      
      if (document.querySelector(".user-chat")) {
        document.querySelector(".user-chat").classList.add("user-chat-show");
      }
    })
  });
}

const sendMessage = (senderId, recipientId, identifier, message) => {
  document.getElementById('send-message-input').value = '';

  fetch('/api/chat/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      senderId, recipientId, identifier, message
    })
  })
  .then(response => response.json())
  .then(response => {
    updateNewMessageTemplates(ownMsgTemplate, response.newMessage, 'sent');
  })
  .catch(error => {
    console.error('Send Message API Error:', error);
  });
}
