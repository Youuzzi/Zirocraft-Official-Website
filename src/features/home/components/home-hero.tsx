"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/dictionaries";

export function HomeHero({ locale }: { locale: Locale }) {
  const id = locale === "id";
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const handlePointer = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 12,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * -12
    });
  };

  return (
    <section onPointerMove={handlePointer} className="hero-shell relative isolate overflow-hidden bg-[#11151b] text-white">
      <div className="hero-grain pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="site-container relative z-10 grid min-h-[760px] items-center gap-10 py-24 lg:min-h-[820px] lg:grid-cols-[1.05fr_.95fr] lg:py-28">
        <div className="relative z-20 max-w-[780px]">
          <p className="eyebrow !text-[#d6ff55]">{id ? "Studio teknologi kreatif independen" : "Independent creative technology studio"}</p>
          <h1 className="hero-title mt-8 text-balance">
            {id ? <>Kami membuat<br /><span>ide bergerak.</span></> : <>We make<br /><span>ideas move.</span></>}
          </h1>
          <p className="mt-8 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
            {id
              ? "Strategi, desain, dan software bertemu untuk membangun pengalaman digital serta sistem yang membantu bisnis melangkah lebih jauh."
              : "Where strategy, design, and software meet to create digital experiences and systems that move businesses forward."}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href={`/${locale}/products`} className="lime-button">{id ? "Jelajahi karya kami" : "Explore what we make"} <span aria-hidden="true">↗</span></Link>
            <Link href={`/${locale}/contact`} className="text-link-light">{id ? "Mulai sebuah ide" : "Start a conversation"} <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-5 font-mono text-[10px] uppercase tracking-[.17em] text-white/45">
            <span>01 / Think</span><span>02 / Design</span><span>03 / Build</span><span>04 / Evolve</span>
          </div>
        </div>

        <div className="hero-art relative mx-auto aspect-square w-full max-w-[590px]" aria-label={id ? "Komposisi visual interaktif ZiroCraft" : "Interactive ZiroCraft visual composition"}>
          <div className="hero-art-label hero-art-label-top">ZC — 001 / CREATIVE SYSTEMS</div>
          <div className="hero-orbit orbit-one" style={{ transform: `translate(-50%, -50%) rotateX(${pointer.y}deg) rotateY(${pointer.x}deg)` }}>
            <div className="orbit-dot" />
          </div>
          <div className="hero-orbit orbit-two" style={{ transform: `translate(-50%, -50%) rotateX(${-pointer.y * .7}deg) rotateY(${-pointer.x * .7}deg) rotate(58deg)` }} />
          <div className="hero-core" style={{ transform: `translate(-50%, -50%) rotateX(${pointer.y * .55}deg) rotateY(${pointer.x * .55}deg)` }}>
            <div className="core-face"><span>MAKE<br />IT<br /><b>MATTER.</b></span><i>ZIROCRAFT®</i></div>
            <div className="core-side" />
          </div>
          <div className="hero-satellite satellite-a"><span>01</span><b>IDEA</b></div>
          <div className="hero-satellite satellite-b"><span>02</span><b>IMPACT</b></div>
          <div className="hero-art-cross cross-a">+</div>
          <div className="hero-art-cross cross-b">+</div>
          <div className="hero-art-label hero-art-label-bottom">{id ? "GERAKKAN KEMUNGKINAN" : "MOVE THE POSSIBLE"}</div>
        </div>
      </div>
      <div className="hero-bottom-line" aria-hidden="true"><span>ZIROCRAFT</span><span>CREATIVE TECHNOLOGY / 2026</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
  );
}
