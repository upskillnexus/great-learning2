const jwt = require('jsonwebtoken');
const bcryptjs = require("bcryptjs");
const { UserModel } = require("../../modals/user/user.modal");

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  // console.log(email, password);

  try {
    if (!email && !password) {
      return res.status(403).send({ message: "requirement not fulfilled", status: false });
    }

    const findEmail = await UserModel.findOne({ email: email });
    // console.log(findEmail);

    if (findEmail) {
      let ans = await bcryptjs.compare(password, findEmail.password);
      if (ans) {
        let { password, ...userWithoutPassword } = findEmail.toObject();
        let token = jwt.sign(
          {
            id: findEmail._id,
            name: findEmail.name,
            email: findEmail.email,
          },
          process.env.secKey
        );
        const cookieOptions = {
          maxAge: 172800000,
        };
        return res.cookie("upskillnexus", token, cookieOptions).json({
          success: true,
          message: "Login success",
          profile: userWithoutPassword,
        });
      } else {
        return res.status(200).send({ message: "Incorrect password", status: false });
      }
    }else{
      return res.status(404).send({ message: "No user Exist with this Credentials", status: false });
    }

  } catch (err) {
    res.status(500).send({ message: err.message, status: false });
  }
};

module.exports = { userLogin };
