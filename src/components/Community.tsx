export default function Community() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left - Text */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Community</h2>
            <p className="text-gray-600">Join our global community of passionate football players and enthusiasts.</p>
          </div>

          {/* Middle - Stats */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <p className="text-4xl font-bold text-black mb-2">600+</p>
            <p className="text-gray-600">Join our global community</p>
          </div>

          {/* Right - Avatar Group */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white font-bold"
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
