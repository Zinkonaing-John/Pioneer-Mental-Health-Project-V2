import React from 'react'

const Resources = () => {
  return (
    <div>
        <section className="bg-[#f7fcfc] py-12 px-6 md:px-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-black text-center mb-6">Mental Health Resources</h2>
        <p className="text-center text-gray-600 text-lg mb-10">Tools and information to support your mental wellness journey</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="flex items-center font-extrabold  text-black text-2xl mb-2">
            <img src="/icons/MentalHealthAssessmentTools.png" alt="Icon" className="w-20 h-20 mr-2" />
              Mental Health Assessment Tools</h3>
            <p className='text-lg text-black'>One-on-one sessions with licensed therapists to address:</p>
            <ul className="list-disc list-inside text-gray-600 my-2 space-x-1">
              <button className='bg-gray-100 rounded-2xl p-2'>Anxiety Screening</button>
              <button className='bg-gray-100 rounded-2xl p-2'>Depression Test</button>
              <button className='bg-gray-100 rounded-2xl p-2'>Stress Assessment</button>
            </ul>
            <a href="#" className="text-purple-600 font-medium">Take an Assessment →</a>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="flex items-center font-extrabold text-2xl text-black mb-2">
            <img src="/icons/EducationalArticles.png" alt="Icon" className="w-20 h-20 mr-2" />
              Educational Articles</h3>
            <p className='text-lg text-black'>Expert-written articles to help you understand and manage your well-being:</p>
            <ul className="list-disc list-inside text-gray-600 my-2">
              <li>Understanding Anxiety Disorders</li>
              <li>Science of Sleep and Mental Health</li>
              <li>Coping Strategies for Stress</li>
            </ul>
            

            <a href="#" className="text-purple-600 font-medium">Browse All Articles →</a>
          </div>
        </div>
        <div className="mt-10 bg-white p-6 rounded-2xl shadow text-center max-w-xl mx-auto">
  <h3 className="flex items-center justify-center font-extrabold text-2xl text-black mb-2">
    <img src="/icons/MentalHealthAssessmentVideo.png" alt="Icon" className="w-10 h-10 mr-2" />
    Mental Health Assessment Tools
  </h3>

  <p className="text-lg text-black">
    Watch informative videos from mental health professionals on various topics.
  </p>

  {/* Responsive video centered */}
  <div className="mt-4 flex justify-center">
    <div className="aspect-w-16 aspect-h-9 w-full max-w-md rounded-xl overflow-hidden">
      <iframe
        className="w-full h-50"
        src="https://www.youtube.com/embed/ZQM7Iy9paj8?si=vkA98JwyDe4-pSX1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  </div>

  <a href="#" className="text-purple-600 font-medium block mt-4">
    View Video Library →
  </a>
</div>


      </section>
    </div>
  )
}

export default Resources