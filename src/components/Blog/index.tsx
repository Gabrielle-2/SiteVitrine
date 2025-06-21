// src/components/Blog/index.tsx
'use client';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number): void => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const faqData: FAQItem[] = [
    {
      question: "Comment obtenir une clé API ?",
      answer: "Pour obtenir votre clé API, inscrivez-vous gratuitement sur notre plateforme. Une fois votre compte créé, vous recevrez immédiatement votre clé API dans votre tableau de bord. Le plan gratuit vous donne accès à 1 000 requêtes par mois."
    },
    {
      question: "Quelles sont les limites du plan gratuit ?",
      answer: "Le plan gratuit inclut 1 000 requêtes par mois, l'accès aux données de base, le support par email et la documentation complète. Il est parfait pour tester l'API et développer des prototypes."
    },
    {
      question: "L'API NAVIGOO couvre-t-elle toute l'Afrique ?",
      answer: "Actuellement, notre API se concentre principalement sur les grandes villes d'Afrique centrale et occidentale, avec une couverture particulièrement détaillée au Cameroun. Nous étendons progressivement notre couverture géographique selon la demande."
    },
    {
      question: "Comment l'API gère-t-elle les données en temps réel ?",
      answer: "Notre API utilise des données mises à jour en continu grâce à notre réseau de chauffeurs partenaires et nos algorithmes d'analyse du trafic. Les informations de trafic et les positions des véhicules sont actualisées toutes les 30 secondes."
    },
    {
      question: "Puis-je utiliser l'API pour une application mobile ?",
      answer: "Absolument ! Notre API REST est compatible avec toutes les plateformes : applications mobiles iOS/Android, applications web, systèmes backend. Nous fournissons des exemples de code pour les principales technologies."
    },
    {
      question: "Quels types de véhicules sont supportés ?",
      answer: "L'API NAVIGOO supporte plusieurs types de véhicules : taxis urbains, motos-taxis, véhicules de transport en commun, et véhicules privés. Chaque type a ses propres tarifs et caractéristiques de navigation."
    },
    {
      question: "Comment gérez-vous la sécurité des données ?",
      answer: "Toutes les communications avec notre API sont chiffrées via HTTPS/TLS. Nous ne stockons aucune donnée personnelle sensible et respectons le RGPD. Vos clés API sont sécurisées et peuvent être régénérées à tout moment."
    },
    {
      question: "Y a-t-il une documentation technique détaillée ?",
      answer: "Oui, nous fournissons une documentation complète avec des exemples de code dans plusieurs langages (JavaScript, Python, PHP, etc.), des guides d'intégration et des cas d'usage. Un bac à sable interactif est également disponible."
    },
    {
      question: "Quel support est disponible ?",
      answer: "Nous offrons un support par email pour tous les utilisateurs, un support prioritaire pour les clients Professional, et un support dédié 24/7 pour les clients Enterprise. Notre équipe technique répond généralement sous 24h."
    },
    {
      question: "Puis-je migrer d'un plan à un autre ?",
      answer: "Oui, vous pouvez changer de plan à tout moment depuis votre tableau de bord. La migration est immédiate et vous ne payez que la différence au prorata. Aucune interruption de service n'est à prévoir."
    },
    {
      question: "L'API fonctionne-t-elle hors ligne ?",
      answer: "L'API NAVIGOO nécessite une connexion internet pour fonctionner car elle fournit des données en temps réel. Cependant, vous pouvez mettre en cache certaines données (comme les points d'intérêt) pour une utilisation hors ligne limitée."
    },
    {
      question: "Comment sont calculés les tarifs des trajets ?",
      answer: "Les tarifs sont calculés selon plusieurs facteurs : distance, durée estimée, type de véhicule, conditions de trafic, et tarifs locaux. Notre algorithme prend en compte les spécificités de chaque ville africaine pour des estimations précises."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white dark:bg-gray-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FontAwesomeIcon icon={faQuestionCircle} className="text-4xl text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Questions Fréquentes</h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-body-color-dark max-w-2xl mx-auto">
            Trouvez rapidement les réponses aux questions les plus courantes sur l'API NAVIGOO.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-2xl"
                  aria-expanded={openItems.includes(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <FontAwesomeIcon
                      icon={openItems.includes(index) ? faChevronUp : faChevronDown}
                      className={`text-blue-600 transition-transform duration-200 ${
                        openItems.includes(index) ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>

                {openItems.includes(index) && (
                  <div className="px-6 pb-5 pt-0">
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="text-gray-600 dark:text-body-color-dark leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 dark:bg-blue-900 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Vous ne trouvez pas votre réponse ?
              </h3>
              <p className="text-gray-600 dark:text-body-color-dark mb-6">
                Notre équipe support est là pour vous aider avec toutes vos questions techniques ou commerciales.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Nous contacter
                </a>
                <a
                  href="#api-docs"
                  className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors dark:bg-gray-700 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-600"
                >
                  Voir la documentation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;