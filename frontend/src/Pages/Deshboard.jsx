import { Box, Center, Fade } from "@chakra-ui/react";
import { Header } from "../Components/Header/Header";
import HomePageSlider from "../Components/HomePageSlider";
import Courses from "./Course/Courses";
import Universities from "./Universities/Universities";
import WhyChoose from "./Home/WhyChoose";
import Explore from "./Home/Explore";
import Partners from "./Home/Partners";
import TrainingPrograms from "./Home/Training";
import Testimonials from "./Home/Testimonials";
import About from "./Home/About";
import SetsUsApart from "./Home/SetusPart";
import PartnershipsSection from "./Home/PartnerShipSection";
import Footer from "../Components/Footer";
import { FAQ } from "./Home/FAQ";
import TalkToOurTema from "./Home/TalkToOurTema";
import SliderTestimonial from "../Components/Text";

export const Deshboard = () => {
  return (
    <>
      <Center>
        <Box border="1px solid none" width={{ base: "100%", md: "100%" }} p={{ base: 0, md: 0 }}>
          {/* <SliderTestimonial /> */}
          <HomePageSlider />

          <Box border="1px solid none" width={{ base: "100%", md: "100%" }} p={{ base: 5, md: 0 }}>
            <Courses />
            <SetsUsApart />
            {/* <Universities /> */}
            <Explore />
            <WhyChoose />
            <Partners />
            
            <TrainingPrograms />

            <Testimonials />
            <TalkToOurTema />
            {/*  */}
            {/* <FAQ /> */}
            {/* <About /> */}
            {/* <PartnershipsSection /> */}
          </Box>
        </Box>
      </Center>
    </>
  );
};
