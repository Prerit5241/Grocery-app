import React from "react";

export default function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto mt-8 rounded-3xl overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero_banner.png')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative px-6 md:px-14 h-[340px] xs:h-[380px] sm:h-[450px] md:h-[540px] flex flex-col justify-center text-white">

        <span className="mb-2 md:mb-5 text-green-400 text-[10px] md:text-sm font-semibold tracking-widest uppercase">
          Fresh & Fast Delivery
        </span>

        <h1 className="text-xl xs:text-2xl sm:text-4xl md:text-6xl font-extrabold leading-tight max-w-xl">
          Freshness <br className="hidden md:block" />
          <span className="text-green-500">Delivered</span> 
          <span className="hidden xs:inline"> Instantly</span>
        </h1>

        <p className="mt-2 md:mt-5 max-w-lg text-gray-200 text-xs md:text-lg hidden xs:block">
          Experience a smarter way to shop. Fresh ingredients, quick delivery,
          and effortless convenience.
        </p>

        <div className="flex gap-2 sm:gap-4 mt-4 md:mt-8">

          <button 
            onClick={() => document.getElementById('oils')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2 md:px-7 md:py-3 bg-green-500 hover:bg-green-600 rounded-lg md:rounded-xl text-xs md:text-base font-semibold transition"
          >
            Shop Now
          </button>

          <button 
            onClick={() => document.getElementById('oils')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-5 py-2 md:px-7 md:py-3 border border-white/30 rounded-lg md:rounded-xl hover:bg-white/10 text-xs md:text-base transition"
          >
            Explore
          </button>

        </div>

      </div>

    </section>
  );
}