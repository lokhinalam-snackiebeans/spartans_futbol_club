export default function MatchInfo() {
  // Sample league logos - replace with your actual logo imports
  const leagueLogos = [
    { id: 1, name: 'Premier League', src: '/path-to-premier-league-logo.png' },
    { id: 2, name: 'La Liga', src: '/path-to-laliga-logo.png' },
    { id: 3, name: 'Bundesliga', src: '/path-to-bundesliga-logo.png' },
    { id: 4, name: 'Serie A', src: '/path-to-seriea-logo.png' },
    { id: 5, name: 'Ligue 1', src: '/path-to-ligue1-logo.png' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Title and Subtitle */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              UPCOMING AND LATEST MATCHES
            </h2>
            <p className="text-lg text-gray-600">
              COMPETING IN PREMIER YOUTH SOCCER LEAGUES
            </p>
          </div>

          {/* Right Column - League Logos Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {leagueLogos.map((league) => (
              <div 
                key={league.id}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center"
              >
                <img 
                  src={league.src} 
                  alt={league.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
