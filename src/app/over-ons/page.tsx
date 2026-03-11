export const metadata = {
  title: "Over Ons | JS Auto's",
  description: "Leer JS Auto's kennen - Uw betrouwbare partner voor de in- en verkoop van gebruikte auto's in Hoogeveen",
};

export default function OverOnsPage() {
  return (
    <div className="mx-auto max-w-[1536px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-serif text-3xl font-bold text-[#1e3a5f] sm:text-4xl">
          Over JS Auto&apos;s
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600">
          In- en verkoop van gebruikte auto&apos;s in Hoogeveen
        </p>
      </div>

      <div className="mt-16 prose prose-lg mx-auto max-w-3xl">
        <div className="rounded-2xl bg-[#1e3a5f] p-8 text-white sm:p-12">
          <h2 className="font-serif text-2xl font-bold text-white">
            Uw betrouwbare autohandel
          </h2>
          <p className="mt-4 leading-relaxed text-blue-100">
            JS Auto&apos;s is uw partner in Hoogeveen voor de in- en verkoop van gebruikte auto&apos;s. 
            Wij staan voor kwaliteit, transparantie en persoonlijke service. Of u nu op zoek bent 
            naar een betrouwbare occasion of uw huidige auto wilt inruilen of verkopen – wij helpen u graag.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-semibold text-[#1e3a5f]">Onze waarden</h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-[#1e3a5f]">•</span>
                Eerlijk en transparant
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1e3a5f]">•</span>
                Persoonlijke aandacht
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1e3a5f]">•</span>
                Kwaliteitscontrole op elke auto
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#1e3a5f]">•</span>
                Marktconforme prijzen
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#1e3a5f]">Waarom JS Auto&apos;s?</h3>
            <p className="mt-4 text-gray-600">
              Gevestigd in Hoogeveen, kennen wij de regio en de wensen van onze klanten. 
              Wij selecteren onze occasions zorgvuldig en geven u een eerlijke beoordeling van elk voertuig. 
              Geen verrassingen – alleen duidelijke afspraken.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-8">
          <h3 className="font-semibold text-[#1e3a5f]">Bezoek ons</h3>
          <p className="mt-2 text-gray-600">
            A.G. Bellstraat 53, 7903 BB Hoogeveen
          </p>
          <p className="mt-1 text-gray-600">
            <a href="tel:+31630286332" className="text-[#1e3a5f] hover:underline">06-30 286 332</a>
            {" · "}
            <a href="mailto:info@jsautos.nl" className="text-[#1e3a5f] hover:underline">info@jsautos.nl</a>
          </p>
        </div>
      </div>
    </div>
  );
}
