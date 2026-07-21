"use client";

import { useRef, useEffect } from "react";

export default function FlyerDesignSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section
      id="hero"
      aria-label="Hero video"
      className="w-full scroll-mt-24 bg-black"
    >
      <video
        ref={videoRef}
        className="block h-auto w-full object-contain"
        src="/can-new-vid.mp4"
        autoPlay
        muted
        playsInline
        loop
        preload="auto"
      />
    </section>
  );
}
