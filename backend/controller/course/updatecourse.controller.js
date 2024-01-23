const { CourseModal } = require("../../modals/course/course.modal");

const updateCourse = async (req, res) => {
    const { courseId } = req.params;
    try {
        const updatedProgram = await CourseModal.findByIdAndUpdate(
            courseId,
            { $set: req.body },
            { new: true }
        );
        if (!updatedProgram) {
            return res.status(404).json({ message: 'Internal Server Error', status: false });
        }
        res.status(200).json({message: "Course Updated", data: updatedProgram, status: true});
    } catch (error) {
        res.status(500).json({ message: error.message, status:false });
    }
};

module.exports = {
    updateCourse,
};
