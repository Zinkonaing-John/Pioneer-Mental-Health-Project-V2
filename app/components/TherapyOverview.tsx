export default function TherapyOverview() {
  return (
    <div className="bg-green-200 p-4 rounded-xl shadow">
      <h2 className="font-bold mb-2">AI Chat Therapy session Overview</h2>

      <div className="flex items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-white">
          {/* Replace this with a Pie Chart using Chart.js or Recharts */}
          <div className="w-full h-full rounded-full bg-red-400 border-4 border-purple-500 border-t-yellow-300" />
        </div>

        <ul className="text-sm space-y-1">
          <li>
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>{" "}
            Exam stress
          </li>
          <li>
            <span className="inline-block w-3 h-3 bg-purple-500 rounded-full mr-2"></span>{" "}
            Overthinking
          </li>
          <li>
            <span className="inline-block w-3 h-3 bg-yellow-300 rounded-full mr-2"></span>{" "}
            Anxiety
          </li>
        </ul>
      </div>

      <button className="mt-4 bg-pink-300 hover:bg-pink-400 px-4 py-2 rounded-full text-white">
        Show more →
      </button>
    </div>
  );
}
