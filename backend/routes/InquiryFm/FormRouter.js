const express = require("express");
const { GetData, PostData } = require("../../controller/InquryFm/InquiryFmController");
const isAuth = require("../../midlewares/isAuth");

const FormRotuer = express.Router();

FormRotuer.get("/fetch", isAuth , GetData);
FormRotuer.post("/create", PostData);

module.exports = { FormRotuer };
