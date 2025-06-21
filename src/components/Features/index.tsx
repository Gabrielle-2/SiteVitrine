// src/components/Features/index.tsx
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-dark"> {/* Added dark mode bg */}
        <div className="container mx-auto px-6">
          <SectionTitle
            title="Nos Services de Mobilité"
            paragraph="Découvrez des solutions de localisation et de suivi adaptées à vos besoins à Yaoundé et dans tout le Cameroun."
            center
            // Add dark mode specific text colors to SectionTitle if it doesn't handle them internally
            // You might need to pass dark mode props if SectionTitle doesn't adapt automatically
            // For now, assuming SectionTitle handles its own dark mode colors, or relies on parent inheritance
            // If SectionTitle text remains light in dark mode, you might need to adjust it directly or pass a prop.
            // Example: <SectionTitle ... titleClassName="text-gray-800 dark:text-white" paragraphClassName="text-gray-600 dark:text-body-color-dark" />
          />

          <div className="grid md:grid-cols-3 gap-8">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;