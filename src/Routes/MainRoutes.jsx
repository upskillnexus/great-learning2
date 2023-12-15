import { Route, Routes } from "react-router-dom";
import { Deshboard } from "../Pages/Deshboard";
import Privacy from "../Pages/Policy/Privacy";
import { Header } from "../Components/Header";
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

export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Deshboard />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/course/digital-marketing-science" element={<SingleCourse />} />
        <Route path="/course/data-science" element={<DataScienceCourse />} />
        <Route path="/course/cyber-security" element={<CyberSecurityCourse />} />

        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="term-conditions" element={<Term_condition />} />

        {/* <Route path="/data-science" element={<Datascience />} /> */}
        {/* <Route path="/cyber-security" element={<Cybercourse />} /> */}
        {/* <Route path="/ai-machine" element={<Aimachine />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/refund-policy" element={<Refund />} />
        <Route path="/terms_of_use" element={<Terms />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </>
  );
};

// #f5dad7