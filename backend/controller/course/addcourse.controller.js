const { CourseModal } = require("../../modals/course/course.modal");

const createCourse = async (req, res) => {
    const { id } = req.profile;
    const payload = {
        ...req.body,
        createdBy: id,
        createdAt: new Date()
    };
    try {
        const newProgram = await CourseModal(payload);
        const savedProgram = await newProgram.save();
        if(savedProgram){
            res.status(200).send({ message: 'Admission Added', data:savedProgram, status: true });
        }else{
            res.status(500).send({ message: 'Server error.', status: false });
        }
    } catch (err) {
        res.status(500).json({ message: err.message, status:false});
    }
};

module.exports = {
    createCourse,
};
