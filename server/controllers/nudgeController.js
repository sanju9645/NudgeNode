require('dotenv').config();

const home_get = async (req, res) => {
  UtilsLib.secureExecute(req, res, (req, res) => {
    let locals = UtilsLib.getNudgeLocals({"title" : "home", 'currentRoute' : '/home'});
    locals = { ...locals, layout: './layouts/backbone' };

    res.render('home', locals);
  });
};


const chat_get = async (req, res) => {
  UtilsLib.secureExecute(req, res, (req, res) => {
    let locals = UtilsLib.getNudgeLocals({"title" : "chat", 'currentRoute' : '/chat'});
    locals = { ...locals, layout: './layouts/chatMarrowMeet' };

    res.render('chat', locals);
  });
};

module.exports = {
  home_get,
  chat_get
}
