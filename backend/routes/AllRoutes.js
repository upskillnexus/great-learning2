const express = require("express");
const { FormRotuer } = require("./InquiryFm/FormRouter");
const { userRouter } = require("./user/user.rotuer");
const { AdmissionRoute } = require("./Admission/Admission.Route");
const { courseRoute } = require("./course/course.router");
const AllRoutes = express.Router();

AllRoutes.use("/enquiry", FormRotuer);
AllRoutes.use("/user", userRouter);
AllRoutes.use("/admission", AdmissionRoute)
AllRoutes.use('/course', courseRoute)

module.exports = { AllRoutes };
