import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Programs() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className={`mb-20 relative reveal ${titleVisible ? 'active' : ''}`}>
          {/* Background Text */}
          <h2 className="text-5xl md:text-6xl font-black text-gray-800 leading-none mb-4">
            OUR PROGRAMS
          </h2>
          {/* Foreground Text */}
          <h2 className="absolute inset-0 text-4xl md:text-5xl font-black text-white leading-none mb-4">
            OUR PROGRAMS
          </h2>
        </div>

        {/* Programs Grid */}
        <div ref={gridRef} className={`grid grid-cols-1 md:grid-cols-3 gap-8 reveal ${gridVisible ? 'active' : ''}`}>
          {/* Youth Academy */}
          <div className="group">
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-black mb-2 transition-colors" style={{ color: '#fff74d' }}>
                Youth Academy
              </h3>
              <p className="text-2xl font-bold text-gray-500">U6-U12</p>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              A soccer training/playing program directly linked to our Competitive club teams that prioritizes skill development and nurtures a love for playing soccer in a fun, competitive, and age appropriate environment through individual, small group activities, and small-sided play.
            </p>
          </div>

          {/* Competitive */}
          <div className="group">
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-gray-400 transition-colors">
                Competitive
              </h3>
              <p className="text-2xl font-bold text-gray-500">U13-U19</p>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Dedicated to promoting the game of soccer by providing the highest possible level of technical and tactical training, skill development, and competitive team play by skilled, qualified, and enthusiastic coaches in order to provide players with an opportunity to further excel in the game of soccer.
            </p>
          </div>

          {/* E64 National League */}
          <div className="group">
            <div className="mb-6">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:text-gray-400 transition-colors">
                E64 National<br />League
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Spartans is proud to offer its players the opportunity to play in the E64 National League (boys) to provide the highest level of competitive play for its top athletes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
