"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/occasions", label: "Occasions" },
  { href: "/over-ons", label: "Over Ons" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1536px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-serif text-2xl font-bold text-white transition-colors hover:text-blue-400 sm:text-3xl"
        >
          JS Auto&apos;s
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors sm:text-base ${
                pathname === item.href
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button - mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label={isMenuOpen ? "Menu sluiten" : "Menu openen"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-[57px] z-40 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="fixed left-0 right-0 top-[57px] z-50 border-b border-white/10 bg-black px-4 py-4 shadow-lg md:hidden"
            aria-label="Navigatie"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      pathname === item.href
                        ? "bg-blue-500/20 text-blue-400"
                        : "text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </>
      )}
    </header>
  );
}
