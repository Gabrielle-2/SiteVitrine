// src/components/Contact.tsx
'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: faEnvelope,
      title: "Email",
      content: "navigooyaounde@gmail.com",
      link: "mailto:navigooyaounde@gmail.com"
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
      content: "Melen, Yaoundé, Cameroun",
      link: "https://maps.app.goo.gl/exempleDeLienGoogleMaps"
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-dark">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
            Contactez-nous
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-body-color-dark max-w-3xl mx-auto">
            Nous sommes là pour vous aider à concrétiser vos idées de mobilité géospatiale.
            N'hésitez pas à nous contacter pour toutes vos questions ou demandes d'informations.
          </p>
        </div>

        <div className="flex justify-center">
          
          {/* Bloc d'informations de contact centré */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 md:p-10 rounded-2xl shadow-xl max-w-2xl w-full">
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-blue-400 pb-4">Informations de Contact</h3>
            <div className="space-y-7">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-5">
                  <div className="flex-shrink-0 bg-blue-700 p-4 rounded-full shadow-md">
                    <FontAwesomeIcon icon={info.icon} className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-200 mb-1 text-lg">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-white hover:text-blue-200 transition text-md break-words"
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
            <div className="mt-10 p-6 bg-blue-700 rounded-lg border border-blue-600 shadow-inner">
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
        </div>
      </div>
    </section>
  );
};

export default Contact;