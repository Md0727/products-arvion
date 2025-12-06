/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export function ArvionHero() {
  const handleScroll = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/Arvion-thumbnail.webp"
      >
        <source
          src="https://vod.api.video/vod/vi43oLt7gV47CNleHg4eUxrA/mp4/source.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/30" />

      <div
        className="absolute md:hidden inset-x-0 bottom-0 h-[45%] pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(74,54,33,0) 0%, #4A3621 100%)" }}
      />
      <div
        className="absolute hidden md:block inset-x-0 bottom-0 h-[50%] pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(74,54,33,0) 40%, #4A3621 95%)" }}
      />

      <div className="relative z-10 flex flex-col items-center justify-end h-full px-5 pb-12 md:pb-16 pointer-events-none">
        {/* motion used here */}
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.4 }}
          src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/Arvion-text.svg"
          alt="ARVION"
          className="w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] h-auto"
        />

        <motion.p
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: false, amount: 0.4 }}
          className="text-white font-rotoris text-[18px] sm:text-[20px] text-center tracking-tight mt-4 max-w-md leading-none mb-10 md:mb-14"
        >
          For those who value clarity over complexity
        </motion.p>

        <div className="flex flex-col items-center gap-2 hidden">
          <button onClick={handleScroll} className="text-[14px] text-[#FFFFFF61] font-rotoris uppercase">
            begin your becoming
          </button>
        </div>
      </div>
    </section>
  );
}
