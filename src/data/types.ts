export type Plan = {
  title: string;
  price: number;
  period: string; // e.g., "one-time", "per month"
  features: string[];
  cta: string;
  link: string;
  highlight?: boolean;
};

export type Testimonial = {
  quote: string;
  name: string;
  tag?: string;
};

export type Transformation = {
  before: string; // path to image in /public
  after: string;  // path to image in /public
  caption?: string;
  consent?: boolean;
};

export type Faq = {
  q: string;
  a: string;
};

export type Coach = {
  name: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  instagram: string;
  highlights: string[];
};
export type Collage = {
  image: string;
  caption?: string;
  consent?: boolean;
  fit?: "cover" | "contain";
  focusClass?: string; // e.g., "object-center" | "object-left" | "object-right"
};
