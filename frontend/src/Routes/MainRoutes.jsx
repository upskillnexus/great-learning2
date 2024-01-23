import { Route, Routes } from "react-router-dom";
import { Deshboard } from "../Pages/Deshboard";
import Privacy from "../Pages/Policy/Privacy";
import { Header } from "../Components/Header/Header";
import Footer from "../Components/Footer";
import RefundPolicy from "../Pages/Policy/RefundPolicy";
import Term_condition from "../Pages/Policy/Term_condition";
import About from "../Pages/About/About";
import Refund from "../Pages/Refund/Refund";
import Terms from "../Pages/Terms/Terms";
import SingleCourse from "../Pages/Course/SingleCourse";
import CyberSecurityCourse from "../Pages/Course/cuber.course";

import Contactus from "../Pages/Contactus/Contactus";
import DataScienceCourse from "../Pages/Course/data.science";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import Leads from "../Pages/Admin/Leads";
import DirectorMsg from "../Pages/Director-message/directorMsg";
import Admission from "../Pages/Admission/Admission";
import AdmissionProcess from "../Pages/Admission/AdmissionProcess";
import CareerSupport from "../Pages/support/CareerSupport";
import Leadership from "../Pages/Home/Leadership";
import NotFound from "../Pages/PageNotfound";
import StudentAdmission from "../Pages/Admin/Admission/StudentAdmission";
import EmpyobilitySkills from "../Pages/Course/EmpyobilitySkills";
import isAuth from "../Libs/Quirys/isAuth";
import AdminDeshboard from "../Pages/Admin/Deshboard/Deshboard";
import AddProgramForm from "../Pages/Admin/course/AddCourse";
import AllCourses from "../Pages/Admin/course/Courses";

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Deshboard />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        {/* Courses */}
        <Route path="/course/digital-marketing-science" element={<SingleCourse />} />
        <Route path="/course/data-science" element={<DataScienceCourse />} />
        <Route path="/course/cyber-security" element={<CyberSecurityCourse />} />
        <Route path='/course/employability-skills' element={<EmpyobilitySkills />} />

        {/* Courses */}

        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/term-conditions" element={<Term_condition />} />

        <Route path="/leadership" element={<Leadership />} />

        <Route path="/about" element={<About />} />
        <Route path="/refund-policy" element={<Refund />} />
        <Route path="/terms_of_use" element={<Terms />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/director" element={<DirectorMsg />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/admission/process" element={<AdmissionProcess />} />
        <Route path="/career-support" element={<CareerSupport />} />

      {/* Admin */}
        <Route path="/admin" element={<PrivateRoute />}>
          <Route path="" element={<AdminDeshboard />}/>
          <Route path='leads' element={<Leads />} />
          <Route path='students-admission' element={<StudentAdmission />} />
          <Route path='course/create' element={<AddProgramForm />} />
          <Route path='course' element={<AllCourses />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

// #f5dad7

{
  /* <Route path="/data-science" element={<Datascience />} /> */
}
{
  /* <Route path="/cyber-security" element={<Cybercourse />} /> */
}
{
  /* <Route path="/ai-machine" element={<Aimachine />} /> */
}
