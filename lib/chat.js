const fs = require('fs');

class Chat {
  static async getUserChatTemplate() {
    let templates = {};
    const roles = ['own', 'recipient'];

    for (const role of roles) {
      const templatePath = UtilsLib.actualEjsPath(`chat/chat-components/conversation/${role}-message`);
      templates[role] = await fs.readFileSync(templatePath, 'utf8');
    }
    return templates;
  }
}

module.exports = Chat;
