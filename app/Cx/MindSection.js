import Image from "next/image";

export default function MindSection() {
  return (
    <section id="about" className="w-full bg-white py-10 sm:py-14 scroll-mt-28">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-center md:gap-20 lg:px-12">
        <div className="w-full max-w-xl md:w-104 md:max-w-none lg:w-md">
          <Image
            src="/girl.png"
            alt="Thinker immunizer cap visual"
            width={900}
            height={620}
            className="h-auto w-full rounded-[1.75rem]"
            priority={false}
          />
        </div>

        <div className="w-full max-w-xl md:w-104 md:max-w-none lg:w-xl">
          <h2 className="max-w-3xl text-balance text-3xl leading-[1.05] font-extrabold uppercase tracking-tight text-neutral-900 sm:text-[2.55rem]">
          1 DRINK FOOD-DIET-ENERGY
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-700 md:text-[1.05rem]">
          The M.D.I Motivational Drink is a high-performance protein energy beverage designed to fuel both body and mind. Formulated with essential nutrients and energy-boosting elements, it supports strength, endurance, and mental focus throughout the day. With a science-inspired blend aimed at optimizing your body’s natural energy processes, M.D.I is built for individuals who want to stay active, sharp, and motivated in every moment.
          </p>
        </div>
      </div>
    </section>
  );
}