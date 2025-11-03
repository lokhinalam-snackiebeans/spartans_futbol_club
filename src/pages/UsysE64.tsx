import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function UsysE64() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Spartans FC Joins USYS National League E64
          </h1>
        </motion.div>

        {/* Video Section */}
        <div className="mb-12 bg-gray-100 rounded-xl p-4">
          <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto">
            <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/1CT6DysWteQ?rel=0"
                title="Spartans FC - USYS National League E64"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="prose max-w-3xl mx-auto text-gray-700">
          <p className="text-lg mb-6">
            Spartans FC is excited to provide National Level Competition to the players of Southern Arizona. Spartans FC is the only Club in Southern Arizona competing at this level.
          </p>
          <p className="text-lg mb-8">
            Are you ready to compete at a higher level? Contact us and let the journey begin!
          </p>
          
          <div className="mt-8 text-center">
            <a 
              href="/contact" 
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Us Today
            </a>
          </div>
        </div>

        {/* Elite 64 Regional League Information */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Elite 64 Regional League Team Information
          </h2>
          
          {/* Quick Links */}
          <div className="bg-gray-50 p-6 rounded-xl mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Elite 64 Regional League Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="#" className="text-blue-600 hover:underline">Info Guide</a>
              <a href="#" className="text-blue-600 hover:underline">Game Schedules</a>
              <a href="#" className="text-blue-600 hover:underline">League Rules</a>
              <a href="#" className="text-blue-600 hover:underline">League Resources / Social Media</a>
              <a href="#" className="text-blue-600 hover:underline">College Coaches & Scouts</a>
              <a href="#" className="text-blue-600 hover:underline">Referee Payments</a>
            </div>
          </div>

          {/* Referee Payment Information */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Referee Payments</h3>
            <p className="text-gray-700 mb-4">
              The home club will cover the entire referee payments for their home games. Teams do not have to pay any referee fees for their away games.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 mt-4">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Age Group</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Payment Details</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">13U and 14U</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">$70 to Referee and $50 to each AR</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">$170</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">15U and 16U</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">$80 to Referee and $55 to each AR</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">$190</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">17U and 19U</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">$90 to Referee and $60 to each AR</td>
                    <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">$210</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              *AR = Assistant Referee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
