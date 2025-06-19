"use client";

import React from "react";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  iconSrc: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  linkText,
  linkHref,
  iconSrc,
}) => (
  <div
    className="bg-white rounded-2xl shadow-lg p-6 w-72 cursor-pointer transition 
               hover:shadow-2xl transform hover:-translate-y-2"
  >
    <img src={iconSrc} alt={`${title} icon`} className="w-12 h-12 mb-4" />
    <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link
      href={linkHref}
      className="text-purple-600 font-semibold hover:underline"
    >
      {linkText} →
    </Link>
  </div>
);

export default function Services() {
  const services: ServiceCardProps[] = [
    {
      title: "AI Chatbot",
      description: "One-on-one sessions with licensed therapists to address",
      linkText: "Learn More",
      linkHref: "/chat",
      iconSrc: "/icons/ai.png",
    },
    {
      title: "VR Therapy",
      description: "Immersive virtual reality therapy for anxiety and phobias",
      linkText: "Learn More",
      linkHref: "/VR",
      iconSrc: "/icons/vr.png",
    },
    {
      title: "Self-Help Resources",
      description: "Worksheets, guides for managing mental health.",
      linkText: "Learn More",
      linkHref: "/selfHelpPage",
      iconSrc: "/icons/selfhelp.png",
    },
    {
      title: "Meditation Guides",
      description: "Guided meditation sessions to help reduce stress.",
      linkText: "Learn More",
      linkHref: "/services/meditation-guides",
      iconSrc: "/icons/meditation.png",
    },
    {
      title: "My Dashboard",
      description:
        "Guided meditation sessions and mindfulness practices to help reduce stress and anxiety.",
      linkText: "Learn More",
      linkHref: "/dashboard",
      iconSrc: "/icons/dashboard.png",
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

      <div className="overflow-x-auto">
        <div className="flex gap-6 min-w-max pb-2">
          {services.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
