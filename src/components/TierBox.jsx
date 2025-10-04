import {useState} from 'react';
import {motion} from 'framer-motion';

export default function TiersSection({tiers}) {
  const [activeIndex, setActiveIndex] = useState (null);

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      {tiers.map ((tier, index) => {
        let bgGradient = '';
        let borderColor = '';
        let shadowColor = '';
        switch (tier.name) {
          case 'Silver':
            bgGradient = 'bg-gradient-to-r from-gray-400/30 to-gray-500/30';
            borderColor = 'border-gray-400/40';
            shadowColor = 'shadow-gray-400/40';
            break;
          case 'Gold':
            bgGradient = 'bg-gradient-to-r from-yellow-400/30 to-yellow-600/30';
            borderColor = 'border-yellow-400/40';
            shadowColor = 'shadow-yellow-400/40';
            break;
          case 'Platinum':
            bgGradient = 'bg-gradient-to-r from-gray-700/25 to-gray-900/25';
            borderColor = 'border-gray-700/40';
            shadowColor = 'shadow-gray-700/25';
            break;
          case 'Diamond':
            bgGradient = 'bg-gradient-to-r from-blue-400/30 to-blue-600/30';
            borderColor = 'border-blue-400/40';
            shadowColor = 'shadow-blue-400/30';
            break;
          case 'Chief Sponsor':
            bgGradient = 'bg-gradient-to-r from-purple-500/25 to-pink-600/25';
            borderColor = 'border-purple-500/40';
            shadowColor = 'shadow-purple-500/30';
            break;
          case 'Title Sponsor':
            bgGradient = 'bg-gradient-to-r from-red-500/25 to-yellow-500/25';
            borderColor = 'border-red-500/40';
            shadowColor = 'shadow-red-500/30';
            break;
          default:
            bgGradient = 'bg-gray-800/20';
            borderColor = 'border-gray-600/40';
            shadowColor = 'shadow-gray-600/20';
        }

        return (
          <motion.div
            key={index}
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.4, delay: index * 0.1}}
            viewport={{once: true}}
            className={`relative group ${bgGradient} ${borderColor} border rounded-2xl p-8 md:p-10 min-h-[24rem] shadow-md hover:shadow-lg ${shadowColor} flex flex-col justify-center items-center cursor-pointer overflow-hidden`}
            onClick={() =>
              setActiveIndex (activeIndex === index ? null : index)}
          >
            {/* Title & Amount */}
            <div
              className={`transition-opacity duration-300 text-center ${activeIndex === index ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`}
            >
              <h3 className="text-4xl font-semibold text-white mb-4">
                {tier.name}
              </h3>
              <p className="text-3xl text-white font-bold">{tier.amount}</p>
            </div>

            <div
              className={`absolute inset-0 rounded-2xl flex flex-col justify-center p-0 text-sm transition-opacity duration-300 bg-black/50
    ${activeIndex === index ? 'opacity-100' : 'opacity-0'} 
    group-hover:opacity-100
  `}
            >
              <div className="flex flex-col justify-center items-start h-full w-full px-8 py-6">
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 w-full">
                  {tier.description.map ((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

          </motion.div>
        );
      })}
    </div>
  );
}
