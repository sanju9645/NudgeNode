require('dotenv').config();

const home_get = async (req, res) => {
  UtilsLib.secureExecute(req, res, async (req, res) => {
    let locals = UtilsLib.getNudgeLocals({"title" : "home", 'currentRoute' : '/home'});
    const profilePicture = await authLib.get_profile_picture(req);
    locals = { ...locals, userId: req.userId, profilePicture , layout: './layouts/backbone' };
    res.render('home', locals);
  });
};

const chat_get = async (req, res) => {
  UtilsLib.secureExecute(req, res, async (req, res) => {
    let locals = UtilsLib.getNudgeLocals({"title" : "chat", 'currentRoute' : '/chat'});
    const profilePicture = await authLib.get_profile_picture(req);
    const user = await authLib.currentUser(req.userId);
    locals = { ...locals, userId: req.userId, user, profilePicture, layout: './layouts/chatMarrowMeet' };
    res.render('chat', locals);
  });
};

module.exports = {
  home_get,
  chat_get
}
