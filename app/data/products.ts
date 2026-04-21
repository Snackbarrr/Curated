export type Product = {
  slug: string;
  name: string;
  price: string;
  sold?: boolean;
  category?: string;
  size?: string;
  description?: string;
  heroImage: string;
  backImage: string;
  detailImages: string[];
  measurements?: {
    pitToPit?: string;
    shoulder?: string;
    sleeve?: string;
    backLength?: string;
    waist?: string;
    rise?: string;
    inseam?: string;
    hem?: string;
  };
};

export const products: Product[] = [
  {
    slug: "unissued-raf-flight-jacket",
    name: "Unissued RAF Flight Jacket",
    price: "£3000",
    sold: false,
    category: "Outerwear",
    size: "4",
    description:
      "A softly structured vintage jacket selected for its texture, shape, and everyday character.",
    heroImage: "https://storage.googleapis.com/curated-assets/raf_converted.avif",
    backImage: "https://storage.googleapis.com/curated-assets/raf/rafhood_converted.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/raf/raflabel_converted.avif",
      "https://storage.googleapis.com/curated-assets/raf/rafzip_converted.avif",
      "https://storage.googleapis.com/curated-assets/raf/rafbelt_converted.avif",
      "https://storage.googleapis.com/curated-assets/raf/rafhoodup_converted.avif",
    ],
    measurements: {
      pitToPit: "21 in",
      shoulder: "18 in",
      sleeve: "24 in",
      backLength: "30 in",
    },
  },
  {
    slug: "denison-smock",
    name: "Denison Smock",
    price: "£1250",
    sold: true,
    category: "Outerwear",
    size: "L",
    description:
      "A simple knit with an easy shape and quiet presence, chosen for softness and wearability.",
    heroImage: "https://storage.googleapis.com/curated-assets/smock/Smockopen_converted.avif",
    backImage: "https://storage.googleapis.com/curated-assets/smock/Smockback.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/smock/DSCF0346_converted.avif",
      "https://storage.googleapis.com/curated-assets/smock/DSCF0347_converted.avif",
      "https://storage.googleapis.com/curated-assets/smock/Smockclose_converted.avif",
      "https://storage.googleapis.com/curated-assets/smock/DSCF0348_converted.avif",
      "https://storage.googleapis.com/curated-assets/smock/DSCF0350_converted.avif",
      "https://storage.googleapis.com/curated-assets/smock/DSCF0352_converted.avif",
    ],
    measurements: {
      pitToPit: "22 in",
      shoulder: "19 in",
      sleeve: "25 in",
      backLength: "27 in",
    },
  },
  {
    slug: "45rpm-japanese-selvedge-denim",
    name: "45RPM Japanese Selvedge Denim",
    price: "£930",
    sold: true,
    category: "Denim",
    size: "34",
    description:
      "Tailored vintage trousers with a relaxed line and a fabric that works across seasons.",
    heroImage: "https://storage.googleapis.com/curated-assets/45RPM1/Front45rpm.avif",
    backImage: "https://storage.googleapis.com/curated-assets/45RPM1/back45rpm.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-9_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-8_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-6_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-5_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-4_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-3_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-2_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-22_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-21_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-20_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-19_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-18_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-17_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-16_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-15_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-14_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-13_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-12_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-11_converted.avif",
      "https://storage.googleapis.com/curated-assets/45RPM1/45RPM1-10_converted.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
  },
  {
    slug: "KAPITAL-selvedge-denim",
    name: "KAPITAL Selvedge Denim",
    price: "£980",
    sold: true,
    category: "Denim",
    size: "32",
    description:
      "Tailored vintage trousers with a relaxed line and a fabric that works across seasons.",
    heroImage: "https://storage.googleapis.com/curated-assets/KAPITAL/frontKAPTIAL-1_converted.avif",
    backImage: "https://storage.googleapis.com/curated-assets/KAPITAL/backKAPTIAL-2_converted.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-9_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-8_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-6_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-5_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-4_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-3_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-16_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-15_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-14_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-13_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-12_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-11_converted.avif",
      "https://storage.googleapis.com/curated-assets/KAPITAL/KAPTIAL-10_converted.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
  },
  {
    slug: "evisu-selvedge-denim",
    name: "Evisu Selvedge Denim",
    price: "£980",
    sold: true,
    category: "Denim",
    size: "32",
    description:
      "Tailored vintage trousers with a relaxed line and a fabric that works across seasons.",
    heroImage: "https://storage.googleapis.com/curated-assets/EVISU/frontEVISU-1_converted.avif",
    backImage: "https://storage.googleapis.com/curated-assets/EVISU/backEVISU-2_converted.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-9_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-8_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-7_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-6_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-5_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-4_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-3_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-19_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-18_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-17_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-16_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-15_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-14_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-13_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-12_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-11_converted.avif",
      "https://storage.googleapis.com/curated-assets/EVISU/EVISU-10_converted.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
  },
  {
    slug: "brown-tailored-trousers",
    name: "Brown Tailored Trousers",
    price: "£82",
    sold: true,
    category: "Trousers",
    size: "32",
    description:
      "Tailored vintage trousers with a relaxed line and a fabric that works across seasons.",
    heroImage: "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
    backImage: "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
  },
  {
    slug: "brown-tailored-trousers",
    name: "Brown Tailored Trousers",
    price: "£82",
    sold: true,
    category: "Trousers",
    size: "32",
    description:
      "Tailored vintage trousers with a relaxed line and a fabric that works across seasons.",
    heroImage: "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
    backImage: "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
  },
  {
    slug: "brown-tailored-trousers",
    name: "Brown Tailored Trousers",
    price: "£82",
    sold: true,
    category: "Trousers",
    size: "32",
    description:
      "Tailored vintage trousers with a relaxed line and a fabric that works across seasons.",
    heroImage: "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
    backImage: "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
  },
  {
    slug: "brown-tailored-trousers",
    name: "Brown Tailored Trousers",
    price: "£82",
    sold: true,
    category: "Trousers",
    size: "32",
    description:
      "Tailored vintage trousers with a relaxed line and a fabric that works across seasons.",
    heroImage: "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
    backImage: "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
  },
  {
    slug: "brown-tailored-trousers",
    name: "Brown Tailored Trousers",
    price: "£82",
    sold: true,
    category: "Trousers",
    size: "32",
    description:
      "Tailored vintage trousers with a relaxed line and a fabric that works across seasons.",
    heroImage: "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
    backImage: "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
    detailImages: [
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
      "https://storage.googleapis.com/curated-assets/_DSF4694.avif",
    ],
    measurements: {
      waist: "32 in",
      rise: "12 in",
      inseam: "30 in",
      hem: "8 in",
    },
  },
];