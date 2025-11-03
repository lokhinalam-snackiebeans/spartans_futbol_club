import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Training() {
  const { elementRef: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { elementRef: tableRef, isVisible: tableVisible } = useScrollReveal();

  const schedule = [
    {
      day: "Mondays",
      title: "Open Practice",
      teams: "U11B, U12B, U16B, U19B",
      time: "6:00 pm-8:00 pm",
      location: "Golf Links Park D"
    },
    {
      day: "Tuesdays",
      title: "Open Practice",
      teams: "Academy Teams, U13, U14B, U15B",
      time: "6:00 pm-8:00 pm",
      location: "Golf Links Park D"
    },
    {
      day: "Wednesdays",
      title: "Open Practice",
      teams: "U11B, U12B, U16B, U19B",
      time: "6:00 pm-8:00 pm",
      location: "Golf Links Park D"
    },
    {
      day: "Thursdays",
      title: "Open Practice",
      teams: "Academy Teams, U13, U14B, U15B",
      time: "6:00 pm-8:00 pm",
      location: "Golf Links Park D"
    },
    {
      day: "Fridays",
      title: "Scrimmage Night",
      teams: "All competitive teams",
      time: "6:00 pm-8:00 pm",
      location: "Golf Links Park A"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className={`mb-20 relative reveal ${titleVisible ? 'active' : ''}`}>
          {/* Background Text */}
          <h2 className="text-5xl md:text-6xl font-black text-blue-50 leading-none mb-4">
            TRAINING
          </h2>
          {/* Foreground Text */}
          <h2 className="absolute inset-0 text-4xl md:text-5xl font-black text-black leading-none mb-4">
            TRAINING
          </h2>
        </div>

        {/* Training Schedule Table */}
        <div ref={tableRef} className={`overflow-x-auto reveal ${tableVisible ? 'active' : ''}`}>
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="text-left py-4 px-6 font-black text-lg">Day</th>
                <th className="text-left py-4 px-6 font-black text-lg">Activity</th>
                <th className="text-left py-4 px-6 font-black text-lg">Teams</th>
                <th className="text-left py-4 px-6 font-black text-lg">Time</th>
                <th className="text-left py-4 px-6 font-black text-lg">Location</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, index) => (
                <tr 
                  key={index}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6 font-bold text-black">{item.day}</td>
                  <td className="py-4 px-6 text-gray-700">{item.title}</td>
                  <td className="py-4 px-6 text-gray-600 text-sm">{item.teams}</td>
                  <td className="py-4 px-6 text-gray-700">{item.time}</td>
                  <td className="py-4 px-6 text-gray-600">{item.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
