import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ContactUs() {
  const [isMounted, setIsMounted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);

    const endpoint = import.meta.env.VITE_GOOGLE_SHEETS_ENDPOINT as string | undefined;

    const url = import.meta.env.DEV ? '/api/sheets' : endpoint;

    const requestId = `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    if (!url) {
      setSubmitError('Missing Google Sheets endpoint. Set VITE_GOOGLE_SHEETS_ENDPOINT in your environment.');
      return;
    }

    setIsSubmitting(true);
    try {
      console.groupCollapsed(`[ContactUs] submit start (${requestId})`);
      console.log('mode', import.meta.env.MODE);
      console.log('dev', import.meta.env.DEV);
      console.log('url', url);
      if (!import.meta.env.DEV) {
        console.log('endpoint', endpoint);
      }

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          page: window.location.href,
          createdAt: new Date().toISOString()
        })
      });

      console.log('status', res.status, res.statusText);
      console.log('response headers', {
        'content-type': res.headers.get('content-type'),
        location: res.headers.get('location'),
      });

      const responseText = await res.text().catch(() => '');
      console.log('response body', responseText);

      if (!res.ok) {
        throw new Error(responseText || `Request failed (${res.status})`);
      }

      setSubmitSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Failed to submit form');
    } finally {
      console.groupEnd();
      setIsSubmitting(false);
    }
  };

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
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
              <input 
                type="email" 
                id="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              ></textarea>
            </div>

            {submitError && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                {submitError}
              </div>
            )}

            {submitSuccess && (
              <div className="text-sm text-green-700 bg-green-50 border border-green-100 rounded-lg px-4 py-3">
                Thanks! Your message was sent.
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending…' : 'Send'}
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
            <p className="text-gray-600 mb-6 whitespace-nowrap">Feel free to meet with us before or after training sessions</p>
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
