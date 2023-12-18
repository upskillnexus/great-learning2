import React from "react";
import ContactusComp from "../../Components/Contact/Contactus";
import AboutBanner from "../../Components/About/Banner";

const Contactus = () => {
  const data = [
    {
      title: "RISE ABOVE THE REST",
      heading: "Your Path To A Digitech-Driven Successful Career Starts Here",
      pera: "Our Mission: To Create the Digitech Leaders of Tomorrow",
      img: "/contactus/banner.png",
      buttonText: "Learn More",
      link: "/about",
    },
  ];
  return (
    <>
      <AboutBanner data={data} />
      <ContactusComp />
    </>
  );
};

export default Contactus;
