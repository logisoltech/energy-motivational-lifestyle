"use client";

import { useState } from "react";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import NutritionFactsLabel from "./NutritionFactsLabel";

const GALLERY_IMAGE = {
  src: "/banner-1.png",
  alt: "Flyer parked near a pool",
};

export default function FutureSwimSection() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <>
      <section
        id="gallery"
        className="w-full scroll-mt-28 bg-white pb-12 pt-4 md:pb-16"
      >
        <div className="relative mx-auto flex w-full max-w-[1536px] flex-col items-center gap-4 px-5 sm:px-8 lg:flex-row lg:items-start lg:justify-center lg:gap-4 lg:px-6">
            <button
              type="button"
              onClick={() => setActiveImage(GALLERY_IMAGE)}
              className="group relative z-20 h-112 w-full max-w-[300px] shrink-0 overflow-hidden bg-white sm:h-152 lg:h-184 lg:max-w-[320px]"
            >
              <Image
                src={GALLERY_IMAGE.src}
                alt={GALLERY_IMAGE.alt}
                fill
                className="object-contain object-center transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 50vw, 28vw"
              />
            </button>

            <div className="relative z-0 h-112 w-full max-w-[240px] shrink-0 overflow-visible sm:h-152 lg:h-184 lg:max-w-[220px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[165%] w-[220%] -translate-x-1/2 -translate-y-1/2 lg:w-[240%]">
                <Image
                  src="/new%20can.png"
                  alt="M.D.I Motivational Drink can"
                  fill
                  className="object-contain object-center"
                  sizes="(max-width: 1024px) 70vw, 40vw"
                />
              </div>
            </div>

            <div className="relative z-20 shrink-0">
              <NutritionFactsLabel />
            </div>

            <div className="relative z-20 flex w-full max-w-md shrink-0 flex-col justify-start pt-2 lg:max-w-sm lg:pt-4">
              <h2 className="text-3xl leading-[1.05] font-extrabold uppercase tracking-tight text-neutral-900 sm:text-[2.55rem]">
                <span className="block whitespace-nowrap">1 DRINK FOOD-DIET</span>
                <span className="block whitespace-nowrap">ENERGY</span>
              </h2>
              <h2 className="mt-3 text-3xl leading-[1.05] font-extrabold tracking-tight text-neutral-900 sm:text-[2.55rem]">
                <span className="block whitespace-nowrap">For Meal or Drink</span>
                <span className="block whitespace-nowrap">Replacement</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-700 md:text-[1.05rem]">
                The M.D.I Motivational Drink is a high-performance protein energy
                beverage designed to fuel both body and mind. Formulated with
                essential nutrients and energy-boosting elements, it supports
                strength, endurance, and mental focus throughout the day. With a
                science-inspired blend aimed at optimizing your body’s natural
                energy processes, M.D.I is built for individuals who want to stay
                active, sharp, and motivated in every moment.
              </p>
            </div>
        </div>
      </section>

      {activeImage && (
        <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/90 p-4">
          <button
            type="button"
            onClick={() => setActiveImage(null)}
            className="absolute top-5 right-5 text-white transition hover:text-gray-300"
            aria-label="Close image"
          >
            <FaTimes className="size-7" />
          </button>

          <div className="relative h-[90vh] w-full max-w-7xl">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
