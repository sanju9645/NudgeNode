const socketIO = require('socket.io');

const setupSocket = (server) => {
    const io = socketIO(server); 
    const usp = io.of('/user-namespace');

    usp.on('connection', async (socket) => {
        const userId = socket.handshake.auth.token;
        console.log('\n\n user ' + userId + ' connected \n\n');

        await UserModel.findByIdAndUpdate({_id: userId}, {$set: {isOnline: '1'}});

        socket.broadcast.emit('userOnline', {userId});

        socket.on('disconnect', async() => {
            console.log('\n\n user ' + userId + ' disconnected \n\n');
            await UserModel.findByIdAndUpdate({_id: userId}, {$set: {isOnline: '0'}});

            socket.broadcast.emit('userOffline', {userId});
        });

        // socket.on('newChat', (data) => {
        //     socket.broadcast.emit('loadNewChat', data);
        // });

        // socket.on('existsChat', async (data) => {
        //     const chats = await Chat.find({ $or:[
        //         { senderId : data.senderId, receiverId : data.recipientId },
        //         { receiverId : data.senderId, senderId : data.recipientId }
        //     ]});

        //     if (chats) {
        //         socket.emit('loadChats', chats);
        //     }
        // });

        // socket.on('chatDeleted', async (id) => {
        //     socket.broadcast.emit('chatMessageDeleted', id);
        // });

        // socket.on('chatUpdated', async (data) => {
        //     socket.broadcast.emit('chatMessageUpdated', data);
        // });
        
    });
};

module.exports = {setupSocket};
