// src/components/Contact.tsx
'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons'; // Ajout de faInfoCircle pour le bloc d'infos

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: faEnvelope,
      title: "Email",
      content: "contact@navigoo.com",
      link: "mailto:contact@navigoo.com"
    },
    {
      icon: faPhone,
      title: "Téléphone",
      content: "+237 6 23 45 67 89",
      link: "tel:+237623456789"
    },
    {
      icon: faMapMarkerAlt,
      title: "Adresse",
      content: "Mendong, Yaoundé, Cameroun", // Précision de l'adresse
      link: "https://maps.app.goo.gl/exempleDeLienGoogleMaps" // Remplacez par un vrai lien Google Maps si possible
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-dark"> {/* Fond BLANC pour la section principale */}
      <div className="container mx-auto px-6 max-w-7xl"> {/* Conteneur plus large */}
        
        {/* Section Titre */}
        <div className="text-center mb-16"> {/* Marge plus grande pour le titre */}
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            Parlons de votre projet
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-body-color-dark max-w-3xl mx-auto">
            Nous sommes là pour vous aider à concrétiser vos idées de mobilité géospatiale.
            Contactez notre équipe d'experts pour toutes vos questions ou demandes de démonstration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> {/* Disposition en grille pour formulaire/info */}
          
          {/* Bloc d'informations de contact */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-10 rounded-2xl shadow-xl lg:order-last"> {/* Nouveau fond dégradé pour la carte d'info */}
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-blue-400 pb-4">Informations Clés</h3>
            <div className="space-y-7"> {/* Espacement accru */}
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-5"> {/* Espacement icône/texte */}
                  <div className="flex-shrink-0 bg-blue-700 p-4 rounded-full shadow-md"> {/* Cercle d'icône plus grand et plus sombre */}
                    <FontAwesomeIcon icon={info.icon} className="text-white text-xl" /> {/* Icône blanche */}
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-1 text-lg">{info.title}</h4> {/* Titre en bleu clair */}
                    <a
                      href={info.link}
                      className="text-white hover:text-blue-200 transition text-md break-words" // Contenu blanc, hover bleu clair
                      target={info.link.startsWith('mailto:') || info.link.startsWith('tel:') || info.link.startsWith('#') ? '_self' : '_blank'}
                      rel={info.link.startsWith('mailto:') || info.link.startsWith('tel:') || info.link.startsWith('#') ? '' : 'noopener noreferrer'}
                    >
                      {info.content}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bloc d'horaires et infos supplémentaires */}
            <div className="mt-10 p-6 bg-blue-700 rounded-lg border border-blue-600 shadow-inner"> {/* Nouveau fond pour les horaires */}
              <div className="flex items-center mb-3">
                <FontAwesomeIcon icon={faInfoCircle} className="text-blue-300 text-xl mr-3" />
                <h4 className="text-lg font-bold text-blue-100">Horaires & Support</h4>
              </div>
              <p className="text-sm text-blue-200 leading-relaxed">
                <strong>Horaires d'ouverture :</strong><br />
                Lundi - Vendredi : 9h00 - 18h00 (WAT)<br />
                Nous nous efforçons de répondre à toutes les demandes sous 24h ouvrables.
              </p>
            </div>
          </div>

          {/* Formulaire de contact (un placeholder, car il n'était pas fourni) */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100 dark:border-gray-700"> {/* Fond blanc pour le formulaire */}
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Envoyez-nous un message</h3>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Nom Complet</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Votre nom"
                  className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="votre.email@example.com"
                  className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Sujet</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Sujet de votre message"
                  className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Votre Message</label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Écrivez votre message ici..."
                  className="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-semibold hover:bg-blue-700 transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-600"
              >
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;