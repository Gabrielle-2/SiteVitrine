// src/components/Header/index.tsx
'use client'; // Indique que ce composant s'exécute côté client

import Link from "next/link";
// L'import de 'next/image' n'est plus nécessaire car le logo est maintenant du texte
// import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler"; // Composant pour le basculement du thème
import menuData from "./menuData"; // Importe les données de navigation

const Header = () => {
  // État pour gérer l'ouverture/fermeture du menu mobile
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // État pour gérer la barre de navigation "sticky" (fixe au défilement)
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) { // Devient sticky après 80px de défilement
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    // Ajoute l'écouteur d'événement au chargement du composant
    window.addEventListener("scroll", handleStickyNavbar);
    // Fonction de nettoyage pour retirer l'écouteur lorsque le composant est démonté
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []); // Le tableau vide assure que l'effet ne s'exécute qu'une seule fois au montage

  // Gestionnaire de sous-menu (utile si des sous-menus sont définis dans menuData)
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => { // Type 'number' ajouté pour 'index'
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  // Hook de Next.js pour obtenir le chemin de l'URL actuelle (pour l'état actif des liens)
  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-white/80 backdrop-blur-xs transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-5 lg:py-2" : "py-8"
                } `}
                // Ferme le menu mobile si le logo est cliqué
                onClick={() => setNavbarOpen(false)}
              >
                {/* Logo TEXTE stylisé "NAVIGOO" */}
                <h1 className="text-3xl font-extrabold text-blue-600 dark:text-white sm:text-4xl lg:text-4xl xl:text-5xl tracking-tight leading-none">
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-700 text-transparent bg-clip-text">NAVIGOO</span>
                </h1>
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                {/* Bouton pour basculer le menu mobile (hamburger icon) */}
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                {/* Conteneur de navigation principal */}
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100" // Visible lorsque ouvert
                      : "invisible top-[120%] opacity-0" // Caché lorsque fermé
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-12">
                    {/* Parcours les éléments de menu définis dans menuData */}
                    {menuData.map((menuItem, index) => (
                      <li key={index} className="group relative">
                        {menuItem.path ? ( // Si l'élément a un chemin (lien direct)
                          <Link
                            href={menuItem.path}
                            onClick={() => setNavbarOpen(false)} // Ferme le menu mobile après clic sur un lien
                            className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                              // Applique le style actif si le chemin correspond à l'URL actuelle
                              usePathName === menuItem.path
                                ? "text-primary dark:text-white"
                                : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        ) : (
                          // Si l'élément n'a pas de chemin mais a des sous-menus (gestionnaire de sous-menu)
                          <>
                            <p
                              onClick={() => handleSubmenu(index)}
                              className="text-dark group-hover:text-primary flex cursor-pointer items-center justify-between py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 dark:text-white/70 dark:group-hover:text-white"
                            >
                              {menuItem.title}
                              <span className="pl-3">
                                <svg width="25" height="24" viewBox="0 0 25 24">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>
                            {/* Rend le sous-menu si menuItem.submenu existe */}
                            {menuItem.submenu && (
                                <div
                                className={`submenu dark:bg-dark relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                                    openIndex === index ? "block" : "hidden"
                                }`}
                                >
                                {menuItem.submenu.map((submenuItem, subIndex) => (
                                    <Link
                                    href={submenuItem.path}
                                    key={subIndex} // Utilise un index différent pour les clés des sous-menus
                                    className="text-dark hover:text-primary block rounded-sm py-2.5 text-sm lg:px-3 dark:text-white/70 dark:hover:text-white"
                                    >
                                    {submenuItem.title}
                                    </Link>
                                ))}
                                </div>
                            )}
                          </>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end pr-16 lg:pr-0">
                {/* Composant pour le basculement du thème clair/sombre */}
                <div>
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;