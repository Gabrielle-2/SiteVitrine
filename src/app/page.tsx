// src/app/page.tsx
import { Metadata } from "next";
import ScrollUp from "@/components/Common/ScrollUp";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import SectionTitle from "@/components/Common/SectionTitle"; // Assure-toi que SectionTitle est importé

export const metadata: Metadata = {
  title: "NAVIGOO - Solutions de Mobilité Géospatiale pour l'Afrique",
  description: "Découvrez NAVIGOO : Géolocalisation, suivi en temps réel et optimisation d'itinéraires pour entreprises et particuliers au Cameroun et en Afrique.",
  keywords: "géolocalisation Cameroun, suivi GPS Yaoundé, API mobilité Afrique, optimisation itinéraires, transport Cameroun, navigation API",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />

      
      <Features /> {/* Le contenu réel des fonctionnalités */}
     
      <Brands />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}