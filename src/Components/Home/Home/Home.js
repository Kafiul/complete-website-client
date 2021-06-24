import React from "react";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Project from "../Project/Project";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Project />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
