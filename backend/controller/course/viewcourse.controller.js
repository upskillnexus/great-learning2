const { CourseModal } = require("../../modals/course/course.modal");

const getAllCourse = async (req, res) => {
    
    try {
        const [course, count] = await Promise.all([
            CourseModal.find().sort({createdAt: -1}),
            CourseModal.countDocuments()
        ])
        res.status(200).json({ message: "Your Courses", data: course, count, status: true});
    } catch (error) {
        res.status(500).json({ message: error.message,status: false});
    }
};

module.exports = {
    getAllCourse,
};
