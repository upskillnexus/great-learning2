const express = require('express')
const { getAllCourse } = require('../../controller/course/viewcourse.controller')
const { updateCourse } = require('../../controller/course/updatecourse.controller')
const { createCourse } = require('../../controller/course/addcourse.controller')
const { deleteCourse } = require('../../controller/course/deletecourse.controller')
const isAuth = require('../../midlewares/isAuth')
const courseRoute = express.Router()

courseRoute.get('/', getAllCourse)
courseRoute.post('/create', isAuth , createCourse)
courseRoute.patch('/:courseId', isAuth , updateCourse)
courseRoute.delete('/:courseId', isAuth , deleteCourse)



module.exports = { courseRoute }