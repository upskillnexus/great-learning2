let jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  try {
    const authToken = req.cookies.upskillnexus;
    if (!authToken) {
      return res.status(200).send({ message: "No token found please login", isAuth: false, status: false });
    }
    let decode = jwt.verify(authToken, process.env.secKey);

    if (!decode) {
      return res.status(400).send({ message: "Access Denied False token provided", isAuth: false, status: false });
    }
    req.profile = decode;
    next();
    //
  } catch (error) {
    return res.status(400).send({ message: error?.message, status: false });
  }
};

module.exports = isAuth;
