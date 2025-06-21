// src/components/Testimonials/index.tsx (or Testimonials.tsx if that's its name)

import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react'; // Make sure lucide-react is installed

// You might want to move this interface and data to a separate file like `teamData.ts`
// but for now, we'll keep it here as you requested
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatarColor: string;
  initials: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "NGUETCHUISSI Brunel Landry",
    role: "Chef de groupe",
    bio: "22P.", // Assuming '22P' refers to their cohort/promo
    avatarColor: "bg-gradient-to-br from-pink-400 to-purple-500",
    initials: "NB",
    social: {
      linkedin: "#", // Replace with actual links
      twitter: "#"   // Replace with actual links
    }
  },
  {
    name: "HEUMI BIATEU Arthur",
    role: "Membre",
    bio: "22P",
    avatarColor: "bg-gradient-to-br from-blue-400 to-indigo-500",
    initials: "HB",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "NKOLO ATANGANA Stacy",
    role: "Membre",
    bio: "22P",
    avatarColor: "bg-gradient-to-br from-green-400 to-teal-500",
    initials: "NA",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "NANA NDOUNDAM Gabrielle Chekinael",
    role: "Membre",
    bio: "22P",
    avatarColor: "bg-gradient-to-br from-orange-400 to-red-500",
    initials: "NN",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "NEPESTOUN MATHIS",
    role: "Membre", // Corrected typo from "Memebre"
    bio: "25P",
    avatarColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
    initials: "EM", // Changed from ER to EM for "Epestoim Mathis"
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

// Reusable avatar component
const VectorAvatar = ({ initials, colorClass }: { initials: string; colorClass: string }) => (
  <div className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl ${colorClass} shadow-lg`}>
    {initials}
  </div>
);

// This is your main "Testimonials" component, but it renders the Team data
const Testimonials: React.FC = () => { // Renamed from Team to Testimonials
  return (
    <section id="team" className="py-16 bg-white dark:bg-gray-dark"> {/* Added dark mode bg */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Notre Équipe</h2> {/* Added dark mode text */}
          <p className="text-xl text-gray-600 dark:text-body-color-dark max-w-2xl mx-auto"> {/* Added dark mode text */}
            Une équipe passionnée d'experts en géolocalisation, dédiée à créer les meilleures solutions pour les développeurs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"> {/* Added dark mode bg */}
              <div className="mb-6">
                <VectorAvatar initials={member.initials} colorClass={member.avatarColor} />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{member.name}</h3> {/* Added dark mode text */}
                <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-body-color-dark text-sm leading-relaxed">{member.bio}</p> {/* Added dark mode text */}
              </div>

              <div className="flex justify-center space-x-4">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors duration-200 p-2 rounded-full hover:bg-blue-50">
                    <Linkedin size={20} />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors duration-200 p-2 rounded-full hover:bg-blue-50">
                    <Twitter size={20} />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} className="text-gray-400 hover:text-gray-800 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-300"> {/* Added dark mode hover bg/text */}
                    <Github size={20} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; // Exporting as Testimonials