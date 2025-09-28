// src/data/transformations.ts
export type Collage = {
  image: string;
  caption?: string;
  consent?: boolean;
  fit?: "cover" | "contain";
  focusClass?: string;
};

const transformations: Collage[] = [
  { 
    image: "/images/clients/cliente-1.jpeg",
    caption: "Client #1 — 5 months", 
    fit: "cover" 
  },
  { 
    image: "/images/clients/cliente-2.jpeg",
    caption: "Client #2 — 2 months", 
    fit: "cover", 
    focusClass: "object-center" 
  },
  { 
    image: "/images/clients/cliente-3.png",
    caption: "Client #3 — 1 month",
    fit: "cover" 
  },
];

export default transformations;