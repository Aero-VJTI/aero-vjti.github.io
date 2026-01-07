"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact"
// import Team from "@/components/Teams"
import SingleTeam from "@/components/SingleTeam";
const MerchandisePage = () => {
  return (
    <>
     <Navbar />
     {/* <Team /> */}
     <SingleTeam/>
     <Contact />
    </>
    
  );
};

export default MerchandisePage;
