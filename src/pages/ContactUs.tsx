import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ContactUs() {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
            Contact Us
          </h1>
          <p className="text-xl text-yellow-600 font-medium">
            Drop us a line!
          </p>
        </motion.div>

        <div className="bg-white max-w-md mx-auto rounded-lg shadow-sm p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
              <input 
                type="email" 
                id="email" 
                required 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full py-3 px-6 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              Send
            </button>
          </form>
          
          <p className="mt-4 text-xs text-gray-500 text-center">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="https://policies.google.com/privacy" className="text-yellow-600 hover:underline">Privacy Policy</a> and{' '}
            <a href="https://policies.google.com/terms" className="text-yellow-600 hover:underline">Terms of Service</a> apply.
          </p>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Better yet, see us in person!
            </h2>
            <p className="text-gray-700 mb-6">
              Feel free to meet with us before or after training sessions
            </p>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-yellow-600">Spartans Futbol Club</h3>
              <a 
                href="tel:5202229108" 
                className="text-gray-700 hover:text-yellow-600 text-lg font-medium inline-flex items-center"
              >
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (520) 222-9108
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
