import React from "react";

type Service = {
  title: string;
  desc: string;
  link: string;
  icon: string;
};

export default function Services() {
  const services: Service[] = [
    {
      title: "AI Test",
      desc: "One-on-one sessions with licensed therapists to address",
      link: "Learn More",
      icon: "/icons/ai.png",
    },
    {
      title: "VR Therapy",
      desc: "Immersive virtual reality therapy for anxiety and phobias",
      link: "Learn More",
      icon: "/icons/vr.png",
    },
    {
      title: "Self-Help Resources",
      desc: "Worksheets, guides for managing mental health.",
      link: "Learn More",
      icon: "/icons/selfhelp.png",
    },
    {
      title: "Meditation Guides",
      desc: "Guided meditation sessions to help reduce stress.",
      link: "Learn More",
      icon: "/icons/meditation.png",
    },
    {
      title: "My Dashboard",
      desc: "Guided meditation sessions and mindfulness practices to help reduce stress and anxiety.",
      link: "Learn More",
      icon: "/icons/dashboard.png",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-20 bg-[#E6F4F5]">
      <h1 className="text-3xl md:text-5xl font-extrabold text-black text-center mb-6">
        Our Services
      </h1>
      <h2 className="text-center text-gray-600 mb-10 text-xl md:text-2xl">
        Comprehensive mental health support tailored to your individual needs
      </h2>

      {/* Scrollable container */}
      <div className="overflow-x-auto  ">
        <div className="flex gap-6 min-w-max pb-2 ">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-72 bg-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 mb-4"
              />
              <div className="text-2xl text-black font-bold mb-2">
                {service.title}
              </div>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <a
                href="#"
                className="text-purple-600 font-semibold hover:underline"
              >
                {service.link} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
