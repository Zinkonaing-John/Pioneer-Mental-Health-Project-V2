export default function WeeklyActivities() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const heights = [40, 60, 80, 65, 90, 85, 70];

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">Weekly Activities</h2>
        <div className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg text-sm">
          You're in great shape—like a perfectly ripe avocado!
        </div>
      </div>

      <div className="flex items-end gap-2 mt-4 h-32">
        {heights.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded bg-gradient-to-t from-pink-300 to-yellow-300"
            style={{ height: `${h}%` }}
          >
            <span className="block text-center mt-2 text-xs">{days[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
