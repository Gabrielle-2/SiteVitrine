// src/components/Common/SectionTitle.tsx
import Link from "next/link"; // N'oubliez pas d'importer Link de Next.js

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  linkHref, // Nouvelle prop: l'URL de redirection
  linkText, // Nouvelle prop: le texte du lien/bouton
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  linkHref?: string; // Rend la prop optionnelle
  linkText?: string; // Rend la prop optionnelle
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold leading-tight! text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base leading-relaxed! text-body-color md:text-lg">
          {paragraph}
        </p>

        {/* Nouveau: Afficher un lien/bouton si linkHref et linkText sont fournis */}
        {linkHref && linkText && (
          <div className={`mt-8 ${center ? "flex justify-center" : ""}`}>
            <Link
              href={linkHref}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white
                         shadow-lg hover:bg-blue-700 transition-all duration-300
                         dark:bg-blue-700 dark:hover:bg-blue-600 dark:shadow-blue-900/50"
            >
              {linkText}
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionTitle;