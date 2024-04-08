const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now,
    required: true
  },
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  recipientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  identifier: {
    type: String,
    default: function() {
      const senderIdNum = parseInt(this.senderId.toString().match(/\d+/g).join(""), 10); 
      const recipientNum = parseInt(this.recipientId.toString().match(/\d+/g).join(""), 10);
      return Math.min(senderIdNum, recipientNum) + "" + Math.max(senderIdNum, recipientNum);
    }
  },
  status: {
    type: String,
    enum: ['send', 'received', 'read'],
    required: true,
    default: 'send'
  },
  messageType: {
    type: String,
    enum: ['text', 'image', 'gif', 'video'],
    default: 'text',
    required: true
  },
  body: {
    type: String,
    required: false
  },
  mediaPath: {
    type: String,
    required: function() {
      return ['image', 'gif', 'video'].includes(this.messageType); // Require mediaPath if messageType is 'image', 'gif', or 'video'
    }
  }
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
