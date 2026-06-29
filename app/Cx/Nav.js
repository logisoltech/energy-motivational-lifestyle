"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Power Up", href: "#hero" },
  { label: "Gallery", href: "#gallery" },
  { label: "Applications", href: "#gallery" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleClick = (e, href) => {
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    setOpen(false);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    if (history.replaceState) {
      history.replaceState(null, "", href);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-[#FCF9E3]">
      <div className="mx-auto flex h-20 w-full max-w-[1536px] items-center justify-between gap-4 px-5 sm:h-22 md:h-24 sm:px-8">
        <a
          href="https://motivational-lifestyle.vercel.app/"
          className="shrink-0"
          aria-label="Home"
        >
          <Image
            src="/logo.png"
            alt="Institutional Lifestyle"
            width={400}
            height={130}
            className="h-14 w-auto sm:h-16 md:h-20 lg:h-24"
            priority
          />
        </a>

        <nav
          className="hidden flex-1 justify-center sm:flex"
          aria-label="Primary"
        >
          <ul className="flex items-center justify-center gap-x-10 lg:gap-x-14">
            {LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className="relative inline-block cursor-pointer text-sm font-normal tracking-wide whitespace-nowrap text-neutral-800 transition-colors hover:text-neutral-950 after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 text-neutral-900 shadow-sm transition hover:bg-neutral-200 sm:hidden"
        >
          {open ? (
            <FaTimes className="size-5" aria-hidden />
          ) : (
            <FaBars className="size-5" aria-hidden />
          )}
        </button>

        <div className="hidden w-30 shrink-0 sm:block" aria-hidden />
      </div>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Primary navigation"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-black/90 backdrop-blur-md transition-opacity duration-300 sm:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-7">
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                className="text-2xl font-semibold tracking-wide text-white/95 transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
