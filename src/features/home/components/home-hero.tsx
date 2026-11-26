"use client";

import { useState } from "react";
import type { PointerEvent } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/dictionaries";

export function HomeHero({ locale }: { locale: Locale }) {
  const id = locale === "id";
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const handlePointer = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    setPointer({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * 10,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * -10
    });
  };

  return (
    <section onPointerMove={handlePointer} className="hero-shell relative isolate overflow-hidden bg-[#0B1724] text-white">
      <div className="hero-grain pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="site-container relative z-10 grid min-h-[650px] items-center gap-8 py-16 lg:min-h-[680px] lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <div className="relative z-20 max-w-[720px]">
          <p className="eyebrow !text-[#22B8C8]">{id ? "Studio teknologi & software" : "Technology & software studio"}</p>
          <h1 className="hero-title mt-7 text-balance">
            {id ? <>Ide besar.<br /><span>Dampak nyata.</span></> : <>Big ideas.<br /><span>Real impact.</span></>}
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            {id
              ? "Kami merancang pengalaman digital dan membangun software untuk membantu bisnis bekerja lebih baik."
              : "We design digital experiences and build software that helps businesses work better."}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link href={`/${locale}/services`} className="primary-button">{id ? "Lihat layanan" : "Explore services"} <span aria-hidden="true">↗</span></Link>
            <Link href={`/${locale}/contact`} className="text-link-light">{id ? "Diskusikan proyek" : "Discuss a project"} <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/15 pt-5 font-mono text-[10px] uppercase tracking-[.14em] text-white/50">
            <span>Strategy</span><span>Design</span><span>Engineering</span>
          </div>
        </div>

        <div className="hero-art relative mx-auto aspect-square w-full max-w-[540px]" aria-hidden="true">
          <div className="hero-art-label hero-art-label-top">ZC — 001 / DIGITAL SYSTEMS</div>
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
          <div className="hero-art-label hero-art-label-bottom">{id ? "DARI IDE KE DAMPAK" : "FROM IDEA TO IMPACT"}</div>
        </div>
      </div>
      <div className="hero-bottom-line" aria-hidden="true"><span>ZIROCRAFT</span><span>CREATIVE TECHNOLOGY / 2026</span><span>{id ? "JELAJAHI" : "EXPLORE"} ↓</span></div>
    </section>
  );
}
