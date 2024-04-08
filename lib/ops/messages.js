/*
* Functions associated with Messages table
*/

const { userById } = require("./users");

class MessageService {
  constructor(MessageModel) {
    this.MessageModel = MessageModel;
  }

  async messagesByUserIdentifier(identifier) {
    return await UtilsLib.immediateExpr(async () => {
      const messages = await this.MessageModel.find({ identifier }).sort({ created: 1 });
      const chats = await Promise.all(messages.map(async (message) => {
        const sender = await userOps.userById(message.senderId);
        const recipient = await userOps.userById(message.recipientId);

        const chat = {
          _id                  : message._id,
          senderId             : message.senderId,
          recipientId          : message.recipientId,
          status               : message.status,
          messageType          : message.messageType,
          body                 : message.body,
          created              : message.created,
          identifier           : message.identifier,
          senderProfilePicture : sender.profilePicture,
          senderName           : sender.name,
          senderEmail          : sender.email,
          recipientProfilePicture : recipient.profilePicture,
          recipientName           : recipient.name,
          recipientEmail          : recipient.email,
        };
        return chat;
      }));
      return chats;
    });
  }
}

module.exports = new MessageService(MessageModel);
