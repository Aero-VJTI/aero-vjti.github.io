'use client';
import React from 'react';
import {
  FaEnvelope,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';

export default function Footer ({props,ref}) {
  return (
    <footer ref={ref} id='contact' className="w-full h-max bg-black text-white pt-24">
      <h2 className=" text-4xl md:text-6xl overflow-visible font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">
        <span className="bg-gradient-to-r from-blue-500 via-orange-400 to-orange-500 bg-clip-text text-transparent font-bold">
          Contact Us
        </span>
      </h2>
      <div className="flex justify-left items-center  max-w-6xl mx-auto ">
        <img
          src="/logo_1.png"
          alt="Aero VJTI Logo"
          className="w-24 h-24 flex justify-left"
        />
        <p className=" text-center text-2xl underline-offset-1 font-bold text-white font-mono">
          VJTI’s wings of innovation
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-10">

        {/* Left: Logo + Map */}
        <div className="flex-1 flex flex-col items-center md:items-start space-y-4">
          <div className="w-full h-64 md:h-80">
            <iframe
              title="VJTI Location"
              src="https://www.google.com/maps?q=Veermata+Jijabai+Technological+Institute,+Matunga,+Mumbai&output=embed"
              width="100%"
              height="100%"
              className="border-0 rounded-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex-1 flex flex-col space-y-8">

          <div className="flex ">
            {/* Department Info */}
            <div className="space-y-2">
              <h3 className="font-semibold text-2xl text-blue-400">
                Department Of Mechanical Engineering
              </h3>
              <p>Veermata Jijabai Technological Institute (VJTI)</p>
              <p>H. R. Mahajani Road, Matunga, Mumbai - 400019</p>
            </div>

          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="font-semibold text-2xl text-blue-400">Contact Details</h3>
            <p className="flex items-center gap-2 w-max hover:text-orange-500 cursor-pointer">
              <FaEnvelope />
              <a href="mailto:aero_vjti@vjti.ac.in" >
                aero_vjti@vjti.ac.in
              </a>
            </p>

            <p className="flex flex-col justify-start items-start gap-2 w-max ">
              <span className="flex justify-center items-center gap-2 hover:text-orange-500 cursor-pointer"><FaPhone /> Amey Dheple: +919423392559
              </span>
                <span className="flex justify-center items-center gap-2 hover:text-orange-500 cursor-pointer"> <FaPhone /> Dhruva Sambhoo: +919326638229</span>
                
            </p>
          </div>

          

          

        </div>

        <div className='flex flex-col gap-5'> 
          {/* Social Media */}
          <div className="space-y-2">
            <h3 className="font-semibold text-2xl text-blue-400">Follow Us</h3>
            <div className="flex items-center gap-4 text-2xl">
              <a
                href="https://www.instagram.com/aerovjti/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                <FaInstagram />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/aero-vjtii/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://youtube.com/@aerovjti7606?si=JJXlhfL7o8IrMFrs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                <FaYoutube />
              </a>
              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                <FaTwitter />
              </a> */}
            </div>
          </div>
          <div className="space-y-2 gap">
            <h3 className="font-semibold text-2xl text-blue-400">Maintained By</h3>
          
            <p className="flex justify-start items-start gap-2 w-max "> 
              <span className="flex justify-center items-center gap-2 hover:text-orange-500 cursor-pointer text-lg">Shivraj Kolwankar 
              </span>
              <a
                href="https://www.linkedin.com/in/shivraj-kolwankar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500 text-2xl" 
              >
                <FaLinkedin />
              </a>
                
            </p>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 mt-10 text-sm pb-10">
        &copy; {new Date ().getFullYear ()} Aero VJTI. All rights reserved.
      </div>
    </footer>
  );
}
