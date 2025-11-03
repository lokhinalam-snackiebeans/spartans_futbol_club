import { useState } from 'react';

export default function Placements() {
  const [formData, setFormData] = useState({
    email: '',
    playerName: '',
    birthDate: '',
    gender: '',
    lastTeam: '',
    positions: '',
    parentsNames: '',
    address: '',
    phone: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your registration! We will be in touch soon.');
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Spartans FC Tryouts 2024-2025 Registration
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          {/* Player Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Player Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="playerName"
              required
              value={formData.playerName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          {/* Birth Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Player Birth Date <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="birthDate"
              required
              value={formData.birthDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          {/* Gender */}
          <div>
            <p className="block text-sm font-medium text-gray-700 mb-1">
              Player gender: <span className="text-red-500">*</span>
            </p>
            <div className="space-x-4 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Boy"
                  checked={formData.gender === 'Boy'}
                  onChange={handleChange}
                  className="h-4 w-4 text-yellow-500 focus:ring-yellow-400"
                  required
                />
                <span className="ml-2">Boy</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Girl"
                  checked={formData.gender === 'Girl'}
                  onChange={handleChange}
                  className="h-4 w-4 text-yellow-500 focus:ring-yellow-400"
                  required
                />
                <span className="ml-2">Girl</span>
              </label>
            </div>
          </div>

          {/* Last Team and League */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Last Team and League
            </label>
            <input
              type="text"
              name="lastTeam"
              value={formData.lastTeam}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          {/* Positions Played */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Positions Played
            </label>
            <input
              type="text"
              name="positions"
              value={formData.positions}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="e.g., Forward, Midfielder, Defender, Goalkeeper"
            />
          </div>

          {/* Parents Names */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Parents Names <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="parentsNames"
              required
              value={formData.parentsNames}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              placeholder="(123) 456-7890"
            />
          </div>

          {/* Thank you message and submit button */}
          <div className="pt-4">
            <p className="text-sm text-gray-600 mb-4">
              The Spartans Board of Directors would like to thank you for your participation in this years Player Placements. If you would like to volunteer to participate as a coach, manager or in some other capacity, please contact any board member at{' '}
              <a href="https://www.fcspartans.org" className="text-yellow-600 hover:underline">www.fcspartans.org</a>
            </p>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-400 text-gray-900 rounded font-semibold hover:bg-yellow-500 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
