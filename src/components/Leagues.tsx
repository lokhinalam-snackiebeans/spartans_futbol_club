import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Leagues() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className={`mb-20 relative reveal ${titleVisible ? 'active' : ''}`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1 relative">
              {/* Background Text */}
              <h2 className="text-5xl md:text-6xl font-black text-blue-50 leading-none mb-4">
                UPCOMING AND<br />LATEST MATCHES
              </h2>
              {/* Foreground Text */}
              <h2 className="absolute inset-0 text-4xl md:text-5xl font-black text-black leading-none mb-4">
                UPCOMING AND<br />LATEST MATCHES
              </h2>
            </div>
          </div>
          <p className="text-gray-500 text-sm uppercase tracking-wider">Competing in premier youth soccer leagues</p>
        </div>

        {/* League Logos Grid */}
        <div ref={gridRef} className={`grid grid-cols-2 md:grid-cols-5 gap-6 reveal ${gridVisible ? 'active' : ''}`}>
          {/* League 1 */}
          <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded-xl">
            <img
              src="/images/home/league1.webp"
              alt="League 1"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* League 2 */}
          <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded-xl">
            <img
              src="/images/home/league2.webp"
              alt="League 2"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* League 3 */}
          <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded-xl">
            <img
              src="/images/home/league3.webp"
              alt="League 3"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* League 4 */}
          <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded-xl">
            <img
              src="/images/home/league4.webp"
              alt="League 4"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* League 5 */}
          <div className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded-xl">
            <img
              src="/images/home/league5.webp"
              alt="League 5"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
