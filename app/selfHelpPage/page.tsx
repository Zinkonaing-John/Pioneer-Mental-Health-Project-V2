"use client";
import React from "react";

type ToolCardProps = {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  dotColor: string;
  iconSrc?: string;
};

const ToolCard: React.FC<ToolCardProps> = ({
  title,
  description,
  linkText,
  linkHref,
  dotColor,
  iconSrc,
}) => (
  <div
    className="bg-white rounded-2xl shadow-md p-6 w-full sm:w-[300px] cursor-pointer transition 
               hover:shadow-lg transform hover:scale-105"
  >
    <div
      className="w-14 h-14 rounded-full mb-4 flex items-center justify-center"
      style={{ backgroundColor: dotColor }}
    >
      {iconSrc && <img src={iconSrc} alt={`${title} icon`} className="w-7 h-7" />}
    </div>
    <h3 className="font-semibold text-gray-900 text-lg mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <a href={linkHref} className="text-blue-600 text-sm font-medium hover:underline">
      {linkText} →
    </a>
  </div>
);

const SelfHelpTools: React.FC = () => {
  const tools: ToolCardProps[] = [
    {
      title: "Anxiety Management",
      description:
        "Practical techniques and exercises to help you understand and manage anxiety symptoms.",
      linkText: "Learn techniques",
      linkHref: "#",
      dotColor: "#B5D9BA",
      iconSrc: "/icons/smile.png",
    },
    {
      title: "Mood Tracking",
      description:
        "Monitor your emotional patterns to gain insights and identify triggers affecting your wellbeing.",
      linkText: "Start tracking",
      linkHref: "#",
      dotColor: "#F7EF9A",
      iconSrc: "/icons/moodTracking.png",
    },
    {
      title: "Sleep Improvement",
      description:
        "Evidence-based strategies to improve your sleep quality and establish healthy sleep patterns.",
      linkText: "Improve sleep",
      linkHref: "#",
      dotColor: "#D9C2E6",
      iconSrc: "/icons/sleep.png",
    },
    {
      title: "Stress Relief",
      description:
        "Quick exercises and long-term strategies to manage stress and build resilience.",
      linkText: "Relieve stress",
      linkHref: "#",
      dotColor: "#F4C2C2",
      iconSrc: "/icons/stress.png",
    },
    {
      title: "Positive Thinking",
      description:
        "Techniques to challenge negative thought patterns and cultivate a more optimistic outlook.",
      linkText: "Start practicing",
      linkHref: "#",
      dotColor: "#D3C3F5",
      iconSrc: "/icons/positive.png",
    },
  ];

  return (
    <section className="bg-[#e9f5f5] py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Self-Help Tools</h2>
      <p className="text-gray-700 max-w-xl mx-auto mb-12">
        Explore our range of evidence-based tools designed to support your mental health journey,
        wherever you are on your path.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>
    </section>
  );
};

export default SelfHelpTools;
