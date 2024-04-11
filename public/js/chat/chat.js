
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
    console.log(document.getElementById('heartbeat-chat-content'));
    document.getElementById('heartbeat-chat-content').innerHTML = response.html;
  })
  .catch(error => {
    console.error('Send Message API Error:', error);
  });
}