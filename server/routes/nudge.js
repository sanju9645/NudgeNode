require('dotenv').config();

const express = require('express');
const router = express.Router();

router.get('/home', nudgeController.home_get);

router.get('/chat', nudgeController.chat_get);

module.exports = router;



