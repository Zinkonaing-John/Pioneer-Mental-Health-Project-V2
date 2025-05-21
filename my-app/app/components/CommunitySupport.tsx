import React from 'react'

const CommunitySupport = () => {
  return (
    <div>
        <section className="py-12 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Community Support</h2>
        <p className="text-center text-gray-600 mb-10">Connect with others and share experiences on your mental health journey</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            {["President Byung Han Woo", "Professor Hwan Soo Kyoon", "Professor Jong Jin Su"].map((person, idx) => (
              <div key={idx} className="mb-6 p-4 bg-gray-50 rounded-xl shadow-sm">
                <p className="font-bold">Greetings of {person}</p>
                <p className="text-sm text-gray-600 mt-2">College of Nursing created this student-led community for support and inspiration.</p>
              </div>
            ))}
          </div>
          <div>
            {[
              { title: "Anxiety Support Circle" },
              { title: "Depression Recovery Group" },
              { title: "Mindfulness Meditation Group" },
              { title: "University Support Group" }
            ].map((group, idx) => (
              <div key={idx} className="mb-6 p-4 bg-gray-50 rounded-xl shadow-sm">
                <p className="font-bold">{group.title}</p>
                <p className="text-sm text-gray-600 mt-2">Share experiences and coping strategies with like-minded individuals.</p>
              </div>
            ))}
            <a href="#" className="text-purple-600 font-medium">View All Support Groups →</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CommunitySupport