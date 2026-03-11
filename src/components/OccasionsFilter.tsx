"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { occasions, type Occasion } from "@/data/occasions";

function formatPrijs(prijs: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(prijs);
}

function formatKilometerstand(km: number) {
  return new Intl.NumberFormat("nl-NL").format(km) + " km";
}

const PRIJS_RANGES = [
  { label: "Tot € 20.000", min: 0, max: 20000 },
  { label: "€ 20.000 - € 25.000", min: 20000, max: 25000 },
  { label: "€ 25.000 - € 30.000", min: 25000, max: 30000 },
  { label: "€ 30.000 - € 40.000", min: 30000, max: 40000 },
  { label: "Vanaf € 40.000", min: 40000, max: Infinity },
];

export default function OccasionsFilter() {
  const merken = useMemo(
    () => [...new Set(occasions.map((o) => o.merk))].sort(),
    []
  );
  const brandstoffen = useMemo(
    () => [...new Set(occasions.map((o) => o.brandstof))].sort(),
    []
  );
  const transmissies = useMemo(
    () => [...new Set(occasions.map((o) => o.transmissie))].sort(),
    []
  );

  const [selectedMerken, setSelectedMerken] = useState<string[]>([]);
  const [selectedPrijsRange, setSelectedPrijsRange] = useState<string | null>(
    null
  );
  const [selectedBrandstof, setSelectedBrandstof] = useState<string[]>([]);
  const [selectedTransmissie, setSelectedTransmissie] = useState<string[]>([]);

  const toggleMerk = (merk: string) => {
    setSelectedMerken((prev) =>
      prev.includes(merk) ? prev.filter((m) => m !== merk) : [...prev, merk]
    );
  };

  const toggleBrandstof = (b: string) => {
    setSelectedBrandstof((prev) =>
      prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b]
    );
  };

  const toggleTransmissie = (t: string) => {
    setSelectedTransmissie((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  const filteredOccasions = useMemo(() => {
    return occasions.filter((auto) => {
      if (selectedMerken.length && !selectedMerken.includes(auto.merk))
        return false;
      if (selectedBrandstof.length && !selectedBrandstof.includes(auto.brandstof))
        return false;
      if (
        selectedTransmissie.length &&
        !selectedTransmissie.includes(auto.transmissie)
      )
        return false;
      if (selectedPrijsRange) {
        const range = PRIJS_RANGES.find((r) => r.label === selectedPrijsRange);
        if (range && (auto.prijs < range.min || auto.prijs >= range.max))
          return false;
      }
      return true;
    });
  }, [
    selectedMerken,
    selectedBrandstof,
    selectedTransmissie,
    selectedPrijsRange,
  ]);

  const resetFilters = () => {
    setSelectedMerken([]);
    setSelectedPrijsRange(null);
    setSelectedBrandstof([]);
    setSelectedTransmissie([]);
  };

  const hasActiveFilters =
    selectedMerken.length > 0 ||
    selectedBrandstof.length > 0 ||
    selectedTransmissie.length > 0 ||
    selectedPrijsRange !== null;

  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      {/* Filter sidebar */}
      <aside className="w-full shrink-0 lg:w-72">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm lg:sticky lg:top-24">
          {/* Mobile: collapsible header */}
          <button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex w-full items-center justify-between p-4 text-left lg:hidden"
            aria-expanded={isFiltersOpen}
          >
            <h3 className="font-semibold text-gray-900">
              Filters
              {hasActiveFilters && (
                <span className="ml-2 rounded-full bg-[#1e3a5f] px-2 py-0.5 text-xs text-white">
                  actief
                </span>
              )}
            </h3>
            <svg
              className={`h-5 w-5 text-gray-500 transition-transform ${isFiltersOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div
            className={`overflow-hidden transition-all lg:block ${
              isFiltersOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"
            }`}
          >
            <div className="border-t border-gray-100 p-4 lg:border-t-0 lg:p-6">
              <div className="flex items-center justify-between lg:mb-0">
                <h3 className="hidden font-semibold text-gray-900 lg:block">Filters</h3>
                {hasActiveFilters && (
                  <button
                    onClick={resetFilters}
                    className="text-sm text-[#1e3a5f] hover:underline"
                  >
                    Wis filters
                  </button>
                )}
              </div>
          <div className="mt-4 space-y-6 lg:mt-6">
            {/* Merk */}
            <div>
              <h4 className="mb-3 text-sm font-medium text-gray-700">Merk</h4>
              <div className="space-y-2">
                {merken.map((merk) => (
                  <label
                    key={merk}
                    className="flex min-h-[44px] cursor-pointer touch-manipulation items-center gap-3 py-1"
                  >
                    <input
                      type="checkbox"
                      checked={selectedMerken.includes(merk)}
                      onChange={() => toggleMerk(merk)}
                      className="h-4 w-4 rounded border-gray-300 text-[#1e3a5f] focus:ring-[#1e3a5f]"
                    />
                    <span className="text-sm text-gray-700">{merk}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Prijs */}
            <div>
              <h4 className="mb-3 text-sm font-medium text-gray-700">Prijs</h4>
              <div className="space-y-2">
                {PRIJS_RANGES.map((range) => (
                  <label
                    key={range.label}
                    className="flex min-h-[44px] cursor-pointer touch-manipulation items-center gap-3 py-1"
                  >
                    <input
                      type="radio"
                      name="prijs"
                      checked={selectedPrijsRange === range.label}
                      onChange={() =>
                        setSelectedPrijsRange((prev) =>
                          prev === range.label ? null : range.label
                        )
                      }
                      className="h-4 w-4 border-gray-300 text-[#1e3a5f] focus:ring-[#1e3a5f]"
                    />
                    <span className="text-sm text-gray-700">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Brandstof */}
            <div>
              <h4 className="mb-3 text-sm font-medium text-gray-700">
                Brandstof
              </h4>
              <div className="space-y-2">
                {brandstoffen.map((b) => (
                  <label
                    key={b}
                    className="flex min-h-[44px] cursor-pointer touch-manipulation items-center gap-3 py-1"
                  >
                    <input
                      type="checkbox"
                      checked={selectedBrandstof.includes(b)}
                      onChange={() => toggleBrandstof(b)}
                      className="h-4 w-4 rounded border-gray-300 text-[#1e3a5f] focus:ring-[#1e3a5f]"
                    />
                    <span className="text-sm text-gray-700">{b}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Transmissie */}
            <div>
              <h4 className="mb-3 text-sm font-medium text-gray-700">
                Transmissie
              </h4>
              <div className="space-y-2">
                {transmissies.map((t) => (
                  <label
                    key={t}
                    className="flex min-h-[44px] cursor-pointer touch-manipulation items-center gap-3 py-1"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTransmissie.includes(t)}
                      onChange={() => toggleTransmissie(t)}
                      className="h-4 w-4 rounded border-gray-300 text-[#1e3a5f] focus:ring-[#1e3a5f]"
                    />
                    <span className="text-sm text-gray-700">{t}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>
      </aside>

      {/* Occasions grid */}
      <div className="flex-1">
        <p className="mb-4 text-sm text-gray-600">
          {filteredOccasions.length} occasion
          {filteredOccasions.length !== 1 ? "s" : ""} gevonden
        </p>
        {filteredOccasions.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredOccasions.map((auto) => (
              <OccasionCard key={auto.id} auto={auto} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-gray-200 bg-gray-50 p-12 text-center">
            <p className="text-gray-600">
              Geen occasions gevonden met de geselecteerde filters.
            </p>
            <button
              onClick={resetFilters}
              className="mt-4 text-[#1e3a5f] hover:underline"
            >
              Wis alle filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function OccasionCard({ auto }: { auto: Occasion }) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/occasions/${auto.id}`}>
        <div className="relative aspect-[4/3] bg-gray-100">
          <Image
            src={auto.afbeelding}
            alt={`${auto.merk} ${auto.model}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          <div className="absolute right-3 top-3 rounded bg-[#1e3a5f] px-3 py-1 text-sm font-semibold text-white">
            {formatPrijs(auto.prijs)}
          </div>
        </div>
      </Link>
      <div className="p-5">
        <h2 className="font-semibold text-gray-900">
          <Link
            href={`/occasions/${auto.id}`}
            className="hover:text-[#1e3a5f] hover:underline"
          >
            {auto.merk} {auto.model}
          </Link>
        </h2>
        <ul className="mt-3 space-y-1 text-sm text-gray-600">
          <li>Bouwjaar: {auto.bouwjaar}</li>
          <li>{formatKilometerstand(auto.kilometerstand)}</li>
          <li>
            {auto.brandstof} · {auto.transmissie}
          </li>
        </ul>
        <Link
          href={`/occasions/${auto.id}`}
          className="mt-4 inline-block font-medium text-[#1e3a5f] hover:underline"
        >
          Bekijk details →
        </Link>
      </div>
    </article>
  );
}
