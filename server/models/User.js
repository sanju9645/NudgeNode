const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
    required: false
  },
  hash: {
    type: String,
    required: function() {
      return !this.googleId; // Require password if not using Google SSO
    },
  },
  salt: {
    type: String,
    required: function() {
      return !this.googleId; // Require password if not using Google SSO
    },
  },
  googleId: {
    type: String,
    sparse: true, // Allows null values for unique fields (needed for username/password users)
  },
  profilePicture: {
    type: String,
    unique: true,
    sparse: true,
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  lastLoggedIn: {
    type: Date,
    default: null
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  isOnline:{
    type: String,
    default: '0'
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;