"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact"
import Events from "@/components/Workshops"
const EventsPage = () => {
  return (
    <>
     <Navbar />
     <Events />
     <Contact />
    </>
  );
};

export default EventsPage;
