import React from 'react'

export default function Services() {
  return (
    <section className="py-12 px-6 md:px-20">
    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Our Services</h2>
    <p className="text-center text-gray-600 mb-10">Comprehensive mental health support tailored to your individual needs</p>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
      {[
        { title: "AI Test", desc: "One-on-one sessions with licensed therapists to address", link: "Learn More" },
        { title: "VR Therapy", desc: "One-on-one sessions with licensed therapists to address", link: "Learn More" },
        { title: "Self-Help Resources", desc: "Worksheets, guides for managing mental health.", link: "Learn More" },
        { title: "Meditation Guides", desc: "Guided meditation sessions to help reduce stress.", link: "Learn More" }
      ].map((service, idx) => (
        <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow-sm">
          <div className="text-2xl font-bold mb-2">{service.title}</div>
          <p className="text-gray-600 mb-2">{service.desc}</p>
          <a href="#" className="text-purple-600 font-medium">{service.link} →</a>
        </div>
      ))}
    </div>
  </section>
  )
}

