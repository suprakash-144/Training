const jwt = require("jsonwebtoken");
const User = require("../Models/User");
const authMiddleware = async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        //verifing the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded?.id);
        req.user = user;
        next();
      }
    } catch (error) {
      throw new Error("Not authorized token expired,please login agian");
    }
  } else {
    throw new Error("Token not attached");
  }
};

module.exports = { authMiddleware };
