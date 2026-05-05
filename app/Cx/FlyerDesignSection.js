"use client";

import { useState, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";

export default function FlyerDesignSection({
  title,
  imageAlt,
  sectionId,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  }, []);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    setIsPlaying(true);
    v.play().catch(() => setIsPlaying(false));
  };

  const handleEnded = () => {
    const v = videoRef.current;
    if (v) v.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <section
      id={sectionId}
      className="w-full bg-white px-4 pb-12 pt-4 sm:px-6 md:px-8 md:pb-16 scroll-mt-28"
    >
      <h2 className="mb-7 text-center text-3xl font-extrabold uppercase leading-none text-black sm:mb-9 sm:text-[2.15rem]">
        {title}
      </h2>

      <div className="relative mx-auto w-full max-w-5xl aspect-video overflow-hidden rounded-3xl sm:rounded-[1.75rem]">
        
        {/* VIDEO */}
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/vid.mp4"
          playsInline
          preload="metadata"
          controls={isPlaying}
          onEnded={handleEnded}
        />

        {/* OVERLAY + PLAY BUTTON */}
        {!isPlaying && (
          <>
            <div className="absolute inset-0 z-[1] bg-black/35" aria-hidden />

            <div className="absolute inset-0 z-10 flex items-center justify-center p-4">
              <button
                type="button"
                onClick={handlePlay}
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-normal text-neutral-900 shadow-lg transition duration-200 ease-out hover:scale-105 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-8 sm:py-3.5 sm:text-base"
                aria-label="Play video"
              >
                <FaPlay className="size-3.5 shrink-0 text-red-600 sm:size-4" />
                Play video
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}