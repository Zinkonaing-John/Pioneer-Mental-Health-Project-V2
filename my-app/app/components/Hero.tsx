export default function Hero() {
    return (
      <section className="bg-gradient-to-r from-cyan-400 to-blue-500 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Journey to Mental Wellness Starts Here
            </h1>
            <p className="mb-6">
              Take the first step towards a healthier mind. Our compassionate professionals are here to support you every step of the way.
            </p>
            <div className="space-x-4">
              <button className="bg-primary hover:bg-indigo-600 text-white px-5 py-2 rounded">
                Get Started
              </button>
              <button className="bg-white text-primary px-5 py-2 rounded hover:bg-gray-100">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/hero-family.png"
              alt="Happy family"
              className="w-[300px] h-[300px] object-cover rounded-full shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  }