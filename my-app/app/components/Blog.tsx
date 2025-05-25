import React from 'react';
import { CalendarDays } from 'lucide-react'; // assuming you use Lucide

const Blog = () => {
  const blogPosts = [
    {
      date: 'June 2, 2025',
      title: 'The Power of Mindfulness in Daily Life',
      description:
        'Discover how incorporating mindfulness practices into your daily routine can reduce stress and improve mental clarity.',
      image: '/images/blog1.png', // replace with actual image paths
    },
    {
      date: 'July 5, 2025',
      title: 'Benefits of Group Therapy for Social Anxiety',
      description:
        'Learn how group therapy provides a supportive environment for overcoming social anxiety and building confidence.',
      image: '/images/blog2.png',
    },
    {
      date: 'July 25, 2025',
      title: 'Sleep Hygiene: The Foundation of Mental Health',
      description:
        'Explore the critical connection between quality sleep and mental well-being, with practical tips for improving your sleep routine.',
      image: '/images/blog3.png',
    },
  ];

  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-black">
          From Our Blog
        </h2>
        <a href="#" className="text-[#3F28C0] font-semibold text-sm hover:underline">
          View All Photos →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogPosts.map((blog, idx) => (
          <div
            key={idx}
            className="bg-white rounded-tl-[80px] overflow-hidden shadow-sm flex flex-col justify-between"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col gap-2 flex-grow">
              <div className="flex items-center text-sm text-gray-700 font-medium gap-2">
                <CalendarDays size={16} />
                {blog.date}
              </div>
              <div className="bg-blue-50 p-3 rounded-xl text-left">
                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                  {blog.title}
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {blog.description}
                </p>
              </div>
            </div>
            <div className="border-t px-4 py-3">
              <a
                href="#"
                className="text-[#3F28C0] font-semibold text-sm hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
