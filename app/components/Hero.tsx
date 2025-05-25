"use client";


export default function Hero() {
  

  return (
    <section
      className="w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/HeroBg.png')" }}
    >
      <div className="min-h-screen w-full flex items-center p-6">
        <div className="text-black max-w-2xl text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Journey to Mental Wellness Starts Here
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Take the first step towards a healthier mind. Our compassionate professionals are here to support you every step of the way.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-purple-600 hover:bg-indigo-600 text-white px-8 py-4 text-lg rounded shadow-md w-full md:w-auto">
              Get Started
            </button>
            <button className="bg-white text-purple-700 border border-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded shadow-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-200" />
    </section>
    
  );
}
