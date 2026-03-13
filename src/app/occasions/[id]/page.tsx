import { notFound } from "next/navigation";
import Link from "next/link";
import { occasions } from "@/data/occasions";
import ImageGallery from "@/components/ImageGallery";

interface Props {
  params: Promise<{ id: string }>;
}

function formatPrijs(prijs: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(prijs);
}

function formatKilometerstand(km: number) {
  return new Intl.NumberFormat("nl-NL").format(km) + " km";
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const auto = occasions.find((o) => o.id === id);
  if (!auto) return { title: "Occasion | JS Auto's" };
  return {
    title: `${auto.merk} ${auto.model} | JS Auto's`,
    description: `${auto.merk} ${auto.model} - Bouwjaar ${auto.bouwjaar}, ${formatKilometerstand(auto.kilometerstand)} - ${formatPrijs(auto.prijs)}`,
  };
}

export default async function OccasionDetailPage({ params }: Props) {
  const { id } = await params;
  const auto = occasions.find((o) => o.id === id);

  if (!auto) notFound();

  // Demo: gebruik hoofdfoto voor alle detailfoto's
  const galleryImages = Array.from({ length: 5 }, () => auto.afbeelding);

  return (
    <div className="mx-auto w-full max-w-[1536px] overflow-x-hidden px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/occasions"
        className="mb-8 inline-flex items-center text-sm text-gray-400 hover:text-blue-400"
      >
        ← Terug naar overzicht
      </Link>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0 overflow-hidden">
        <ImageGallery
          images={galleryImages}
          alt={`${auto.merk} ${auto.model}`}
        />
        </div>

        <div className="min-w-0">
          <h1 className="font-serif text-2xl font-bold text-white sm:text-3xl">
            {auto.merk} {auto.model}
          </h1>
          <p className="mt-4 text-2xl font-semibold text-white">
            {formatPrijs(auto.prijs)}
          </p>

          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-gray-400">Bouwjaar</dt>
              <dd className="font-medium text-white">{auto.bouwjaar}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-400">Kilometerstand</dt>
              <dd className="font-medium text-white">{formatKilometerstand(auto.kilometerstand)}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-400">Brandstof</dt>
              <dd className="font-medium text-white">{auto.brandstof}</dd>
            </div>
            <div>
              <dt className="text-sm text-gray-400">Transmissie</dt>
              <dd className="font-medium text-white">{auto.transmissie}</dd>
            </div>
          </dl>

          <p className="mt-6 text-gray-400">
            Interesse in deze occasion? Neem contact met ons op voor een proefrit of meer informatie.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+31630286332"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#1e3a5f] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#152a45] active:bg-[#0f1f33]"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              06-30 286 332
            </a>
            <a
              href={`mailto:info@jsautos.nl?subject=Interesse in ${encodeURIComponent(auto.merk + " " + auto.model)}`}
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border-2 border-blue-500 px-6 py-3 font-semibold text-blue-400 transition-colors hover:bg-blue-500/10 active:bg-blue-500/20"
            >
              E-mail sturen
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
