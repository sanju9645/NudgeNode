global.UserVerificationModel = require('../server/models/UserVerification');
global.UserModel             = require('../server/models/User');
global.MessageModel          = require('../server/models/Message');
global.HeartbeatModel        = require('../server/models/Heartbeat');

global.authLib             = require('./auth');
global.routeHelpersLib     = require('./routeHelpers');
global.hooksLib            = require('./hooks');
global.UtilsLib            = require('./utils');
global.constantsLib        = require('./constants');
global.userLib             = require('./user');
global.passportLib         = require('./passport');
global.ravenLib            = require('./eRavenConfig');
global.errorHandlerLib     = require('./errorHandler');
global.userVerificationLib = require('./userVerification');
global.chatLib             = require('./chat');
global.testLib             = require('./test');

global.userOps      = require('./ops/users');
global.heartbeatOps = require('./ops/heartbeat');
global.messageOps   = require('./ops/messages');

global.databaseConfig   = require('../server/config/database');
global.googleAuthConfig = require('../server/config/google-auth');
global.passportConfig   = require('../server/config/passport');
global.socketConfig     = require('../server/config/socket');


global.portalController = require('../server/controllers/portalController');
global.nudgeController = require('../server/controllers/nudgeController');

global.portalRoutes = require('../server/routes/portal');
global.nudgeRoutes = require('../server/routes/nudge');
