// Single-image collages (no before/after split)
export type Collage = {
  image: string;
  caption?: string;
  consent?: boolean;
  fit?: "cover" | "contain";
  focusClass?: string; // e.g., "object-center" | "object-left" | "object-right"
};

const transformations: Collage[] = [
  {
    image: "/images/clients/before-after/client1_front_combo.jpg",
    caption: "Client #1 — 5 months",
    fit: "cover",
  },
  {
    image: "/images/clients/before-after/client2_front_combo.jpg",
    caption: "Client #2 — 2 months",
    fit: "cover",
    focusClass: "object-center",
  },
  {
    image: "/images/clients/before-after/client3_front_combo.jpg",
    caption: "Jordan S. — 1 month",
    fit: "cover",
  },
];

export default transformations;
