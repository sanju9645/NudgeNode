require('dotenv').config();

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
    locals = { ...locals, currentUser : user, groupedNames, heartbeats, req, layout: './layouts/chatMarrowMeet' };
    res.render('chat', locals);
  });
};

module.exports = {
  home_get,
  chat_get
}
