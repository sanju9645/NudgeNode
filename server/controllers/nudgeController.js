require('dotenv').config();

const home_get = async (req, res) => {
  UtilsLib.secureExecute(req, res, (req, res) => {
    const locals = UtilsLib.getNudgeLocals();

    res.render('home', locals);
  });
};

module.exports = {
  home_get
}
