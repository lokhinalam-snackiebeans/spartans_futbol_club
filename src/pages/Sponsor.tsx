import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Sponsor() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="py-12"
        >
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
            Help Our Cause
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Your support and contributions will enable us to meet our goals and improve conditions. Your generous donation will fund our mission.
          </p>
          <button className="px-8 py-3 bg-yellow-400 text-gray-900 rounded-full font-semibold hover:bg-yellow-500 transition-colors">
            Donate Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}
