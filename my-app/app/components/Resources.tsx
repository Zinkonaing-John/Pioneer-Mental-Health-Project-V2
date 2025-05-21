import React from 'react'

const Resources = () => {
  return (
    <div>
        <section className="bg-blue-50 py-12 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Mental Health Resources</h2>
        <p className="text-center text-gray-600 mb-10">Tools and information to support your mental wellness journey</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Mental Health Assessment Tools</h3>
            <p>One-on-one sessions with licensed therapists to address:</p>
            <ul className="list-disc list-inside text-gray-600 my-2">
              <li>Anxiety Screening</li>
              <li>Depression Test</li>
              <li>Stress Assessment</li>
            </ul>
            <a href="#" className="text-purple-600 font-medium">Take an Assessment →</a>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Educational Articles</h3>
            <p>Expert-written articles to help you understand and manage your well-being:</p>
            <ul className="list-disc list-inside text-gray-600 my-2">
              <li>Understanding Anxiety Disorders</li>
              <li>Science of Sleep and Mental Health</li>
              <li>Coping Strategies for Stress</li>
            </ul>
            <a href="#" className="text-purple-600 font-medium">Browse All Articles →</a>
          </div>
        </div>
        <div className="mt-10 bg-white p-6 rounded-xl shadow text-center max-w-xl mx-auto">
          <h3 className="font-bold text-lg mb-2">Mental Health Assessment Tools</h3>
          <p>Watch informative videos from mental health professionals on various topics.</p>
          <div className="mt-4">
            <img src="/mental-indoor-video.png" alt="Video" className="w-full rounded-md" />
            <a href="#" className="text-purple-600 font-medium block mt-2">View Video Library →</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resources