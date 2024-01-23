const express = require('express');
const { createAdmission, getAllAdmissions, getAdmissionById, updateAdmissionById, deleteAdmissionById } = require('../../controller/Admisson/Admisson.Controller');
const isAuth = require('../../midlewares/isAuth');
const AdmissionRoute = express.Router();

const multer = require("multer");
const { AdmissionMulter } = require('../../Multer/Admission.multer');
const upload = multer()


AdmissionRoute.get('/fetch', isAuth , getAllAdmissions)
AdmissionRoute.get('/fetch/:id', isAuth , getAdmissionById)

AdmissionRoute.post('/create', AdmissionMulter.fields([{ name: "cv" }, { name: "passportphoto" }]), createAdmission)


AdmissionRoute.patch('/update/:id', isAuth, updateAdmissionById)
AdmissionRoute.delete('/delete/:id', isAuth, deleteAdmissionById)



module.exports = { AdmissionRoute }