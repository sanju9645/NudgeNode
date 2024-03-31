require('dotenv').config();

const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

/**
 * 
 * Check Login
*/
const authMiddleware = (req, res, next ) => {
  const token = req.cookies.token;

  if(!token) {
    return res.status(401).json( { message: 'Unauthorized'} );
  }

  try {
    const decoded = jwt.verify(token, jwtSecret);
    req.userId = decoded.userId;
    next();
  } catch(error) {
    res.status(401).json( { message: 'Unauthorized'} );
  }
}

const getProfilePicture = async (req) => {
  const defaultProfilePicture = "/img/profile-pic.jpeg";
  const user = await authLib.currentUser(req.userId);
  const profilePicture = user && user.profilePicture ? user.profilePicture : defaultProfilePicture;

  return profilePicture;
}

const currentUser = async (userId) => {
  try {
    const user = await userOps.userById(userId);
    return user; // Return the user object directly
  } catch (error) {
    console.error(error);
    return null; // Handle any errors and return null or appropriate value
  }
}

module.exports = {
  authMiddleware,
  getProfilePicture,
  currentUser
}
