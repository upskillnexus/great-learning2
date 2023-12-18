const { UserModel } = require("../../modals/user/user.modal");

const checkAuth = async (req, res) => {

    try {
        const data = await UserModel.findOne({_id: req.profile.id})

        if (data) {
            const newdata = {
                _id: data._id,
                email: data.email,
                role: data.role,
                name: data.name
            }
            console.log(newdata)
            return res.status(200).send({ message: "You are loggedin" , data: newdata , isAuth : true, status: true });
        }
    } catch (err) {
      return res.status(500).send({ message: err.message, status: false});
    }
  };
  
  module.exports = { checkAuth };
  