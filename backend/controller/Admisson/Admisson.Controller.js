const { admissionTemp } = require('../../mail.templets/admissionTemplet');
const AdmissionModal = require('../../modals/Admission/Admission.modal');
const { smtpModal } = require('../../modals/smtp/smtp.modal');
const { sendMailFunction } = require('../mail/sendMail');


// Create a new admission record
const createAdmission = async (req, res) => {
  const admissionData = req.body;
  
    const cvFiles = {
      location: req.files.cv[0].location,
      key: req.files.cv[0].key
    }
    passportPhotoFiles = { 
      location: req.files.passportphoto[0].location,
      key: req.files.passportphoto[0].key
    }

    admissionData.cv = cvFiles
    admissionData.passportphoto = passportPhotoFiles;


    try {
      const smtp = await smtpModal.findOne({orgNumber: "0001"})
      const newAdmission = await AdmissionModal(admissionData);
      await newAdmission.save()
      if(newAdmission){
        const html = admissionTemp({admissionData: newAdmission}) // admission html template
        const mail = await sendMailFunction({
          subject: `Admission Request from ${newAdmission?.fullname}`, 
          html, 
          emailFrom: newAdmission.email
        });

        if(mail.status)
        return res.status(201).json({ data: newAdmission, message: 'Admission successfully created', status: true });
      }else{
        return res.status(201).json({ message: 'Server error', status: false });
      }
    } catch (error) {
      res.status(500).json({ message: error.message, status: false });
    }
  };
  
  // Get all admission records
  const getAllAdmissions = async (req, res) => {
    const { limit } = req.query;
    
    try {
      const [admissions, count] = await Promise.all([
        AdmissionModal.find().limit(parseInt(limit)).sort({createdAt: -1}),
        AdmissionModal.countDocuments()
      ])
      // const admissions = await ;
      res.status(200).json({ data: admissions,count, message: 'Admissions retrieved successfully', status: true });

    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', status: false });
    }
  };
  
  // Get a specific admission record by ID
  const getAdmissionById = async (req, res) => {
    try {
      const admissionId = req.params.id;
      const admission = await AdmissionModal.findById(admissionId);
  
      if (!admission) {
        return res.status(404).json({ message: 'Admission not found', status: false });
      }
  
      res.status(200).json({
        data: admission,
        message: 'Admission retrieved successfully',
        status: true,
      });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error', status: false });
    }
  };
  
  // Update a specific admission record by ID
  const updateAdmissionById = async (req, res) => {
    try {
      const admissionId = req.params.id;
      const admissionData = req.body;
  
      const updatedAdmission = await AdmissionModal.findByIdAndUpdate(admissionId, admissionData, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedAdmission) {
        return res.status(404).json({ message: 'Admission not found', status: false });
      }
  
      res.status(200).json({
        data: updatedAdmission,
        message: 'Admission successfully updated',
        status: true,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error', status: false });
    }
  };
  
  // Delete a specific admission record by ID
  const deleteAdmissionById = async (req, res) => {
    try {
      const admissionId = req.params.id;
      const deletedAdmission = await AdmissionModal.findByIdAndDelete(admissionId);
  
      if (!deletedAdmission) {
        return res.status(404).json({ message: 'Admission not found', status: false });
      }
  
      res.status(204).json({ message: 'Admission successfully deleted', status: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error', status: false });
    }
  };
  
  module.exports = {
    createAdmission,
    getAllAdmissions,
    getAdmissionById,
    updateAdmissionById,
    deleteAdmissionById,
  };
  