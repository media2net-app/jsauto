"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { occasions } from "@/data/occasions";

function formatPrijs(prijs: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(prijs);
}

function formatKilometerstand(km: number) {
  return new Intl.NumberFormat("nl-NL").format(km) + " km";
}

export default function OccasionsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = 320;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 320;
    const gap = 20;
    const scrollAmount = cardWidth + gap;
    const maxScroll = el.scrollWidth - el.clientWidth;

    const interval = setInterval(() => {
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="border-b border-gray-100 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-2xl font-bold text-[#1e3a5f] sm:text-3xl">
            Nieuw binnen
          </h2>
          <Link
            href="/occasions"
            className="text-sm font-medium text-[#1e3a5f] hover:underline sm:text-base"
          >
            Bekijk alle occasions →
          </Link>
        </div>

        <div className="relative mt-6">
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto overflow-y-hidden pb-4 scroll-smooth scrollbar-hide"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {occasions.map((auto) => (
              <Link
                key={auto.id}
                href={`/occasions/${auto.id}`}
                className="group w-[280px] shrink-0 sm:w-[300px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:border-[#1e3a5f]/30 hover:shadow-md">
                  <div className="relative aspect-[4/3] bg-gray-100">
                    <Image
                      src={auto.afbeelding}
                      alt={`${auto.merk} ${auto.model}`}
                      fill
                      className="object-cover transition-transform group-hover:scale-[1.02]"
                      sizes="300px"
                    />
                    <div className="absolute right-2 top-2 rounded bg-[#1e3a5f] px-2.5 py-1 text-xs font-semibold text-white">
                      {formatPrijs(auto.prijs)}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-[#1e3a5f]">
                      {auto.merk} {auto.model}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {auto.bouwjaar} · {formatKilometerstand(auto.kilometerstand)}
                    </p>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Navigation buttons - hidden on mobile, visible on larger screens */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-50 lg:-left-4 lg:block"
            aria-label="Vorige"
          >
            <svg
              className="h-5 w-5 text-[#1e3a5f]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-50 lg:-right-4 lg:block"
            aria-label="Volgende"
          >
            <svg
              className="h-5 w-5 text-[#1e3a5f]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
