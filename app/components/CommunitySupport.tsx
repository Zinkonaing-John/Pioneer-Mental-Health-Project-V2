import React from "react";
import { CalendarDays } from "lucide-react"; // or use another icon lib

const CommunitySupport = () => {
  const greetings = [
    {
      title: "Greetings of President",
      name: "President Byung Hun Woo",
      image: "/images/president.png",
    },
    {
      title: "Greetings of Professor",
      name: "Professor Kwon Soo Kyeon",
      image: "/images/prof1.png",
    },
    {
      title: "Greetings of Professor",
      name: "Professor Jang Jin Su",
      image: "/images/prof2.png",
    },
  ];

  const supportGroups = [
    "Anxiety Support Circle",
    "Depression Recovery Group",
    "Mindfulness Meditation Group",
    "University Support Group",
  ];

  return (
    <section className="py-12 px-6 md:px-20 bg-[#E6F4F5]">
      <h2 className="text-3xl font-bold text-black text-center mb-2">
        community Support
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Connect with others and share experiences on your mental health journey
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col gap-6">
          {greetings.map((greet, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md flex gap-4 items-start"
            >
              <img
                src={greet.image}
                alt={greet.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-gray-500">{greet.title}</p>
                <p className="font-semibold text-[#653b94]">{greet.name}</p>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  College cultivating creative and faithful students to become
                  professional experts leading development of nation and society.
                  <br />
                  <strong>Vision of this college</strong> is to become global
                  vocational-education based college, college leading creative
                  and innovative education, field oriented college seeking for
                  business and academic cooperation, student orientated college
                  and college seeking for continuing vocational capacity.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-800">Support Groups</h3>
          {supportGroups.map((title, idx) => (
            <div
              key={idx}
              className="bg-white p-4  shadow-sm flex flex-col gap-2"
            >
              <p className="font-semibold text-gray-800">{title}</p>
              <p className="text-sm text-gray-600">
                Share experiences and coping strategies with others managing anxiety
              </p>
              <div className="flex items-center text-sm text-gray-500 gap-2 mt-1">
                <CalendarDays size={16} />
                Tuesday, 6:00 PM – 7:00 PM
              </div>
            </div>
          ))}

          <a
            href="#"
            className="text-[#3F28C0] font-semibold text-sm mt-2 hover:underline"
          >
            View All Supports Group →
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySupport;
