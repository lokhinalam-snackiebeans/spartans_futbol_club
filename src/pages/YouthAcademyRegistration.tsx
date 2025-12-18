export default function YouthAcademyRegistration() {
  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Youth Academy Registration</h1>
        <p className="text-lg text-gray-600">Registration page is coming soon.</p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg font-bold text-gray-900">MEMBERSHIP FORM</h2>
            <a
              href="/pdfs/membership_form_6-27-19.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              Download Membership Form
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg font-bold text-gray-900">CONCUSSION FORM</h2>
            <a
              href="/pdfs/asa_head_injury_concussion_policy___procedures.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              Download Concussion Form
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-lg font-bold text-gray-900">CODE OF CONDUCT FORM</h2>
            <a
              href="/pdfs/asa_code_of_conduct_6-27-19.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-blue-600 hover:underline"
            >
              Download Code of Conduct Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
