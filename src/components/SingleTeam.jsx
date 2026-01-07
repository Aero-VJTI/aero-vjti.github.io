import React from 'react';

function SingleTeam({props, ref}) {
  return (
    <section
      ref={ref}
      id="team"
      className="w-full min-h-screen bg-gradient-to-l max-md:bg-gradient-to-b from-black via-slate-900 to-black animate-gradient px-6 py-24"
    >
      <div className="max-w-6xl max-md:pt-10 mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl overflow-visible font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-orange-400 to-orange-500 bg-clip-text text-transparent font-bold">
            Meet Our Team
          </span>
          <span className="text-orange-500"> </span>
        </h2>
        <p className=" text-center text-2xl underline-offset-1 font-bold text-white font-mono">
          Faces of Innovation
        </p>

        <img
        className='mt-10 rounded-md'
          src="https://res.cloudinary.com/dqqfkjchq/image/upload/v1767773278/grp_image_jtqa7q.jpg"
          alt=""
        />
      </div>
    </section>
  );
}

export default SingleTeam;
