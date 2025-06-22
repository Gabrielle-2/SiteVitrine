import { Menu } from "@/types/menu"; // Keep this import if you have a Menu type defined

const menuData: Menu[] = [
  {
    id: 1,
    title: "Accueil",
    path: "/", // Correct: Links to the homepage
    newTab: false,
  },
  {
    id: 2,
    title: "Nos services",
    path: "/#features", // Correct: Links to the 'features' section on the homepage
    newTab: false,
  },
  {
    id: 3,
    title: "Documentation",
    path: "/#api-docs", // Correct: Links to the 'api-docs' section (SwaggerLinkSection) on the homepage
    newTab: false,
  },
  {
    id: 4,
    title: "Notre équipe", // Corrected title for Testimonials section
    path: "/#testimonials", // Correct: Links to the 'testimonials' section on the homepage
    newTab: false,
  },
  //{
    //id: 5,
    //title: "Nos tarifs", // Corrected title for Pricing section
    //path: "/#pricing", // Correct: Links to the 'pricing' section on the homepage
    //newTab: false,
  //},
  
  {
    id: 6, // Unique ID
    title: "Contact",
    path: "/#contact", // Correct: Links to the 'contact' section on the homepage
    newTab: false,
  },
  
];

export default menuData;