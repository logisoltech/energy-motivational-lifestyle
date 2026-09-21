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

const GOLD_BTN =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-linear-to-b from-[#F4CE5E] to-[#E0A82E] px-5 py-2.5 text-base leading-none font-bold text-neutral-900 shadow-sm transition hover:brightness-105";

const GOLD_BTN_MOBILE =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full bg-linear-to-b from-[#F4CE5E] to-[#E0A82E] px-7 py-3 text-lg leading-none font-bold text-neutral-900 shadow-sm transition hover:brightness-105";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    if (!open && !contactOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open, contactOpen]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (contactOpen) {
        setContactOpen(false);
        return;
      }
      setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [contactOpen]);

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

  const openContact = () => {
    setOpen(false);
    setContactOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-[#FCF9E3]">
        <div className="mx-auto flex min-h-24 w-full max-w-[1536px] items-center justify-between gap-4 px-5 py-2 sm:min-h-28 md:min-h-32 sm:px-8">
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
              className="h-20 w-auto sm:h-24 md:h-28 lg:h-32"
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

          <div className="hidden shrink-0 grid-cols-2 gap-2 sm:grid">
            <a href="#" className={GOLD_BTN}>
              Invest / Donate
            </a>
            <a href="#" className={GOLD_BTN}>
              Buy M.D Crypto
            </a>
            <button type="button" onClick={openContact} className={GOLD_BTN}>
              Contact
            </button>
            <a href="#" className={GOLD_BTN}>
              Financing Available
            </a>
          </div>
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

          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="#"
              onClick={() => setOpen(false)}
              className={GOLD_BTN_MOBILE}
            >
              Invest / Donate
            </a>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className={GOLD_BTN_MOBILE}
            >
              Buy M.D Crypto
            </a>
            <button
              type="button"
              onClick={openContact}
              className={GOLD_BTN_MOBILE}
            >
              Contact
            </button>
            <a
              href="#"
              onClick={() => setOpen(false)}
              className={GOLD_BTN_MOBILE}
            >
              Financing Available
            </a>
          </div>
        </div>
      </header>

      {contactOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/55 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Contact location"
          onClick={() => setContactOpen(false)}
        >
          <div
            className="relative w-full max-w-xl rounded-3xl bg-[#E8E4D8] px-10 py-14 text-center shadow-lg sm:px-14 sm:py-16"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setContactOpen(false)}
              className="absolute top-4 right-5 text-neutral-800 transition hover:text-neutral-950"
              aria-label="Close contact"
            >
              <FaTimes className="size-5" aria-hidden />
            </button>

            <p className="text-lg font-bold leading-snug tracking-wide text-neutral-900 sm:text-xl">
              M.D. MOTIVATIONAL ENTERPRISES LLC –
              <br />
              LOCATION
            </p>
            <p className="mt-3 text-base font-medium text-neutral-800 sm:text-lg">
              56 St. NY. NY. 10019
            </p>
          </div>
        </div>
      )}
    </>
  );
}
