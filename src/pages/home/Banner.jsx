import React from "react";

const Banner = () => {
  return (
    <div className="w-full bg-gradient-to-b from-rose-50 to-white py-10 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 drop-shadow-sm">
            Find Your <span className="text-rose-600">Perfect Match</span><br />
            With LifeBondz
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
            A modern, trusted and professional Matrimony platform built for meaningful and happy connections.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="btn bg-rose-600 hover:bg-rose-700 text-white px-8 py-3 rounded-xl text-lg shadow-md hover:shadow-lg transition-all duration-300">
              Get Started
            </button>
            <button className="btn btn-outline border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white px-8 py-3 rounded-xl text-lg transition-all duration-300">
              Explore Profiles
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div>
          <div className="carousel w-full rounded-2xl shadow-xl overflow-hidden border border-rose-100">
            <div id="slide1" className="carousel-item relative w-full h-[320px] md:h-[420px] lg:h-[460px]">
              <img
                src="https://i.postimg.cc/L84cSPrq/hands-holding-engagement-ring.jpg"
                className="w-full h-full object-cover"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
                <a href="#slide3" className="btn btn-circle bg-white/80 border-none shadow">❮</a>
                <a href="#slide2" className="btn btn-circle bg-white/80 border-none shadow">❯</a>
              </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full h-[320px] md:h-[420px] lg:h-[460px]">
              <img
                src="https://i.postimg.cc/dVSxKx2n/romantic-couple-city-celebrating-engagement-together.jpg"
                className="w-full h-full object-cover"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
                <a href="#slide1" className="btn btn-circle bg-white/80 border-none shadow">❮</a>
                <a href="#slide3" className="btn btn-circle bg-white/80 border-none shadow">❯</a>
              </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full h-[320px] md:h-[420px] lg:h-[460px]">
              <img
                src="https://i.postimg.cc/65MHdmmt/bride-groom-wedding-reception.jpg"
                className="w-full h-full object-cover"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
                <a href="#slide2" className="btn btn-circle bg-white/80 border-none shadow">❮</a>
                <a href="#slide1" className="btn btn-circle bg-white/80 border-none shadow">❯</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;