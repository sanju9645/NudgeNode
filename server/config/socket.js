const socketIO = require('socket.io');

// Initialize socket.io and user socket mapping
let io = null;
let userSocketMap = new Map();  // This Map will store userId as key and socketId as value

/**
 * Sets up and manages socket.io communication on the provided server.
 * @param {Object} server - The HTTP/S server instance.
 */
const setupSocket = (server) => {
  io = socketIO(server);
  const usp = io.of('/user-namespace');

  usp.on('connection', async (socket) => {
    const userId = authenticateUser(socket); // Assume this function gets the userId from the socket

    if (userId) {
      userSocketMap.set(userId, socket.id);
      console.log(`Mapped user ${userId} to socket ${socket.id}`);

      await UserModel.findByIdAndUpdate({_id: userId}, {$set: {isOnline: '1'}});
      console.log('\n\n Socket Connection : User ' + userId + ' connected \n\n');

      // socket.broadcast.emit('userOnline', {userId});
      broadcastEventToConnections(userId, 'userOnline', {userId});
    }

    socket.on('disconnect', async () => {
      userSocketMap.delete(userId);
      console.log(`User ${userId} disconnected and removed from map.`);

      await UserModel.findByIdAndUpdate({_id: userId}, {$set: {isOnline: '0'}});
      console.log('\n\n Socket Connection : User ' + userId + ' disconnected \n\n');

      // socket.broadcast.emit('userOffline', {userId});
      broadcastEventToConnections(userId, 'userOffline', {userId});
    });
  });
};

/**
 * Authenticates the user based on the provided socket's authentication handshake.
 * @param {Object} socket - The socket instance from a client connection.
 * @return {string} The authenticated userId.
 */
const authenticateUser = (socket) => {
  return socket.handshake.auth.token;  
}

/**
 * Sends a specific event with data to a single user identified by userId.
 * Sends a message to the specific client connected on that socket
 * @param {string} userId - The ID of the user to whom the event should be sent.
 * @param {string} event - The event name to emit.
 * @param {Object} data - The data to send with the event.
 */
const sendEventToUser = (userId, event, data) => {
  if (userSocketMap.has(userId)) {
    const socketId = userSocketMap.get(userId);
    const socket = io.of('/user-namespace').sockets.get(socketId);

    if (socket) {
      socket.emit(event, data);
      console.log(`Event ${event} sent to user ${userId} at socket ${socketId}`);
    } else {
      console.error(`No active socket for user ${userId}`);
    }
  } else {
    console.error(`No socketId found for user ${userId}`);
  }
};

/**
 * Broadcasts an event with data to all users except for the sender.
 * Sends a message to all connected clients except for the specific client connected on that socket.
 * @param {string} userId - The ID of the user initiating the broadcast (to exclude).
 * @param {string} event - The event name to emit.
 * @param {Object} data - The data to send with the event.
 */
const broadcastEventToConnections = (userId, event, data) => {
  if (userSocketMap.has(userId)) {
    const socketId = userSocketMap.get(userId);
    const socket = io.of('/user-namespace').sockets.get(socketId);

    if (socket) {
      // Broadcast to all other users except the one specified
      socket.broadcast.emit(event, data);
      console.log(`Broadcast event ${event} to all except user ${userId}`);
    } else {
      console.error(`No active socket for user ${userId} to initiate broadcast`);
    }
  } else {
    console.error(`Cannot broadcast as no socketId found for user ${userId}`);
  }
};

/**
 * Broadcasts an event with data to all connected users in the namespace.
 * @param {string} event - The event name to emit.
 * @param {Object} data - The data to send with the event.
 */
const broadcastEventToAll = (event, data) => {
  if (io) {
    io.of('/user-namespace').emit(event, data);
    console.log(`Broadcast event ${event} to all connected users.`);
  } else {
    console.error('Socket.io not initialized');
  }
};

module.exports = {setupSocket, sendEventToUser, broadcastEventToConnections, broadcastEventToAll};
