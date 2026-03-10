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
      <div className="relative px-10 md:px-14 h-[480px] md:h-[540px] flex flex-col justify-center text-white">

        <span className="mb-5 text-green-400 text-sm font-semibold tracking-widest uppercase">
          Fresh & Fast Delivery
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-xl">
          Freshness <br />
          <span className="text-green-500">Delivered</span> <br />
          Instantly
        </h1>

        <p className="mt-5 max-w-lg text-gray-200 text-lg">
          Experience a smarter way to shop. Fresh ingredients, quick delivery,
          and effortless convenience at your doorstep.
        </p>

        <div className="flex gap-4 mt-8">

          <button className="px-7 py-3 bg-green-500 hover:bg-green-600 rounded-xl font-semibold transition">
            Shop Now
          </button>

          <button className="px-7 py-3 border border-white/30 rounded-xl hover:bg-white/10 transition">
            Explore
          </button>

        </div>

      </div>

    </section>
  );
}