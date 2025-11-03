export default function TeamInfo() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="space-y-4">
            <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full font-bold">
              1
            </div>
            <h3 className="text-xl font-bold">SIGN UP</h3>
            <p className="text-gray-600">Create your account and join our community of football enthusiasts from around the world.</p>
          </div>

          {/* Step 2 */}
          <div className="space-y-4">
            <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full font-bold">
              2
            </div>
            <h3 className="text-xl font-bold">PICK A TEAM</h3>
            <p className="text-gray-600">Select a team that matches your skill level and playing style. You can switch teams anytime.</p>
          </div>

          {/* Step 3 */}
          <div className="space-y-4">
            <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full font-bold">
              3
            </div>
            <h3 className="text-xl font-bold">PASS A TEST</h3>
            <p className="text-gray-600">Complete a quick assessment to verify your skills and get matched with the right team.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
