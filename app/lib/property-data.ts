// Placeholder content mirroring the Firestore `properties` document shape.
// Once Firebase is wired up, the homepage should fetch this shape instead of importing it.

export type HeroSlide = {
  id: string;
  placeholder: string;
  src?: string;
};

export type ResidenceRow = {
  imgId: string;
  kicker: string;
  title: string;
  copy: string;
  src?: string;
};

export type GalleryItem = {
  id: string;
  placeholder: string;
  tall?: boolean;
};

export type Distance = {
  label: string;
  value: string;
};

export const property = {
  name: "Elios Residences",
  tagline: "Playa Brava · Punta del Este",
  heroTitle: "Oceanfront Residence\nat Playa Brava",
  heroSubtitle:
    "An exceptional residence combining panoramic Atlantic views with five-star amenities, inside one of Punta del Este's most exclusive towers.",
  location: "Playa Brava, Punta del Este, Uruguay",
  whatsapp: "59899000000",
  email: "reservations@elios-residences.com",
  bedrooms: 4,
  bathrooms: 3,
  guests: 8,
  floor: 12,
  views: "Ocean View",
  parking: 2,
  pricePerNight: 980,
};

export const heroSlides: HeroSlide[] = [
  { id: "hero-ocean", placeholder: "Panoramic Atlantic Ocean view", src: "/images/hero/panoramic.png" },
  { id: "hero-living", placeholder: "Living room with ocean view", src: "/images/hero/hero-living.png" },
  { id: "hero-terrace", placeholder: "Private terrace at golden hour", src: "/images/hero/hero-terrace.png" },
  { id: "hero-bedroom", placeholder: "Master bedroom", src: "/images/hero/hero-bedroom.png" },
  { id: "hero-tower", placeholder: "Tower exterior at sunset", src: "/images/hero/hero-tower.png" },
];

export const residenceRows: ResidenceRow[] = [
  {
    imgId: "res-living",
    kicker: "Living Room",
    title: "A room built around the view",
    copy: "Floor-to-ceiling glass frames the Atlantic from every seat. Warm oak, linen and stone keep the palette quiet so the ocean stays the focus.",
    src: "/images/residence/res-living.png",
  },
  {
    imgId: "res-master",
    kicker: "Master Suite",
    title: "Wake up above the water",
    copy: "The main suite opens onto its own stretch of terrace — a private place for coffee at sunrise and the last light at dusk.",
    src: "/images/residence/res-master.png",
  },
  {
    imgId: "res-kitchen",
    kicker: "Kitchen & Dining",
    title: "Set for entertaining, or for no one at all",
    copy: "A fully equipped kitchen and a table for eight make the residence equally suited to a quiet breakfast or a long, unhurried dinner.",
  },
  {
    imgId: "res-terrace",
    kicker: "Private Terrace",
    title: "Where the day tends to end",
    copy: "Wide enough for lounging and dining alike, the terrace turns every sunset over Playa Brava into part of the apartment itself.",
  },
  {
    imgId: "res-guest",
    kicker: "Guest Bedrooms & Workspace",
    title: "Room for everyone, and a place to focus",
    copy: "Three additional bedrooms and a dedicated workspace mean the residence holds a full family, or a quiet work trip, with equal ease.",
  },
];

export const buildingAmenities: string[] = [
  "Indoor Heated Pool",
  "Outdoor Swimming Pool",
  "Spa & Sauna",
  "Fully Equipped Gym",
  "Yoga Studio",
  "Co-working Lounge",
  "Cinema Room",
  "Wine Room",
  "Game Room",
  "Children's Playroom",
  "24h Concierge & Security",
  "Valet & EV Parking",
];

export const galleryItems: GalleryItem[] = [
  { id: "gal-lobby", placeholder: "Tower lobby", tall: true },
  { id: "gal-livingroom", placeholder: "Apartment living room" },
  { id: "gal-outdoorpool", placeholder: "Outdoor pool deck" },
  { id: "gal-terrace", placeholder: "Private terrace ocean view", tall: true },
  { id: "gal-gym", placeholder: "Fitness studio" },
  { id: "gal-spa", placeholder: "Spa treatment room" },
  { id: "gal-facade", placeholder: "Building facade at night" },
  { id: "gal-sunset", placeholder: "Sunset over Playa Brava", tall: true },
  { id: "gal-indoorpool", placeholder: "Indoor heated pool" },
];

export const distances: Distance[] = [
  { label: "Playa Brava", value: "2 min walk" },
  { label: "Playa Mansa", value: "8 min walk" },
  { label: "Puerto & Marina", value: "10 min drive" },
  { label: "Península & Casino", value: "12 min drive" },
  { label: "Gorlero Shopping", value: "15 min walk" },
  { label: "La Barra & Surf Beaches", value: "20 min drive" },
  { label: "Art Galleries & Beach Clubs", value: "Within the neighborhood" },
];

export function whatsappHref(message?: string) {
  const defaultMessage = `Hello, I am interested in staying at ${property.name}.\n\nCheck-in:\nCheck-out:\nGuests:\n`;
  return `https://wa.me/${property.whatsapp}?text=${encodeURIComponent(message ?? defaultMessage)}`;
}
