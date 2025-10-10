// src/data/transformations.ts

// Minimal type used by Results
export type Collage = {
  image: string;
  caption?: string;
  fit?: "cover" | "contain";
  focusClass?: string; // e.g., "object-center"
};

// Keep images in /public/images/clients/...
const transformations: Collage[] = [
  {
    image: "/images/clients/cliente-1.jpeg",
    caption: "Brandon G. Active Duty San Diego CA",
    fit: "cover",
  },
  {
    image: "/images/clients/cliente-2.jpeg",
    caption: "Kendrick G. Navy Veteran Bronx NY",
    fit: "cover",
    focusClass: "object-center",
  },
  {
    image: "/images/clients/cliente-3.png",
    caption: "Christian L. Navy Reserves Portland OR",
    fit: "cover",
  },
];

export default transformations;
