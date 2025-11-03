import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface NationalChampionshipProps {
  onNavigate?: (page: string) => void;
}

export default function NationalChampionship({ onNavigate }: NationalChampionshipProps = {}) {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const { elementRef: headingRef, isVisible: headingVisible } = useScrollReveal();
  const { elementRef: collageRef, isVisible: collageVisible } = useScrollReveal();
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { elementRef: videoRef, isVisible: videoVisible } = useScrollReveal();
  const { elementRef: galleryRef, isVisible: galleryVisible } = useScrollReveal();
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollReveal();
  const { elementRef: thanksRef, isVisible: thanksVisible } = useScrollReveal();
  const { elementRef: statsRef, isVisible: statsVisible } = useScrollReveal();
  const { elementRef: finalGalleryRef, isVisible: finalGalleryVisible } = useScrollReveal();
  const { elementRef: conquistadoresRef, isVisible: conquistadoresVisible } = useScrollReveal();

  const toggleCard = (cardNumber: number) => {
    setExpandedCard(expandedCard === cardNumber ? null : cardNumber);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Layered Heading */}
        <div ref={headingRef} className={`relative text-center mb-16 reveal ${headingVisible ? 'active' : ''}`}>
          {/* Background Text */}
          <h2 className="text-8xl md:text-9xl font-black text-gray-100 uppercase tracking-wider">
            PRESIDENTS CUP
          </h2>
          {/* Foreground Text */}
          <h1 className="absolute inset-0 flex items-center justify-center text-4xl md:text-5xl font-black text-black uppercase">
            National Championship
          </h1>
        </div>

        {/* Collage Section */}
        <div ref={collageRef} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center reveal ${collageVisible ? 'active' : ''}`}>
          {/* Left Side - Large Featured Image */}
          <div className="relative overflow-hidden rounded-3xl h-96 md:h-full md:min-h-96">
            <img
              src="/images/national-championship/1.webp"
              alt="National Championship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Collage and Content */}
          <div className="space-y-6">
            {/* Top Row - 2 Images */}
            <div className="grid grid-cols-2 gap-4">
              {/* Top Left */}
              <div className="rounded-3xl overflow-hidden h-48 md:h-56">
                <img
                  src="/images/national-championship/10.webp"
                  alt="Image 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Top Right */}
              <div className="rounded-3xl overflow-hidden h-48 md:h-56">
                <img
                  src="/images/national-championship/18.webp"
                  alt="Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bottom - Content Box */}
            <div className="bg-black text-white rounded-3xl p-8 md:p-12 flex items-center justify-center overflow-y-auto">
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-black leading-tight">
                  07 Academy wins Presidents Cup National Championship
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  <span className="font-bold">Tucson, AZ— July 11, 2021</span> — Today at the National Championship game held in Des Moines, Iowa, Spartans FC 07 Boys secured a 4-2 victory over Boreal FC of Minnesota. Spartans FC made it to the national championship game by first winning the state competition and then won the regional competition in Salt Lake City.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content Section */}
        <div ref={contentRef} className={`mt-16 space-y-6 reveal ${contentVisible ? 'active' : ''}`}>
          <p className="text-lg leading-relaxed text-gray-700">
            In Summer of 2020, soccer fields were closed in Tucson and the pandemic was a way of life for all of us. Arizona Advanced Leagues in Phoenix decided to open up its 2020 season and a small group of boys started to train for the upcoming season. They traveled to Sahuarita Arizona to train as soccer fields were closed in Tucson.
          </p>
        </div>

        {/* Text and Video Section */}
        <div ref={videoRef} className={`mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal ${videoVisible ? 'active' : ''}`}>
          {/* Left Side - Text */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              This team trained throughout the summer in hopes that the season would not be cancelled due to Covid. The time finally came and the league kicked off with a Scrimmage Fest held in Maricopa, AZ. Here are some player interviews before their first game of the season expressing their goals and outlook for the upcoming season.
            </p>
          </div>

          {/* Right Side - Video */}
          <div className="relative overflow-hidden rounded-3xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/U-P18YJKR2w"
              title="Spartans FC National Championship Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Image Gallery and Text Section */}
        <div ref={galleryRef} className={`mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center reveal ${galleryVisible ? 'active' : ''}`}>
          {/* Left Side - Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden h-40 md:h-48">
              <img
                src="/images/national-championship/12.png"
                alt="Gallery 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-40 md:h-48">
              <img
                src="/images/national-championship/20.webp"
                alt="Gallery 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-40 md:h-48">
              <img
                src="/images/national-championship/21.webp"
                alt="Gallery 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-40 md:h-48">
              <img
                src="/images/national-championship/22.webp"
                alt="Gallery 4"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black">
              Arizona Advanced Leagues State League Season
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
              The boys worked hard to improve their game week after week. They placed 1st in Arizona State League with a record of 10 wins - 0 ties - 0 loss.
            </p>
          </div>
        </div>

        {/* Tournament Description */}
        <div className="mt-16 space-y-6">
          <p className="text-lg leading-relaxed text-gray-700">
            The Spartans decided to enter the Presidents Cup National Tournament post season. This tournament starts at the state level and state champions then compete at one of four regional competitions. Winners from these four regional championships then compete for the National Championship.
          </p>
        </div>

        {/* 3 Cards Section */}
        <div ref={cardsRef} className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 reveal ${cardsVisible ? 'active' : ''}`}>
          {/* Card 1 */}
          <div className="bg-black rounded-3xl overflow-hidden">
            <div className="relative h-80">
              <img
                src="/images/national-championship/8.webp"
                alt="Presidents Cup State Competition"
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => toggleCard(1)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-colors cursor-pointer"
              >
                {expandedCard === 1 ? 'SHOW LESS' : 'READ MORE'}
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black text-white mb-2">Presidents Cup State Competition</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Spartans Academy Win State Championship and advance to the Region 4 Championships!
              </p>
              {expandedCard === 1 && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="space-y-2">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold">SPARTANS FC ACADEMY 07B</span> vs FBSL TUZOS 07 BLUE <span className="text-green-400 font-semibold">Win 2-0</span>
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold">SPARTANS FC ACADEMY 07B</span> vs FC NSFC 07 BOYS BLUE <span className="text-green-400 font-semibold">Win 2-1</span>
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold">SPARTANS FC ACADEMY 07B</span> vs NORTH SCOTTSDALE 07 SANDSHARKS <span className="text-green-400 font-semibold">Win 6-0</span>
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold">SPARTANS FC ACADEMY 07B</span> vs ARIZONA AZSC 07B COKER <span className="text-green-400 font-semibold">Win 8-1</span>
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold">SPARTANS FC ACADEMY 07B</span> vs PRFC WEST VALLEY 07B SANCHEZ <span className="text-green-400 font-semibold">Win 7-4</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-black rounded-3xl overflow-hidden">
            <div className="relative h-80">
              <img
                src="/images/national-championship/14.png"
                alt="Region 4 Regional Presidents Cup Championship, Salt Lake City Utah"
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => toggleCard(2)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-colors cursor-pointer"
              >
                {expandedCard === 2 ? 'SHOW LESS' : 'READ MORE'}
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-black text-white mb-2">Region 4 Regional Presidents Cup Championship, Salt Lake City Utah</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Spartans Academy Win Regional Championship and advance to the National Championships!
              </p>
              {expandedCard === 2 && (
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <div className="space-y-2">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold">SPARTANS FC ACADEMY 07B (AZ)</span> vs Boulder County United 07 Boys Academy White (CO) <span className="text-green-400 font-semibold">Win 11-2</span>
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold">SPARTANS FC ACADEMY 07B (AZ)</span> vs Desert United Soccer Club Desert United B 07 (CA) <span className="text-green-400 font-semibold">Win 8-1</span>
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="font-semibold">SPARTANS FC ACADEMY 07B (AZ)</span> vs Shooters SC Shooters SC 07 Premier CT (UT) <span className="text-green-400 font-semibold">Win 5-2</span>
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="text-yellow-400 font-bold">SEMI FINAL</span> <span className="font-semibold">SPARTANS FC ACADEMY 07B (AZ)</span> vs Boise Timbers | Thorns BTT 07 Boise Timbers - Red (ID) <span className="text-green-400 font-semibold">Win 5-0</span>
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="text-yellow-400 font-bold">CHAMPIONSHIP</span> <span className="font-semibold">SPARTANS FC ACADEMY 07B (AZ)</span> vs Shooters SC Shooters SC 07 Premier CT (UT) <span className="text-green-400 font-semibold">Win 6-0</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Card 3 */}
          <div className="space-y-4">
            <div className="bg-black rounded-3xl overflow-hidden">
              <div className="relative h-64">
                <img
                  src="/images/national-championship/15.png"
                  alt="2021 National Presidents Cup Championship Des Moines Iowa"
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => toggleCard(3)}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-colors cursor-pointer"
                >
                  {expandedCard === 3 ? 'SHOW LESS' : 'READ MORE'}
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black text-white mb-2">2021 National Presidents Cup Championship Des Moines Iowa</h3>
                {expandedCard === 3 && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="space-y-2">
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <span className="font-semibold">SPARTANS FC ACADEMY 07B (AZ)</span> vs NWRAA IFC 07B Red (MS) <span className="text-green-400 font-semibold">Win 4-2</span>
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <span className="font-semibold">SPARTANS FC ACADEMY 07B (AZ)</span> vs West Virginia Futbol Club WVFC 2007 Boys - Black (WV) <span className="text-green-400 font-semibold">Win 3-1</span>
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        <span className="text-yellow-400 font-bold">CHAMPIONSHIP</span> <span className="font-semibold">SPARTANS FC ACADEMY 07B (AZ)</span> vs Boreal FC BOREAL FC - B14 - Chuba (MN) <span className="text-green-400 font-semibold">Win 4-2</span>
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="relative text-center mt-8">
              {/* Background Shadow Text */}
              <h2 className="text-3xl md:text-4xl font-black text-gray-200 leading-tight">
                Spartans Academy Win National Championship!
              </h2>
              {/* Foreground Text */}
              <h2 className="absolute inset-0 text-3xl md:text-4xl font-black text-black leading-tight transform translate-x-1 translate-y-1">
                Spartans Academy Win National Championship!
              </h2>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mt-16 space-y-8">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              Spartans FC would like to thank everyone for the overwhelming congratulatory wishes from all our supporters for the incredible season our 07 Boys. Having won the US Youth's National Presidents Cup Championship in this club's inaugural year has been a testament to the hard work of these young men and the coaching staff. We wish to thank all who have supported us through the season and we are honored to have represented Arizona and Region 4 in the National Championship.
            </p>
            
            {/* Thank You Video */}
            <div className="mt-8 rounded-2xl overflow-hidden">
              <div className="aspect-video w-full max-w-3xl mx-auto">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/9UlnZNkqIT8"
                  title="Spartans FC Thank You Message"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Season Accomplishments Section */}
        <div ref={statsRef} className={`mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start reveal ${statsVisible ? 'active' : ''}`}>
          {/* Left Side - Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-black">
              SEASON<br />ACCOMPLISHMENTS
            </h2>
          </div>

          {/* Right Side - Stats and Details */}
          <div className="space-y-6">
            <div>
              <p className="text-xl md:text-2xl font-bold text-black">
                41 Games Won, 0 Games Loss, 4 Games Tied
              </p>
              <p className="text-lg md:text-xl font-semibold text-black mt-2">
                250 Goals Scored, 38 Goals Allowed
              </p>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              Incredible undefeated 2020-2021 Season for the Spartans Academy 07 Boys with <span className="font-semibold text-black">250 Goals Scored in 45 Games!</span> Their accomplishments include; 2 League Championships, 4 Tournament Championships, 1 State Championship, 1 Regional Championship and 1 National Championship.
            </p>
          </div>
        </div>

        {/* Image Gallery Section */}
        <div ref={finalGalleryRef} className={`mt-24 bg-black rounded-3xl p-1 md:p-1.5 relative reveal ${finalGalleryVisible ? 'active' : ''}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <div className="rounded-lg overflow-hidden h-48 md:h-64">
              <img
                src="/images/national-championship/2.webp"
                alt="Gallery 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-48 md:h-64">
              <img
                src="/images/national-championship/3.webp"
                alt="Gallery 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-48 md:h-64">
              <img
                src="/images/national-championship/4.webp"
                alt="Gallery 3"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-48 md:h-64">
              <img
                src="/images/national-championship/23.jpg"
                alt="Gallery 4"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-48 md:h-64">
              <img
                src="/images/national-championship/24.jpg"
                alt="Gallery 5"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-48 md:h-64">
              <img
                src="/images/national-championship/25.jpg"
                alt="Gallery 6"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-48 md:h-64">
              <img
                src="/images/national-championship/11.webp"
                alt="Gallery 7"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-48 md:h-64">
              <img
                src="/images/national-championship/19.webp"
                alt="Gallery 8"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Center Button */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors pointer-events-auto border-4 border-black">
              Visit Spartans FC
            </button>
          </div>
        </div>

        {/* Thank You Tucson Conquistadores Section */}
        <div ref={conquistadoresRef} className={`mt-24 reveal ${conquistadoresVisible ? 'active' : ''}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Image */}
            <div className="rounded-3xl overflow-hidden h-64 md:h-80">
              <img
                src="/images/national-championship/29.jpg"
                alt="Tucson Conquistadores 1"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Center Content */}
            <div className="text-center space-y-4 px-4">
              <h2 className="text-2xl md:text-3xl font-black text-black">
                THANK YOU TUCSON CONQUISTADORES
              </h2>
              <p className="text-base leading-relaxed text-gray-700">
                We would like to especially Thank Tucson Conquistadores for their support. This team and clubs success would not be possible without your support. We appreciate all your work to give kids opportunities to play sports in our community. More information about the Tucson Conquistadores.
              </p>
            </div>

            {/* Right Image */}
            <div className="rounded-3xl overflow-hidden h-64 md:h-80">
              <img
                src="/images/national-championship/30.jpg"
                alt="Tucson Conquistadores 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Additional Gallery Section */}
        <div className="relative w-full mt-24 mb-16 h-56">
          {/* Background Text - MEMORIES */}
          <div className="text-center h-full flex items-center justify-center">
            <h2 className="text-8xl md:text-[10rem] font-black text-gray-100 leading-none tracking-wider transform scale-x-150">
              MEMORIES
            </h2>
          </div>
          {/* Foreground Text - IN MOTION */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-3xl md:text-5xl font-black text-black">
              IN MOTION
            </h2>
          </div>
        </div>
        
        <div className="bg-black rounded-3xl p-1 md:p-1.5 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[5, 6, 7, 26, 27, 28, 15, 17].map((num, index) => {
              // Determine file extension based on image number
              let extension = 'webp';
              if (num === 15) extension = 'png';
              if ([26, 27, 28].includes(num)) extension = 'jpg';
              return (
                <div key={index} className="rounded-lg overflow-hidden h-48 md:h-64">
                  <img
                    src={`/images/national-championship/${num}.${extension}`}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
