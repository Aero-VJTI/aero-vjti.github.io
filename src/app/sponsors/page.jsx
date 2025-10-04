"use client";
import { FaUsers, FaHandshake, FaFileDownload, FaEnvelope } from "react-icons/fa";
import React,{useState} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import TierBox from "@/components/TierBox"
export default function SponsorsPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const tiers = [
    {
      name: "Silver",
      amount: "₹10,000",
      description: [
        "Logo on event banners and website",
        "Social media appreciation post",
        "Certificate of sponsorship",
      ],
    },
    {
      name: "Gold",
      amount: "₹25,000",
      description: [
        "Logo on event T-shirts and banners",
        "Website and social media promotion",
        "On-stage mention during events",
      ],
    },
    {
      name: "Platinum",
      amount: "₹50,000",
      description: [
        "Dedicated promotion post",
        "Brand logo on event kits and standees",
        "Event booth access for promotions",
      ],
    },
    {
      name: "Diamond",
      amount: "₹75,000",
      description: [
        "Exclusive branding on major event assets",
        "Special mention in closing ceremony",
        "Collaboration post across AeroVJTI media",
      ],
    },
    {
      name: "Chief Sponsor",
      amount: "₹1,00,000",
      description: [
        "Prime logo placement on all materials",
        "Full promotional partnership",
        "Recognition across college and media",
      ],
    },
    {
      name: "Title Sponsor",
      amount: "₹2,00,000+",
      description: [
        "Event named after your brand",
        "Full-page feature on website and posters",
        "Lifetime recognition as AeroVJTI’s lead sponsor",
      ],
    },
  ];

  const sponsors = [
    {
      name: "TechWings",
      tier: "Title Sponsor",
      logo: "/sponsors/image.png",
      description:
        "Our Title Sponsor, TechWings, leads innovation in UAV systems and supports AeroVJTI’s journey in aviation technology and competitions.",
    },
    {
      name: "AeroZone",
      tier: "Chief Sponsor",
      logo: "/sponsors/image.png",
      description:
        "AeroZone has been a major supporter, providing advanced aerospace materials and guidance to our fabrication team.",
    },
    {
      name: "MakerSpace India",
      tier: "Platinum Sponsor",
      logo: "/sponsors/image.png",
      description:
        "MakerSpace India empowers us with access to modern manufacturing tools, helping our students innovate faster and better.",
    },
  ];

  const tierStyles = {
  Silver: { bgGradient: "bg-gradient-to-r from-gray-400 to-gray-600", borderColor: "border-gray-400", shadowColor: "shadow-gray-500/50" },
  Gold: { bgGradient: "bg-gradient-to-r from-yellow-400 to-yellow-600", borderColor: "border-yellow-400", shadowColor: "shadow-yellow-500/50" },
  Platinum: { bgGradient: "bg-gradient-to-r from-blue-400 to-purple-600", borderColor: "border-blue-400", shadowColor: "shadow-blue-500/50" },
  Diamond: { bgGradient: "bg-gradient-to-r from-indigo-500 to-blue-700", borderColor: "border-indigo-500", shadowColor: "shadow-indigo-600/50" },
  "Chief Sponsor": { bgGradient: "bg-gradient-to-r from-pink-500 to-red-600", borderColor: "border-pink-500", shadowColor: "shadow-pink-600/50" },
  "Title Sponsor": { bgGradient: "bg-gradient-to-r from-orange-500 to-red-600", borderColor: "border-orange-500", shadowColor: "shadow-orange-600/50" },
};

  // Smooth scroll function
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white py-20 px-6">

        {/* ---------------- ABOUT SECTION ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center md:mb-20 md:h-[90vh] flex flex-col justify-center max-md:mt-5"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
            About <span className="text-orange-500">Aero VJTI</span>
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed mb-10">
            <span className="font-semibold text-blue-300">AeroVJTI</span> is the official aeromodelling and aircraft design club of{" "}
            <span className="font-semibold text-blue-300">Veermata Jijabai Technological Institute (VJTI)</span>.
            The club is dedicated to advancing knowledge and skills in aviation, UAVs, and aerospace engineering. Through hands-on learning, competitions, and research, we aim to inspire the next generation of aerospace innovators and engineers.
          </p>

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center mb-8"
          >
            <img
              src="/logo_1.png"
              alt="AeroVJTI Logo"
              className="w-40 h-40 object-contain rounded-full border-2 border-blue-400 shadow-lg shadow-blue-500/40 p-2"
            />
          </motion.div>

          {/* Buttons */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="flex flex-wrap justify-center gap-6 mt-6"
>
  {/* Sponsorship Tiers */}
  <button
    onClick={() => scrollToSection("tiers")}
    className="cursor-pointer flex items-center gap-3  text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-blue-600/40 transition-all"
  >
    <FaUsers size={20} />
    <span>View Sponsorship Tiers</span>
  </button>

  {/* Our Sponsors */}
  <button
    onClick={() => scrollToSection("sponsors")}
    className="cursor-pointer flex items-center gap-3 text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-orange-600/40 transition-all"
  >
    <FaHandshake size={20} />
    <span>Our Sponsors</span>
  </button>

  {/* Brochure Download */}
  <a
    href="/AeroVJTI_Brochure.pdf"
    download
    className="cursor-pointer flex items-center gap-3  text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-green-500/40 transition-all"
  >
    <FaFileDownload size={20} />
    <span>Download Brochure</span>
  </a>

  {/* Contact Us */}
  <button
    onClick={() => scrollToSection("contact")}
    className="cursor-pointer flex items-center gap-3  text-white px-6 py-3 rounded-xl font-semibold shadow-md shadow-cyan-500/40 transition-all"
  >
    <FaEnvelope size={20} />
    <span>Contact Us</span>
  </button>
</motion.div>
        </motion.div>
        {/* ---------------- TIERS SECTION ---------------- */}
        <div
  id="tiers"
  className="mt-10 flex flex-col justify-center items-center w-full pt-24" // add pt-24
>
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className=" text-4xl md:text-6xl font-bold text-center  bg-gradient-to-r from-blue-500 via-orange-400 to-orange-500 bg-clip-text text-transparent mb-10"
  >
    Sponsorship Tiers
  </motion.h2>
             <TierBox tiers={tiers}/>

        </div>

        {/* ---------------- SPONSORS SECTION ---------------- */}
         <div
  id="sponsors"
  className="mt-10 flex flex-col justify-center items-center w-full pt-24" // add pt-24
>
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className=" text-4xl md:text-6xl font-bold text-center  bg-gradient-to-r from-blue-500 via-orange-400 to-orange-500 bg-clip-text text-transparent mb-10"
  >
    Our Sponsors
  </motion.h2>

          {/* <div className="max-w-6xl mx-auto space-y-10">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-10 hover:bg-white/20 transition-all shadow-lg hover:shadow-blue-500/40"
              >
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={200}
                    height={200}
                    className="rounded-xl object-contain"
                  />
                </div>

                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-semibold mb-2 text-blue-400">{sponsor.name}</h3>
                  <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">{sponsor.tier}</p>
                  <p className="text-gray-300 text-base leading-relaxed">{sponsor.description}</p>
                </div>
              </motion.div>
            ))}
          </div> */}

          <div className="max-w-6xl mx-auto space-y-10">
  {sponsors.map((sponsor, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
      tabIndex={0} // makes div focusable for mobile tap
      className="flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-10
        hover:bg-white/20 focus:bg-white/20 active:bg-white/20
        transition-all shadow-lg hover:shadow-blue-500/40 focus:shadow-blue-500/40 active:shadow-blue-500/40"
    >
      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
        <Image
          src={sponsor.logo}
          alt={sponsor.name}
          width={200}
          height={200}
          className="rounded-xl object-contain"
        />
      </div>

      <div className="text-center md:text-left">
        <h3 className="text-3xl font-semibold mb-2 text-blue-400">{sponsor.name}</h3>
        <p className="text-sm uppercase tracking-wider text-gray-400 mb-4">{sponsor.tier}</p>
        <p className="text-gray-300 text-base leading-relaxed">{sponsor.description}</p>
      </div>
    </motion.div>
  ))}
</div>

        </div>

        {/* ---------------- CALL TO ACTION ---------------- */}
        {/* <div className="text-center mt-20">
          <motion.a
            href="mailto:aero_vjti@vjti.ac.in"
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-md"
          >
            Sponsor Us
          </motion.a>
        </div> */}
      </div>

      <Contact />
    </>
  );
}
