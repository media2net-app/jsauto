"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

export default function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const selectedImage = images[selectedIndex] ?? images[0];

  return (
    <>
      <div className="min-w-0 max-w-full space-y-4">
        {/* Main image - clickable voor lightbox */}
        <button
          type="button"
          onClick={() => setIsLightboxOpen(true)}
          className="relative block aspect-[4/3] w-full min-w-0 overflow-hidden rounded-xl bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black"
          aria-label="Afbeelding vergroten"
        >
          <Image
            src={selectedImage}
            alt={`${alt} - foto ${selectedIndex + 1}`}
            fill
            className="object-cover transition-transform hover:scale-[1.02]"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-xs text-white">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
              />
            </svg>
            Vergroot
          </div>
        </button>

        {/* Thumbnail strip */}
        <div className="flex gap-2 overflow-x-auto overflow-y-hidden pb-2 scrollbar-hide">
          {images.map((img, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black ${
                selectedIndex === index
                  ? "ring-2 ring-blue-500 ring-offset-2 ring-offset-black"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${alt} - foto ${index + 1}`}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <Lightbox
          images={images}
          alt={alt}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </>
  );
}

function Lightbox({
  images,
  alt,
  selectedIndex,
  onSelect,
  onClose,
}: {
  images: string[];
  alt: string;
  selectedIndex: number;
  onSelect: (index: number) => void;
  onClose: () => void;
}) {
  const selectedImage = images[selectedIndex] ?? images[0];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col bg-black/95 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
      role="dialog"
          aria-modal="true"
          aria-label="Afbeeldingen galerij"
          onClick={onClose}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 min-w-[44px] min-h-[44px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 active:bg-white/30 touch-manipulation"
            aria-label="Sluiten"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div
            className="flex flex-1 items-center justify-center p-4 pt-20 sm:pt-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={`${alt} - foto ${selectedIndex + 1}`}
              width={1200}
              height={800}
              className="max-h-[85vh] w-auto max-w-full object-contain"
            />
          </div>

          {/* Lightbox thumbnails */}
          <div
            className="flex justify-center gap-2 border-t border-white/20 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {images.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(index);
                }}
                className={`relative h-12 w-16 shrink-0 overflow-hidden rounded transition-all ${
                  selectedIndex === index
                    ? "ring-2 ring-white ring-offset-2 ring-offset-black"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${alt} - foto ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>

          {/* Navigation in lightbox */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(
                    selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
                  );
                }}
                className="absolute left-2 top-1/2 -translate-y-1/2 flex h-12 w-12 min-w-[48px] min-h-[48px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 active:bg-white/30 touch-manipulation sm:left-4"
                aria-label="Vorige foto"
              >
                <svg
                  className="h-6 w-6"
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
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(
                    selectedIndex === images.length - 1
                      ? 0
                      : selectedIndex + 1
                  );
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-12 w-12 min-w-[48px] min-h-[48px] items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 active:bg-white/30 touch-manipulation sm:right-4"
                aria-label="Volgende foto"
              >
                <svg
                  className="h-6 w-6"
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
            </>
          )}

          <p className="pb-4 text-center text-sm text-white/70">
            {selectedIndex + 1} / {images.length}
          </p>
        </div>
  );
}
