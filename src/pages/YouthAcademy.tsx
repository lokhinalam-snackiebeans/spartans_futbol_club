import { useScrollReveal } from '../hooks/useScrollReveal';

export default function YouthAcademy() {
  const { elementRef: headingRef, isVisible: headingVisible } = useScrollReveal();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollReveal();
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Layered Heading */}
        <div ref={headingRef} className={`relative text-center mb-16 reveal ${headingVisible ? 'active' : ''}`}>
          {/* Background Text */}
          <h2 className="text-8xl md:text-9xl font-black text-gray-100 uppercase tracking-wider">
            YOUTH ACADEMY
          </h2>
          {/* Foreground Text */}
          <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-black text-black uppercase">
            Register Today
          </h1>
        </div>

        {/* Content Section with Image Collage */}
        <div ref={contentRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16 reveal ${contentVisible ? 'active' : ''}`}>
          {/* Left Side - Image Collage */}
          <div className="space-y-6">
            {/* Two Images Side by Side */}
            <div className="grid grid-cols-2 gap-6">
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl">
                <img
                  src="/images/youth-academy/1.webp"
                  alt="Youth Academy Training"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-2xl">
                <img
                  src="/images/youth-academy/2.webp"
                  alt="Youth Academy Team"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Register Today
            </h2>
            <p className="text-lg text-gray-600">
              U4, U6, U8, age groups. All Coed.
            </p>
            
            <div className="space-y-4 text-gray-700">
              <p><span className="font-semibold">8 game season – kick off 9/1.</span></p>
              <p>Practices with Spartans / Tuzos certified coaches beginning in September.</p>
              <p>Practice locations: Todd Harris Park</p>
              <p>Games played at Todd Harris Park on Saturdays.</p>
              <p>Players will receive a uniform, team and individual photo.</p>
              <p className="font-semibold">Registration August 7th, Todd Harris Park. 9-12pm</p>
            </div>

            <a href="/youthacademy-registration" className="mt-6 inline-block px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors">
              Click to Register
            </a>
          </div>
        </div>

        {/* Age Groups Table - Full Width Below */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Age Groups:</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Age Group</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Year Born</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Pricing</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Practices</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Games</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Game Format</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Goalkeepers</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Ball Size</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Game Location</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">U4</td>
                  <td className="border border-gray-300 px-4 py-3">2013-2017</td>
                  <td className="border border-gray-300 px-4 py-3">$50</td>
                  <td className="border border-gray-300 px-4 py-3">1 day a week</td>
                  <td className="border border-gray-300 px-4 py-3">1 day a week</td>
                  <td className="border border-gray-300 px-4 py-3">4v4</td>
                  <td className="border border-gray-300 px-4 py-3">No</td>
                  <td className="border border-gray-300 px-4 py-3">3</td>
                  <td className="border border-gray-300 px-4 py-3">Todd Harris Park</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-gray-25">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">U6</td>
                  <td className="border border-gray-300 px-4 py-3">2013-2017</td>
                  <td className="border border-gray-300 px-4 py-3">$75</td>
                  <td className="border border-gray-300 px-4 py-3">1 day a week</td>
                  <td className="border border-gray-300 px-4 py-3">1 day a week</td>
                  <td className="border border-gray-300 px-4 py-3">4v4</td>
                  <td className="border border-gray-300 px-4 py-3">No</td>
                  <td className="border border-gray-300 px-4 py-3">3</td>
                  <td className="border border-gray-300 px-4 py-3">Todd Harris Park</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-3 font-semibold">U8</td>
                  <td className="border border-gray-300 px-4 py-3">2013-2017</td>
                  <td className="border border-gray-300 px-4 py-3">$75</td>
                  <td className="border border-gray-300 px-4 py-3">1 day a week</td>
                  <td className="border border-gray-300 px-4 py-3">1 day a week</td>
                  <td className="border border-gray-300 px-4 py-3">4v4</td>
                  <td className="border border-gray-300 px-4 py-3">No</td>
                  <td className="border border-gray-300 px-4 py-3">3</td>
                  <td className="border border-gray-300 px-4 py-3">Todd Harris Park</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact Information Section */}
        <div id="register" className="bg-gray-50 rounded-3xl p-8 md:p-12 mt-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">For more information</h3>
            <div className="space-y-4 text-lg">
              <p className="font-semibold text-xl">Gabino Medina</p>
              <p className="text-gray-700">Director of Youth Academy</p>
              <a href="mailto:gmedina@fcspartans.org" className="text-blue-600 hover:underline">gmedina@fcspartans.org</a>
            </div>
            {/* <a 
              href="#" 
              className="mt-8 inline-block px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors text-lg"
              onClick={(e) => {
                e.preventDefault();
                // Add registration link here when available
                alert('Registration link will be added here');
              }}
            >
              Click to Register
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
}
