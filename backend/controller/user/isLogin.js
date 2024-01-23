let jwt = require("jsonwebtoken");

const isLogin = async (req,res) => {

    try {
        const authToken = req.cookies.upskillnexus;
        if (!authToken) {
          handleUnauthorized()
          return res.status(200).send({ message: "No token found please login", isAuth: false, status: false });
        }
        let decode = jwt.verify(authToken, process.env.secKey);
    
        if (!decode) {
          handleUnauthorized()
          return res.status(400).send({ message: "Access Denied False token provided", isAuth: false, status: false });
        }
        req.profile = decode;
        //
      } catch (error) {
        handleUnauthorized()
        return res.status(400).send({ message: error?.message, isAuth: false, status: false });
      }
}

module.exports = { isLogin }


const handleUnauthorized = (res) => {
    res
      .status(401)
      .cookie("upskillnexus", null, { expires: new Date(Date.now()) })
      .clearCookie("upskillnexus")
      .json({ success: false, message: "You are not authorized" });
  };