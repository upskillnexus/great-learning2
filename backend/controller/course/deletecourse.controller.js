const { CourseModal } = require('../../modals/course/course.modal');

const deleteCourse = async (req, res) => {
    const {courseId} = req.params;

    try {
        const deletedProgram = await CourseModal.findByIdAndDelete(courseId);
        if (!deletedProgram) {
            return res.status(404).json({ error: 'Program not found' });
        }
        res.status(200).json({ message: 'Program deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    deleteCourse,
};
