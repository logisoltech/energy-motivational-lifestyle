"use client";

import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

export default function FlyerDesignSection() {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.play().catch(() => setPaused(true));

    const onPlay = () => setPaused(false);
    const onPause = () => setPaused(true);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  const togglePlayback = () => {
    const v = videoRef.current;
    if (!v) return;

    if (v.paused) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  return (
    <section
      id="hero"
      aria-label="Hero video"
      className="relative w-full scroll-mt-24 bg-black"
    >
      <video
        ref={videoRef}
        className="block h-auto w-full object-contain"
        src="/can-vid-18-sep.mp4"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      />
      <button
        type="button"
        onClick={togglePlayback}
        aria-label={paused ? "Play video" : "Pause video"}
        className="absolute inset-0 z-10 cursor-pointer"
      />
      <div className="pointer-events-none absolute bottom-4 right-4 z-20 inline-flex size-12 items-center justify-center rounded-full bg-black/55 text-white shadow-sm backdrop-blur-sm sm:bottom-5 sm:right-5">
        {paused ? (
          <FaPlay className="size-4 translate-x-px" aria-hidden />
        ) : (
          <FaPause className="size-4" aria-hidden />
        )}
      </div>
    </section>
  );
}
