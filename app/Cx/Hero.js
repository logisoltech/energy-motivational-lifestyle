"use client";

import { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    let mounted = true;

    async function initAOS() {
      const AOS = (await import("aos")).default;
      if (!mounted) return;
      AOS.init({
        duration: 800,
        easing: "ease-out-cubic",
        once: true,
        offset: 60,
      });
      requestAnimationFrame(() => AOS.refreshHard());
    }

    initAOS();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden sm:min-h-[85vh]">
      <Image
        src="/hero bg.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      <div
        className="absolute right-2 top-1/2 z-20 w-[min(32rem,calc(100%-1rem))] -translate-y-1/2 sm:right-4 sm:w-[min(33rem,calc(100%-2rem))] md:right-6 md:w-[min(34rem,calc(100%-3rem))] lg:right-10 lg:w-xl"
        data-aos="fade-up"
        data-aos-delay="220"
      >
        <div className="w-full text-left">
          <p className="max-w-lg text-2xl font-black uppercase leading-[1.05] tracking-[0.01em] text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)] sm:text-[2.05rem] md:text-[2.25rem]">
            1 DRINK FOOD-DIET-ENERGY
          </p>
          <p className="mt-5 max-w-lg text-sm font-normal leading-relaxed text-white/95 drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)] sm:text-[1.02rem]">
            Power your body and mind with high-performance protein energy,
            engineered to fuel strength, focus, and unstoppable drive.
          </p>
        </div>
      </div>
    </section>
  );
}
