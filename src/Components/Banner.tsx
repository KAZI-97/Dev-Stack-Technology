import banner_pic from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-around gap-10">
        {/* Left content */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-gray-900 text-6xl">Build Your Ideal</span>
            <br />
            <span className=" inter font-extrabold text-5xl gradient-text">Development Stack</span>
          </h1>

          <p className=" plus-jakarta-sans mt-4 text-gray-500 text-[18px]  leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-6 flex items-center gap-4">
            <button className="px-5 py-2.5 rounded-md font-medium gradient-button">
              Explore Technologies
            </button>
            <button className="plus-jakarta-sans w-40 h-11 rounded-2xl text-[14px] border border-gray-300 text-gray-700 hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="shrink-0">
          <img
            src={banner_pic}
            alt="Development stack illustration"
            className="w-72 md:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
