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
      question: "L'API NAVIGOO couvre-t-elle toute le Cameroun ?", 
      answer: "Actuellement, notre API se limite à la ville de Yaoundé"
    },
    {
      question: "Puis-je utiliser l'API pour une application mobile ?",
      answer: "Absolument ! Notre API REST est compatible avec toutes les plateformes."
    },
    {
      question: "Comment gérez-vous la sécurité des données ?",
      answer: "Toutes les communications avec notre API sont chiffrées via HTTPS/TLS. Nous ne stockons aucune donnée personnelle sensible et respectons le RGPD."
    },
    {
      question: "Y a-t-il une documentation technique détaillée ?",
      answer: "Non, pas pour le moment"
    },
    {
      question: "Quel support est disponible ?",
      answer: "Nous offrons un support par email pour tous les utilisateurs."
    },
    {
      question: "L'API fonctionne-t-elle hors ligne ?", 
      answer: "L&apos;API NAVIGOO nécessite une connexion internet pour fonctionner car elle fournit des données en temps réel." // Remplacé ' par &apos;
    },
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
            Trouvez rapidement les réponses aux questions les plus courantes sur l&apos;API NAVIGOO. {/* Remplacé ' par &apos; */}
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
        </div>
      </div>
    </section>
  );
};

export default FAQ;