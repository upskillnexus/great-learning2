const express = require("express");
const { userLogin } = require("../../controller/user/login.controller");
const isAuth = require("../../midlewares/isAuth");
const { checkAuth } = require("../../controller/user/check");
const userRouter = express.Router();

userRouter.post("/login", userLogin);
userRouter.get('/check', isAuth, checkAuth )

module.exports = { userRouter };
