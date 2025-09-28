// src/data/transformations.ts

/**
 * Type definition for client transformation collages
 * These are single images showing before/after combinations
 */
export type Collage = {
  image: string;                              // Path to the transformation image
  caption?: string;                           // Optional caption (e.g., "Client #1 — 5 months")
  consent?: boolean;                          // Optional client consent flag for displaying
  fit?: "cover" | "contain";                  // How the image should fit in its container
  focusClass?: string;                        // Tailwind class for image positioning (e.g., "object-center")
};

/**
 * Array of client transformation images to display in the Results section
 * Each entry represents a client's progress with timeframe
 */
const transformations: Collage[] = [
  { 
    image: "/images/clients/cliente-1.jpeg",  // First client transformation
    caption: "Client #1 — 5 months",          // 5-month progress
    fit: "cover"                              // Fill container completely
  },
  { 
    image: "/images/clients/cliente-2.jpeg",  // Second client transformation
    caption: "Client #2 — 2 months",          // 2-month progress
    fit: "cover",                             // Fill container completely
    focusClass: "object-center"               // Center the image focus point
  },
  { 
    image: "/images/clients/cliente-3.png",   // Third client transformation (PNG format)
    caption: "Client #3 — 1 month",           // 1-month progress
    fit: "cover"                              // Fill container completely
  },
];

export default transformations;