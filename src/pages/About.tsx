import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            About Us
          </h1>
        </motion.div>

        {/* History Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">History</h2>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              In 2014, the first Spartans soccer team was created to fill the need of helping refugee children from the most troubled corners of the world - Afghanistan, Bosnia, Burundi, Congo, Gambia, Iraq, Syria, Eritrea, Kosovo, Mexico, Liberia, Somalia and Sudan. These children had endured unimaginable hardships. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Soccer was a passion that sustained them through brutal circumstances and gave them a sense of security and a platform where they could positively release frustrations and fear. These children would come to local Tucson parks and parking lots just to play the game. Despite challenges locating proper practice fields, minimal funding for equipment and zero fans on the sidelines, the Spartans team practiced hard and demonstrated a team spirit that draws admiration from referees and our opposing teams.
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-8 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our mission is to positively impact the development of youth in our community by providing soccer and life-enriching opportunities to young players of all ages and playing abilities. To create a lifelong passion for the sport of soccer and to help raise the level of soccer in our city, our state and our nation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We strive to play an active role in the leadership, development and personal growth of our players and staff by being an active member of our community through service, partnerships and programs. Our ultimate goal as a club is to encourage, inspire and empower each player and coach to be able to reach the highest level possible within the game and in life, while helping create leaders and individuals that will inspire others to do the same.
            </p>
          </div>
        </motion.div>

        {/* More Than a Game Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center bg-gray-900 rounded-xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">More Than a Game</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            If you believe soccer is more than a game, join our Club as a Coach, Manager, Sponsor or Booster to help enrich the lives of kids in our community.
          </p>
          <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Get Involved
          </button>
        </motion.div>
      </div>
    </div>
  );
}
