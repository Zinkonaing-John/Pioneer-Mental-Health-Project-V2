import React from 'react'

const Blog = () => {
  return (
    <div>
        <section className="bg-blue-50 py-12 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">From Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              date: "June 2, 2025",
              title: "The Power of Mindfulness in Daily Life"
            },
            {
              date: "July 5, 2025",
              title: "Benefits of Group Therapy for Social Anxiety"
            },
            {
              date: "July 25, 2025",
              title: "Sleep Hygiene: The Foundation of Mental Health"
            }
          ].map((blog, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow text-center">
              <div className="h-32 bg-gray-100 mb-4 flex items-center justify-center">Blog Image</div>
              <p className="text-sm text-gray-500">{blog.date}</p>
              <h4 className="text-lg font-bold mb-2">{blog.title}</h4>
              <a href="#" className="text-purple-600 font-medium">Read More →</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blog