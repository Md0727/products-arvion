/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";

export default function WatchSketchVideoSection() {
    return (
        <section className="w-full bg-black md:pt-10">

            <div className="w-full py-12 md:py-16 px-4 md:px-8 bg-black">
                <div className="max-w-4xl mx-auto flex flex-col items-center">
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                        viewport={{ once: false, amount: 0.4 }}
                        className="text-white px-2 max-w-[546px] font-rotoris font-regular text-[18px] md:text-2xl text-center">
                        Shaped one clean stroke at a time, Arvion grew from automotive
                        design principles into a watch made for speed and forward momentum.
                    </motion.p>
                </div>
            </div>

            <div className="w-full md:h-screen bg-black">
                {/* Mobile Video */}
                <video
                    src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/sketch-video.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="none"
                    className="w-full h-full object-contain md:hidden"
                ></video>

                <video
                    src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/auriqua/Arvion+H+compressed.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="none"
                    className="hidden md:block w-full h-full object-contain"
                ></video>
            </div>

        </section>
    );
}
