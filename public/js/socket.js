const getIdentifer = async () => {
  try {
    const response = await fetch('/api/get-user-identifier');
    const data = await response.json();
    return data.identifier;
  } catch (error) {
    console.error('Error getting identifier:', error);
  }
}

(async () => {
  const identifier = await getIdentifer();
  const senderId = identifier;
  let recipientId;

  const socket = io('/user-namespace', {
    auth: {
      token: senderId
    }
  });

  //update user online status
  socket.on('userOnline', (data) => {
    $('#'+data.userId+'-status').removeClass('bg-yellow-500');
    $('#'+data.userId+'-status').addClass('bg-green-500');
  });

  //update user offline status
  socket.on('userOffline', (data) => {
    $('#'+data.userId+'-status').removeClass('bg-green-500');
    $('#'+data.userId+'-status').addClass('bg-yellow-500');
  });

})();



