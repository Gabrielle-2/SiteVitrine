'use client'; // Garder 'use client' car c'est une bonne pratique pour les composants interactifs, même avec un simple lien

import React from 'react';

const SwaggerLinkSection: React.FC = () => {
  // L'URL de Swagger est bien placée ici.
  const swaggerUrl = "https://gest-geospatiale.onrender.com/swagger-ui.html";

  return (
    <section id="api-docs" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-dark">
      <div className="container mx-auto px-6 max-w-7xl text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          Documentation de l&apos;API NAVIGOO {/* Correction ici : ' devient &apos; */}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-body-color-dark max-w-3xl mx-auto mb-12">
          Explorez en détail les capacités de notre API géospatiale via notre documentation interactive Swagger UI.
          Vous y trouverez toutes les informations nécessaires pour intégrer nos services.
        </p>

        <a
          href={swaggerUrl}
          target="_blank" // Ouvre le lien dans un nouvel onglet
          rel="noopener noreferrer" // Bonne pratique de sécurité pour target="_blank"
          className="inline-flex items-center justify-center
                     rounded-full bg-blue-600 px-10 py-4 text-center text-base font-semibold text-white
                     shadow-lg hover:bg-blue-700 transition-all duration-300
                     dark:bg-blue-700 dark:hover:bg-blue-600 dark:shadow-blue-900/50"
        >
          Accéder à la Documentation API
          {/* Optionnel: Ajouter une icône de lien externe */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-3" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>

        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          La documentation s&apos;ouvrira dans un nouvel onglet de votre navigateur. {/* Correction ici : ' devient &apos; */}
        </p>
      </div>
    </section>
  );
};

export default SwaggerLinkSection;