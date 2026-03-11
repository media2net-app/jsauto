export interface Occasion {
  id: string;
  merk: string;
  model: string;
  bouwjaar: number;
  kilometerstand: number;
  prijs: number;
  brandstof: string;
  transmissie: string;
  afbeelding: string;
  beschrijving?: string;
}

export const occasions: Occasion[] = [
  {
    id: "1",
    merk: "Volkswagen",
    model: "Golf 1.5 TSI Life",
    bouwjaar: 2021,
    kilometerstand: 42500,
    prijs: 24950,
    brandstof: "Benzine",
    transmissie: "Handgeschakeld",
    afbeelding: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&h=400&fit=crop",
  },
  {
    id: "2",
    merk: "BMW",
    model: "320d Touring M Sport",
    bouwjaar: 2019,
    kilometerstand: 78000,
    prijs: 32990,
    brandstof: "Diesel",
    transmissie: "Automaat",
    afbeelding: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop",
  },
  {
    id: "3",
    merk: "Toyota",
    model: "Yaris 1.5 Hybrid",
    bouwjaar: 2022,
    kilometerstand: 18500,
    prijs: 21990,
    brandstof: "Hybride",
    transmissie: "Automaat",
    afbeelding: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop",
  },
  {
    id: "4",
    merk: "Volkswagen",
    model: "T-Roc 1.0 TSI Style",
    bouwjaar: 2020,
    kilometerstand: 54000,
    prijs: 22490,
    brandstof: "Benzine",
    transmissie: "Handgeschakeld",
    afbeelding: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop",
  },
  {
    id: "5",
    merk: "Ford",
    model: "Focus 1.0 EcoBoost Titanium",
    bouwjaar: 2021,
    kilometerstand: 36500,
    prijs: 19990,
    brandstof: "Benzine",
    transmissie: "Handgeschakeld",
    afbeelding: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=600&h=400&fit=crop",
  },
  {
    id: "6",
    merk: "Opel",
    model: "Corsa 1.2 Turbo Edition",
    bouwjaar: 2023,
    kilometerstand: 12000,
    prijs: 20990,
    brandstof: "Benzine",
    transmissie: "Handgeschakeld",
    afbeelding: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop",
  },
];
