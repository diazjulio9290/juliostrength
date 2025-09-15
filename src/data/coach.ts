
export type Coach = {
  name: string;
  tagline: string;
  location: string;
  years: number;
  phone: string;
  email: string;
  instagram: string;
  highlights: string[];
};

const coach: Coach = {
  name: "Julio Diaz Jr (Coach Julio)",
  tagline: "Build muscle • Lose fat • Lift smarter",
  location: "Portland, OR",
  years: 3,
  phone: "971-406-8993",
  email: "diazmoses99@gmail.com",
  instagram: "https://www.instagram.com/juliostrength/?hl=en",
  highlights: [
    "4 years coaching experience",
    "Weekly physique check-ins & form reviews",
    "Custom training + nutrition + habit tracking",
  ],
};

export default coach;
