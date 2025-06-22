import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react'; // Make sure lucide-react is installed

// Interface for a team member
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

// Data for the team members
const teamMembers: TeamMember[] = [
  {
    name: "Pr. Dr. Eng. Thomas DJOTIO NDIE",
    role: "Encadrant",
    bio: "",
    avatarColor: "bg-gradient-to-br from-gray-700 to-gray-900",
    initials: "TD",
    social: {
      linkedin: "#",
    }
  },
  {
    name: "NGUETCHUISSI Brunel Landry",
    role: "Chef de groupe",
    bio: "22P584",
    avatarColor: "bg-gradient-to-br from-pink-400 to-purple-500",
    initials: "NB",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "HEUMI BIATEU Arthur",
    role: "Membre",
    bio: "22P267",
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
    bio: "22P582",
    avatarColor: "bg-gradient-to-br from-green-400 to-teal-500",
    initials: "NA",
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#"
    }
  },
  {
    name: "NANA NDOUNDAM Gabrielle",
    role: "Membre",
    bio: "22P482",
    avatarColor: "bg-gradient-to-br from-orange-400 to-red-500",
    initials: "NN",
    social: {
      linkedin: "#",
      github: "#"
    }
  },
  {
    name: "NEPESTOUN MATHIS",
    role: "Membre",
    bio: "24P759",
    avatarColor: "bg-gradient-to-br from-yellow-400 to-orange-500",
    initials: "NP",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const Team: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Notre équipe</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 ${member.avatarColor}`}>
                {member.initials}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
              <p className="text-md text-gray-600 dark:text-gray-400 mb-2">{member.role}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{member.bio}</p>
              <div className="flex space-x-4">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400">
                    <Linkedin size={20} />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 dark:hover:text-blue-300">
                    <Twitter size={20} />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
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

export default Team; // Exporting as Team