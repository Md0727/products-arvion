/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "motion/react";

export default function WatchPreviewImageSection() {
    return (
        <section className="w-full bg-black">

            {/* Mobile Layout */}
            <div className="block md:hidden">
                <div className="mx-auto">

                    {/* Quote */}
                    <div className="text-center pt-8 mb-10">
                        <div className="flex justify-center mb-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="48"
                                height="34"
                                viewBox="0 0 48 34"
                                fill="none"
                            >
                                <g clipPath="url(#clip0_mobile)">
                                    <path
                                        d="M48 34H26.2753V20.8357C26.2753 20.8357 23.9622 2.42224 48 0V4.52299C48 4.52299 34.371 4.92762 33.6265 15.4258H48V34Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M21.7852 34H0.0604343V20.8357C0.0604343 20.8357 -2.25264 2.42224 21.7852 0V4.52299C21.7852 4.52299 8.15618 4.92762 7.41161 15.4258H21.7852V34Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_mobile">
                                        <rect
                                            width="48"
                                            height="34"
                                            fill="white"
                                            transform="matrix(-1 0 0 -1 48 34)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <motion.h2
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                            viewport={{ once: false, amount: 0.4 }}
                            className="text-white font-rotoris text-[24px] font-normal leading-[135%] max-w-xl mx-auto">
                            What you wear on your wrist is your drive of the future.
                        </motion.h2>
                    </div>

                    {/* Mobile Image - FIXED */}
                    <div className="relative w-full max-w-4xl mx-auto">
                        <img
                            src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/Arvion-watch-silhouette-mob.webp"
                            alt="Watch Preview"
                            className="w-full h-auto object-contain"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block">
                <div className="mx-auto">
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">

                        {/* Desktop Image */}
                        <img
                            src="https://prelaunch-rotoris.s3.ap-south-1.amazonaws.com/public/assets/products/Arvion/Arvion-watch-silhouette-desk.webp"
                            alt="Watch Preview Desktop"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Quote Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                            <div className="flex justify-center mb-6">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="64"
                                    height="45"
                                    viewBox="0 0 48 34"
                                    fill="none"
                                    className="drop-shadow-2xl"
                                >
                                    <g clipPath="url(#clip0_desktop)">
                                        <path
                                            d="M48 34H26.2753V20.8357C26.2753 20.8357 23.9622 2.42224 48 0V4.52299C48 4.52299 34.371 4.92762 33.6265 15.4258H48V34Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M21.7852 34H0.0604343V20.8357C0.0604343 20.8357 -2.25264 2.42224 21.7852 0V4.52299C21.7852 4.52299 8.15618 4.92762 7.41161 15.4258H21.7852V34Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_desktop">
                                            <rect
                                                width="48"
                                                height="34"
                                                fill="white"
                                                transform="matrix(-1 0 0 -1 48 34)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>

                            <motion.h2
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
                                viewport={{ once: false, amount: 0.4 }}
                                className="text-white text-center font-rotoris text-[36px] font-semibold leading-[120%] tracking-[-1.08px] max-w-3xl mx-auto px-8 drop-shadow-2xl">
                                What you wear on your wrist is your drive of the future.
                            </motion.h2>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    );
}
