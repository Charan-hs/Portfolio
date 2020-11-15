import React, { useState } from "react";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import FrontSection from "../components/FrontSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Abilities from "../components/Abilities";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <FrontSection />

      <Abilities {...homeObjTwo} />
      <Projects />
      <InfoSection {...homeObjOne} />
      <Footer />
    </>
  );
};

export default Home;
