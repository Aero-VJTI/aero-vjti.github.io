// import Image from "next/image";

// export default function Home() {
  //   return (
    //     <div >
    //       <Hero/>
    
    //     </div>
    //   );
    // }
"use client";
import Hero from "@/components/Hero";
import React, { useRef } from "react";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/About";
import WorkshopsEvents from "@/components/Workshops";
import Timeline from "@/components/TimeLine";
import AircraftGallery from "@/components/Aircrafts";
import TeamMembers from "@/components/Teams";
import Contact from "@/components/Contact";
export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const WorkshopsEventsRef = useRef(null);
  const AircraftGalleryRef = useRef(null);
  const TeamMembersRef = useRef(null);
  const TimelineRef = useRef(null);
  const ContactRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = { hero: heroRef, about: aboutRef, workshop:WorkshopsEventsRef,aircrafts:AircraftGalleryRef,team:TeamMembersRef,timeline:TimelineRef,contact:ContactRef };
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full h-screen bg-gradient-to-r from-black via-slate-900 to-black animate-gradient">
      <Navbar scrollToSection={scrollToSection} />
      <Hero ref={heroRef} />
      <AboutUs ref={aboutRef} />
      <WorkshopsEvents ref={WorkshopsEventsRef} />
      {/* <AircraftGallery ref={AircraftGalleryRef} /> */}
      <Timeline ref={TimelineRef} />
      <TeamMembers ref={TeamMembersRef} />
      <Contact ref={ContactRef} />
      {/* <Contact ref={contactRef} /> */}
    </div>
  );
}
