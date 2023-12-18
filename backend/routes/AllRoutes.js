const express = require("express");
const { FormRotuer } = require("./InquiryFm/FormRouter");
const { userRouter } = require("./user/user.rotuer");
const AllRoutes = express.Router();

AllRoutes.use("/enquiry", FormRotuer);
AllRoutes.use("/user", userRouter);

module.exports = { AllRoutes };
