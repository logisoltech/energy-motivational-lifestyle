"use client";

import { useEffect } from "react";
import Image from "next/image";
import "aos/dist/aos.css";
import Nav from "./Nav";

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
    <section className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/hero-bg.png"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Top vignette so logo & pill nav stay readable */}
      <div
        className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/50 via-black/10 to-transparent"
        aria-hidden
      />

      <a
        href="/"
        className="absolute left-6 top-6 z-30 sm:left-8 sm:top-8"
        aria-label="Home"
        data-aos="fade-right"
        data-aos-delay="80"
      >
        <Image
          src="/logo.png"
          alt="Institutional Lifestyle"
          width={400}
          height={130}
          className="h-16 w-auto sm:h-19 md:h-20 lg:h-24"
          priority
        />
      </a>

      <Nav />

      {/* Bottom white fade (image polish) */}
      {/* <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-15 h-[min(42vh,22rem)] bg-linear-to-t from-white from-12% via-white/85 via-45% to-transparent"
        aria-hidden
      /> */}

      {/* Headline block: vertically centered, anchored to the right */}
      <div
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-[min(32rem,calc(100%-1rem))] sm:right-4 sm:w-[min(33rem,calc(100%-2rem))] md:right-6 md:w-[min(34rem,calc(100%-3rem))] lg:right-10 lg:w-xl"
        data-aos="fade-up"
        data-aos-delay="220"
      >
        <div className="w-full text-left">
          <p className="max-w-lg font-black uppercase tracking-[0.01em] text-white text-2xl leading-[1.05] drop-shadow-[0_1px_10px_rgba(0,0,0,0.55)] sm:text-[2.05rem] md:text-[2.25rem]">
            1 DRINK FOOD-DIET-ENERGY
          </p>
          <p className="mt-5 max-w-lg text-sm font-normal leading-relaxed text-white/95 drop-shadow-[0_1px_10px_rgba(0,0,0,0.5)] sm:text-[1.02rem]">
          Power your body and mind with high-performance protein energy, engineered to fuel strength, focus, and unstoppable drive.
          </p>
        </div>
      </div>
    </section>
  );
}