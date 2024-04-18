
const express = require('express');
const router = express.Router();

router.use(authLib.authMiddleware);


router.get('/home', nudgeController.home_get);

// router.get('/chat', nudgeController.chat_get);
router.get('/chat', nudgeController.chat_get);

// router.get('/chat/*', nudgeController.chat_get);
router.get('/api/chat/:identifier', nudgeController.messages_get);

router.post('/api/chat/send-message', nudgeController.send_message_post);

router.get('/api/get-user-identifier', (req, res) => {
  res.json({ identifier: req.userId });
});

module.exports = router;
