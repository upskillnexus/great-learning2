const { CourseModal } = require('../../modals/course/course.modal');

const deleteCourse = async (req, res) => {
    const {courseId} = req.params;

    try {
        const deletedProgram = await CourseModal.findByIdAndDelete(courseId);
        if (!deletedProgram) {
            return res.status(404).json({ message: 'Course not found', status: false });
        }
        res.status(200).json({ message: 'Course deleted successfully', status: true });
    } catch (error) {
        res.status(500).json({ error: error?.message , status: false});
    }
};

module.exports = {
    deleteCourse,
};
