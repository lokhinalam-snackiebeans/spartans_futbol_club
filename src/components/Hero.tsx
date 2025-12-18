import { Play } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { elementRef: subtitleRef, isVisible: subtitleVisible } = useScrollReveal();
  const { elementRef: buttonsRef, isVisible: buttonsVisible } = useScrollReveal();
  const { elementRef: imageRef, isVisible: imageVisible } = useScrollReveal();

  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Aligned with reference image */}
          <div className="flex flex-col h-full">
            <div className="flex-1 flex items-center">
              <div className="flex items-start gap-6">
                {/* Logo */}
                <div className="pt-12">
                  <img
                    src="/images/home/Spartans_logo.webp"
                    alt="Spartans Logo"
                    className="h-36 w-auto"
                  />
                </div>

                {/* Title and Stats Container */}
                <div className="relative">
                  {/* Stats - Positioned above the title */}
                  <div ref={statsRef} className={`mb-1 reveal ${statsVisible ? 'active' : ''}`}>
                    <div className="flex space-x-6">
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-0.5">10</p>
                        <p className="text-[10px] text-gray-500 tracking-widest">TITLES</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-0.5">19</p>
                        <p className="text-[10px] text-gray-500 tracking-widest">YEARS</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-600 mb-0.5">ONE</p>
                        <p className="text-[10px] text-gray-500 tracking-widest">CLUB</p>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <div ref={titleRef} className={`reveal ${titleVisible ? 'active' : ''}`}>
                    <h1 className="text-5xl lg:text-6xl font-black leading-[0.9] tracking-tight">
                      <span className="block">SPARTANS</span>
                      <span className="block">FUTBOL</span>
                      <span className="block">CLUB</span>
                    </h1>
                  </div>

                  {/* Buttons - Positioned right below the title */}
                  <div ref={buttonsRef} className={`mt-6 reveal ${buttonsVisible ? 'active' : ''}`}>
                    <div className="flex space-x-4">
                      <button
                        className="px-6 py-2 bg-black text-white text-sm rounded-full font-semibold hover:bg-gray-800 flex items-center space-x-1"
                        onClick={() => onNavigate?.('national-championship')}
                      >
                        <span>Achievements</span>
                        <span className="text-xs">→</span>
                      </button>
                      <button
                        className="px-5 py-2 border border-gray-300 text-sm rounded-full font-semibold hover:bg-gray-50"
                        onClick={() => onNavigate?.('sponsor')}
                      >
                        <span>Sponsor us</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Image Placeholder */}
          <div ref={imageRef} className={`relative reveal ${imageVisible ? 'active' : ''}`}>
            <div className="bg-white rounded-3xl aspect-square flex items-center justify-center overflow-hidden">
              <img
                src="/images/home/homepic.jpg"
                alt="Soccer team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
