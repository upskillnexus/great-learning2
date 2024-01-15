const AdmissionModal = require('../../modals/Admission/Admission.modal');


// Create a new admission record
const createAdmission = async (req, res) => {
    const admissionData = req.body;
    const cvFiles = req.files['cv'][0].path;
    const passportPhotoFiles = req.files['passportphoto'][0].path;

    admissionData.cv = cvFiles
    admissionData.passportphoto = passportPhotoFiles;

    try {
      const newAdmission = await AdmissionModal(admissionData);
      await newAdmission.save()
      return res.status(201).json({ data: newAdmission, message: 'Admission successfully created', status: true });
    } catch (error) {
      res.status(500).json({ message: error.message, status: false });
    }
  };
  
  // Get all admission records
  const getAllAdmissions = async (req, res) => {
    try {
      const admissions = await AdmissionModal.find();
      res.status(200).json({ data: admissions, message: 'Admissions retrieved successfully', status: true });

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
      console.error(error);
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
  