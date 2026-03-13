import OccasionsFilter from "@/components/OccasionsFilter";

export const metadata = {
  title: "Occasions | JS Auto's",
  description:
    "Bekijk ons aanbod van gebruikte auto's. Kwaliteitsvolle occasions tegen scherpe prijzen.",
};

export default function OccasionsPage() {
  return (
    <div className="mx-auto w-full max-w-[1536px] overflow-x-hidden px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-serif text-3xl font-bold text-white sm:text-4xl">
          Occasions
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Bekijk ons actuele aanbod van zorgvuldig geselecteerde gebruikte
          auto&apos;s. Alle voertuigen zijn gecontroleerd en klaar voor gebruik.
        </p>
      </div>

      <div className="mt-12">
        <OccasionsFilter />
      </div>
    </div>
  );
}
