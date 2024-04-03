const mongoose = require('mongoose');

const HeartbeatSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now,
    required: true
  },
  romeo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  juliet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  identifier: {
    type: String,
    unique: true,
    default: function() {
      const romeoNum = parseInt(this.romeo.toString().match(/\d+/g).join(""), 10); 
      const julietNum = parseInt(this.juliet.toString().match(/\d+/g).join(""), 10);
      return Math.min(romeoNum, julietNum) + "" + Math.max(romeoNum, julietNum);
    }
  },
  deleted: {
    type: Date,
    default: null
  },
  blocked: {
    type: Date,
    default: null
  },
  archived: {
    type: Date,
    default: null
  }
});

const Heartbeat = mongoose.model('Heartbeat', HeartbeatSchema);

module.exports = Heartbeat;
