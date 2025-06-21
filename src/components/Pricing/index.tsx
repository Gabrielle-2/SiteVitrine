'use client';
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle"; // Make sure path is correct
import OfferList from "./OfferList"; // Make sure path is correct
import PricingBox from "./PricingBox"; // Make sure path is correct

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true); // You'd need to decide if this toggle makes sense for your new plans

  // Define your pricing plans in a format suitable for PricingBox
  // Note: The original PricingBox has price as a number and a separate duration.
  // Your "Gratuit" and "Sur mesure" will need special handling or adjustments.
  // For simplicity, I'll adapt them as best as possible.

  const starterFeatures = [
    { text: "1 000 requêtes/mois", status: "active" },
    { text: "Données de base", status: "active" },
    { text: "Support email", status: "active" },
    { text: "Documentation complète", status: "active" },
    // You can add inactive features if needed, e.g.,
    // { text: "Analytics détaillées", status: "inactive" },
  ];

  const professionalFeatures = [
    { text: "50 000 requêtes/mois", status: "active" },
    { text: "Données avancées", status: "active" },
    { text: "Support prioritaire", status: "active" },
    { text: "Analytics détaillées", status: "active" },
    { text: "Intégrations multiples", status: "active" },
  ];

  const enterpriseFeatures = [
    { text: "Requêtes illimitées", status: "active" },
    { text: "Données personnalisées", status: "active" },
    { text: "Support dédié 24/7", status: "active" },
    { text: "SLA garantie", status: "active" },
    { text: "Intégration sur mesure", status: "active" },
    { text: "Formation équipe", status: "active" },
  ];


  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        {/* You might want to update this SectionTitle to reflect your new pricing */}
        <SectionTitle
          title="Choisissez le plan idéal pour vous"
          paragraph="Découvrez nos différentes offres, conçues pour s'adapter à la taille et aux besoins de votre entreprise."
          center
          width="665px"
        />

        {/* You need to decide if you want to keep the Monthly/Yearly toggle */}
        {/* If your plans are not monthly/yearly (like "Gratuit" and "Sur mesure"), 
            this toggle might not be relevant and could be removed.
            For "30 000 fcfa /mois", it could potentially be adapted if you had yearly pricing.
        */}
        {/*
        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Monthly
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Yearly
            </span>
          </div>
        </div>
        */}

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Starter Plan */}
          <PricingBox
            packageName="Starter"
            price="Gratuit" // Pass as string
            duration="" // Empty for free
            subtitle="Idéal pour les petits projets et le test de l'API."
          >
            {starterFeatures.map((feature, i) => (
              <OfferList key={i} text={feature.text} status={feature.status as "active" | "inactive"} />
            ))}
          </PricingBox>

          {/* Professional Plan */}
          <PricingBox
            packageName="Professional"
            price="30 000" // Price without currency or period, add currency in render if needed or adjust component
            duration="fcfa/mois" // Duration string
            subtitle="Parfait pour les applications en pleine croissance."
            // You might add a 'popular' prop if PricingBox supports it, or handle the styling in PricingBox itself
          >
            {professionalFeatures.map((feature, i) => (
              <OfferList key={i} text={feature.text} status={feature.status as "active" | "inactive"} />
            ))}
          </PricingBox>

          {/* Enterprise Plan */}
          <PricingBox
            packageName="Enterprise"
            price="Sur mesure" // Pass as string
            duration="" // Empty
            subtitle="Solutions personnalisées pour les grandes entreprises."
          >
            {enterpriseFeatures.map((feature, i) => (
              <OfferList key={i} text={feature.text} status={feature.status as "active" | "inactive"} />
            ))}
          </PricingBox>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;