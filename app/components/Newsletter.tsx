import React from 'react'

const Newsletter = () => {
  return (
    <div>
         <section className="py-12 px-6 md:px-20 text-center bg-blue-50">
        <h2 className="text-xl md:text-2xl text-black font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Stay updated with the latest mental health resources, tips and event announcements</p>
        <div className="flex justify-center gap-4">
          <input type="email" placeholder="Your email address" className="px-4 py-2 border-1 bg-white text-black border-black rounded-full" />
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-700">Subscribe</button>
        </div>
        <p className="text-xs text-gray-400 mt-4">We respect your privacy. Unsubscribe at any time.</p>
      </section>
    </div>
  )
}

export default Newsletter