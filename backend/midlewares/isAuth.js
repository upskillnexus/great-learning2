let jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  console.log("isauth expected")

  try {
    const authToken = req.cookies.upskillnexus;
    if (!authToken) {
      return handleUnauthorized(res)
    }
    
    let decode = jwt.verify(authToken, process.env.secKey);

    if (!decode) {
      return handleUnauthorized(res)
    }
    req.profile = decode;
    next();
    //
  } catch (error) {
    return handleUnauthorized(res)
  }
};

module.exports = isAuth;


const handleUnauthorized = (res) => {
  res
    .status(200)
    .cookie("upskillnexus", null, { expires: new Date(Date.now()) })
    .clearCookie("upskillnexus")
    .json({ success: false,isAuth: false, message: "You are not authorized" });
};