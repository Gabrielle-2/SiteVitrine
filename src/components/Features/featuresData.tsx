// featuresData.tsx
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faLocationArrow, faRoute } from '@fortawesome/free-solid-svg-icons';

export interface Feature {
  id: number;
  icon: IconDefinition;
  title: string;
  subtitle: string;
  paragraph: string;
  link: string;
  bgColorClass: string;
  iconBgClass: string;
  textColorClass: string;
  buttonBgClass: string;
  buttonHoverBgClass: string;
  // NEW: Dark mode specific classes
  darkBgColorClass: string;
  darkIconBgClass: string;
  darkTextColorClass: string;
  darkButtonBgClass: string;
  darkButtonHoverBgClass: string;
}

const featuresData: Feature[] = [
  {
    id: 1,
    icon: faLocationDot,
    title: "Géolocalisation Précise",
    subtitle: "Localisation instantanée",
    paragraph: "Identifiez votre position exacte ou celle de vos véhicules en temps réel pour une meilleure coordination.",
    link: "#contact",
    bgColorClass: "bg-blue-50",
    iconBgClass: "bg-blue-100",
    textColorClass: "text-blue-600",
    buttonBgClass: "bg-blue-600",
    buttonHoverBgClass: "hover:bg-blue-700",
    // Dark mode versions
    darkBgColorClass: "dark:bg-blue-950",       // A very dark blue for the card background
    darkIconBgClass: "dark:bg-blue-800",        // A slightly lighter dark blue for icon background
    darkTextColorClass: "dark:text-blue-400",   // Lighter blue for subtitle and icon
    darkButtonBgClass: "dark:bg-blue-700",      // Darker blue for button in dark mode
    darkButtonHoverBgClass: "dark:hover:bg-blue-600", // Darker hover state
  },
  {
    id: 2,
    icon: faLocationArrow,
    title: "Suivi en Temps Réel",
    subtitle: "Tracking GPS en direct",
    paragraph: "Suivez en continu le mouvement de vos véhicules ou appareils pour une sécurité accrue et une gestion optimisée.",
    link: "#contact",
    bgColorClass: "bg-green-50",
    iconBgClass: "bg-green-100",
    textColorClass: "text-green-600",
    buttonBgClass: "bg-green-600",
    buttonHoverBgClass: "hover:bg-green-700",
    // Dark mode versions
    darkBgColorClass: "dark:bg-green-950",
    darkIconBgClass: "dark:bg-green-800",
    darkTextColorClass: "dark:text-green-400",
    darkButtonBgClass: "dark:bg-green-700",
    darkButtonHoverBgClass: "dark:hover:bg-green-600",
  },
  {
    id: 3,
    icon: faRoute,
    title: "Tracé d'Itinéraires",
    subtitle: "Optimisation de trajets",
    paragraph: "Créez les meilleurs itinéraires, visualisez les trajets parcourus et analysez l'historique pour améliorer l'efficacité.",
    link: "#contact",
    bgColorClass: "bg-orange-50",
    iconBgClass: "bg-orange-100",
    textColorClass: "text-orange-600",
    buttonBgClass: "bg-orange-600",
    buttonHoverBgClass: "hover:bg-orange-700",
    // Dark mode versions
    darkBgColorClass: "dark:bg-orange-950",
    darkIconBgClass: "dark:bg-orange-800",
    darkTextColorClass: "dark:text-orange-400",
    darkButtonBgClass: "dark:bg-orange-700",
    darkButtonHoverBgClass: "dark:hover:bg-orange-600",
  },
];

export default featuresData;