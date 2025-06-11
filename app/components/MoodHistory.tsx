export default function MoodHistory() {
  return (
    <div className="bg-pink-50 p-4 rounded-xl shadow-sm">
      <div className="flex justify-between">
        <h2 className="font-bold">Mood History</h2>
        <select className="bg-white border px-2 py-1 rounded text-sm">
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>
      </div>

      {/* Dummy Line Graph */}
      <div className="mt-4 h-24 border-b border-gray-300 relative">
        <div className="absolute left-0 bottom-0 w-full h-1 bg-gray-300"></div>
        <div className="absolute left-0 bottom-3 w-1/6 h-4 bg-gray-700 rounded-full"></div>
        <div className="absolute left-1/4 bottom-8 w-1/6 h-6 bg-gray-700 rounded-full"></div>
        <div className="absolute left-2/4 bottom-4 w-1/6 h-5 bg-gray-700 rounded-full"></div>
        <div className="absolute left-3/4 bottom-7 w-1/6 h-6 bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
}
