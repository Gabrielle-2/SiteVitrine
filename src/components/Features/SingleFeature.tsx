// SingleFeature.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Feature } from './featuresData';

const SingleFeature: React.FC<{ feature: Feature }> = ({ feature }) => {
  const {
    icon,
    title,
    subtitle,
    paragraph,
    link,
    bgColorClass,
    iconBgClass,
    textColorClass,
    buttonBgClass,
    buttonHoverBgClass,
    // NEW: Destructure dark mode classes
    darkBgColorClass,
    darkIconBgClass,
    darkTextColorClass,
    darkButtonBgClass,
    darkButtonHoverBgClass,
  } = feature;

  return (
    <div className={`service-card p-8 rounded-xl shadow-md hover:shadow-xl transition flex flex-col
      ${bgColorClass} ${darkBgColorClass}
      dark:shadow-xl dark:hover:shadow-2xl dark:shadow-blue-900/50`}> {/* Card background and shadows */}
      <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 self-start
        ${iconBgClass} ${darkIconBgClass}`}> {/* Icon background */}
        <FontAwesomeIcon icon={icon} className={`text-3xl
          ${textColorClass} ${darkTextColorClass}`} /> {/* Icon color */}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white"> {/* Title color */}
        {title}
      </h3>
      <p className={`text-sm mb-3 font-medium
        ${textColorClass} ${darkTextColorClass}`}> {/* Subtitle color */}
        {subtitle}
      </p>
      <p className="mb-4 flex-grow text-gray-600 dark:text-body-color-dark"> {/* Paragraph color */}
        {paragraph}
      </p>
      <a href={link} className={`mt-auto inline-block text-center px-6 py-3 rounded-lg font-semibold transition
        ${buttonBgClass} ${buttonHoverBgClass}
        ${darkButtonBgClass} ${darkButtonHoverBgClass}
        text-white`}> {/* Button colors */}
        En savoir plus
      </a>
    </div>
  );
};

export default SingleFeature;