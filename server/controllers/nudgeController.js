require('dotenv').config();
const ejs = require('ejs');
const path = require('path');

const home_get = async (req, res) => {
  UtilsLib.secureExecute(req, res, async (req, res) => {
    let locals = UtilsLib.getNudgeLocals({"title" : "home", 'currentRoute' : '/home'});
    const user = await authLib.currentUser(req.userId);
    user['profilePicture'] = await authLib.getProfilePicture(req);
    locals = { ...locals, currentUser : user , layout: './layouts/backbone' };
    res.render('home', locals);
  });
};

const chat_get = async (req, res) => {
  UtilsLib.secureExecute(req, res, async (req, res) => {
    let locals = UtilsLib.getNudgeLocals({"title" : "chat", 'currentRoute' : '/chat'});
    const user = await authLib.currentUser(req.userId);
    user['profilePicture'] = await authLib.getProfilePicture(req);

    const groupedNames = await userLib.getUsersName(); 
    const heartbeats = await heartbeatOps.heartbeatsByUserId(user._id);
    const messages = await messageOps.messagesByUserIdentifier('65025737258102936502577258102940');
    locals = { ...locals, currentUser : user, groupedNames, heartbeats, req, messages, layout: './layouts/chatMarrowMeet' };
    res.render('chat', locals);
  });
};

const messages_get = async (req, res) => {
  UtilsLib.secureExecute(req, res, async (req, res) => {
    const user = await authLib.currentUser(req.userId);
    const messages = await messageOps.messagesByUserIdentifier(req.params.identifier);
    const templatePath = UtilsLib.actualEjsPath('chat/chat-components/conversation');
    const hearbeatUser = await heartbeatOps.heartbeatByidentifierAndUserId(req.params.identifier, req.userId);

    ejs.renderFile(templatePath, { currentUser : user, messages, hearbeatUser }, (err, html) => {
      if (err) {
        console.error('Error rendering EJS template:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send(html);
      }
    });
  });
}

const send_message_post = async (req, res) => {
  UtilsLib.secureExecute(req, res, async (req, res) => {
    const user = await authLib.currentUser(req.userId);
    const { senderId, recipientId, identifier, message } = req.body;
    const messageData = { senderId, recipientId, messageType: 'text', body: message };
    const result = await MessageModel.create(messageData);

    if (result?._id) {
      const messages = await messageOps.messagesByUserIdentifier(req.params.identifier);
      const templatePath = UtilsLib.actualEjsPath('chat/chat-components/conversation');
      const hearbeatUser = await heartbeatOps.heartbeatByidentifierAndUserId(identifier, req.userId);
  
      ejs.renderFile(templatePath, { currentUser : user, messages, hearbeatUser }, (err, html) => {
        if (err) {
          console.error('Error rendering EJS template:', err);
          res.status(500).json({response : 'Internal Server Error', status : false});
        } else {
          res.status(200).json({response: 'Message send successfully', status : true, html});
        }
      });
    } else {
      res.status(500).json({ response: 'Failed to send message', status : false  });
    }
  });
}

module.exports = {
  home_get,
  chat_get,
  messages_get,
  send_message_post
}
