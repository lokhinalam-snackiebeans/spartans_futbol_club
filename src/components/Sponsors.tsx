import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Sponsors() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className={`text-center mb-16 reveal ${titleVisible ? 'active' : ''}`}>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            THANK YOU TO OUR SPONSORS
          </h2>
        </div>

        {/* Sponsors Logos Grid */}
        <div ref={gridRef} className={`grid grid-cols-2 md:grid-cols-4 gap-4 items-center reveal ${gridVisible ? 'active' : ''}`}>
          {/* Sponsor 1 */}
          <div className="flex items-center justify-center">
            <img
              src="/images/Sponsors/1.webp"
              alt="Sponsor 1"
              className="h-20 w-auto object-contain border border-gray-200 rounded p-2 transition-all hover:shadow-sm"
            />
          </div>

          {/* Sponsor 2 */}
          <div className="flex items-center justify-center">
            <img
              src="/images/Sponsors/2.webp"
              alt="Sponsor 2"
              className="h-20 w-auto object-contain border border-gray-200 rounded p-2 transition-all hover:shadow-sm"
            />
          </div>

          {/* Sponsor 3 */}
          <div className="flex items-center justify-center">
            <img
              src="/images/Sponsors/3.webp"
              alt="Sponsor 3"
              className="h-20 w-auto object-contain border border-gray-200 rounded p-2 transition-all hover:shadow-sm"
            />
          </div>

          {/* Sponsor 4 */}
          <div className="flex items-center justify-center">
            <img
              src="/images/Sponsors/4.webp"
              alt="Sponsor 4"
              className="h-20 w-auto object-contain border border-gray-200 rounded p-2 transition-all hover:shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
