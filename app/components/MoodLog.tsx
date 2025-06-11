const moods = ["😄", "🥰", "😐", "😟", "😢"];

export default function MoodLog() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md text-center">
      <h2 className="text-lg font-serif mb-2">Daily Mood Log</h2>
      <div className="flex justify-center space-x-4 text-3xl">
        {moods.map((mood, i) => (
          <span
            key={i}
            className="cursor-pointer hover:scale-110 transition-transform"
          >
            {mood}
          </span>
        ))}
      </div>
    </div>
  );
}
