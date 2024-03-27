require('dotenv').config();

const home_get = async (req, res) => {
  UtilsLib.secureExecute(req, res, (req, res) => {
    const locals = UtilsLib.getNudgeLocals({"title" : "home", 'currentRoute' : '/home'});

    res.render('home', locals);
  });
};


const chat_get = async (req, res) => {
  UtilsLib.secureExecute(req, res, (req, res) => {
    const locals = UtilsLib.getNudgeLocals({"title" : "chat", 'currentRoute' : '/chat'});

    res.render('home', locals);
  });
};

module.exports = {
  home_get,
  chat_get
}
