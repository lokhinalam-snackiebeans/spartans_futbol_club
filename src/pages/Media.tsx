import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

type VideoItem = {
  id: string;
  title: string;
  type: 'semi-final' | 'final';
  date: string;
};

export default function Media() {
  const [isMounted, setIsMounted] = useState(false);
  const { elementRef: headingRef, isVisible: headingVisible } = useScrollReveal();
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const videos: VideoItem[] = [
    {
      id: 'CruK-ecZcA8',
      title: 'Target Cup Semi-Final Match 1',
      type: 'semi-final',
      date: '2023-11-15',
    },
    {
      id: 'oDX4xWvN6kY',
      title: 'Target Cup Semi-Final Match 2',
      type: 'semi-final',
      date: '2023-11-15',
    },
    {
      id: 'ZPQ7XVd1GrQ',
      title: 'Target Cup Final Match',
      type: 'final',
      date: '2023-11-17',
    },
  ];

  const semiFinalVideos = videos.filter((video) => video.type === 'semi-final');
  const finalVideos = videos.filter((video) => video.type === 'final');

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Heading */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-12"
          >
            Media Gallery
          </motion.h1>
        </div>

        {/* Semi-Final Videos */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Target Cup Semi-Final Matches
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {semiFinalVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600">{new Date(video.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final Videos */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={isMounted ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-8"
          >
            Target Cup Final
          </motion.h2>
          <div className="grid grid-cols-1 gap-8">
            {finalVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isMounted ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video w-full">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600">{new Date(video.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
