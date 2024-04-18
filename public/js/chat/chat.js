const getLoadingMsgContent = () => {
  const loadingMsg = "The chat Alien is currently rearranging the bits and bytes. Brace yourself for intergalactic conversations!";
  const loadingContent = `<div class="relative flex justify-center items-center" id="heartbeat-joke-div" >
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

const chatScroll = () => {
  const ulElement = document.getElementById('chat-parent-div-wrapper');
  const lastLi = ulElement.querySelector('li:nth-last-child(2)');
  const liElements = ulElement.querySelectorAll('li');
  const secondLastLi = liElements[liElements.length - 2];

  if (lastLi) {
    lastLi.scrollIntoView();
  }

  if (secondLastLi) {
    setTimeout(e=>{secondLastLi.scrollIntoView()})
  }
}

// open chat box
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
    document.getElementById('heartbeat-chat-content').innerHTML = response.html;
  })
  .catch(error => {
    console.error('Send Message API Error:', error);
  });
}