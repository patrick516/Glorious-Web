import HomeBackgroundVideo from "../assets/videos/Home-background.mp4";

function Hero({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen px-6 overflow-hidden text-center text-white">
      {/* Background Video */}
      <video
        // autoPlay
        onCanPlay={(e) => e.target.pause()}
        muted
        loop
        playsInline
        className="absolute inset-0 object-cover w-full h-full"
        src={HomeBackgroundVideo}
      ></video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl drop-shadow-lg">
          Glorious Integrated Farming Limited
        </h1>
        <p className="mb-10 text-xl font-medium md:text-2xl drop-shadow-md">
          Cultivating Innovation in Agriculture
        </p>
        <button
          onClick={onGetStarted}
          className="bg-[#c69a6d] hover:bg-[#a87e54] text-white font-semibold py-3 px-8 rounded-lg transition-shadow shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#a87e54]"
          aria-label="Get Started"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
