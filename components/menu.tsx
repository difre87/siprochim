"use client";
import { menuAlimentaire, menuDetergent } from "@/data";
import Link from "next/link";
import { useState } from "react";

interface MenuSiteProps {
  page: string;
  isPage?: boolean;
}

interface Bubble {
  id: number;
  x: number;
  y: number;
  menuIndex: number; // Associer la bulle à un élément de menu spécifique
}

const MenuSite = ({ page, isPage }: MenuSiteProps) => {
  const menu = page == "alimentaire" ? menuAlimentaire : menuDetergent;
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, menuIndex: number) => {
    // Créer des bulles seulement pour les pages détergent
    if (page === "detergent") {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const newBubble: Bubble = {
        id: Date.now(),
        x: x,
        y: y,
        menuIndex: menuIndex
      };

      setBubbles(prev => [...prev, newBubble]);

      // Supprimer la bulle après l'animation
      setTimeout(() => {
        setBubbles(prev => prev.filter(bubble => bubble.id !== newBubble.id));
      }, 2000);
    }
  };

  return (
    <div className="md:flex md:gap-x-8 justify-center h-full items-center sm:hidden">
      {menu.map((menuItem, index) =>
        menuItem.link ? (
          <Link
            key={index}
            href={menuItem.link}
            className={`font-semibold text-indigo-900 text-sm py-5 px-3 relative overflow-hidden ${
              isPage ? "text-white" : "text-indigo-900"
            }`}
            onClick={(e) => handleClick(e, index)}
          >
            {menuItem.title}
            {/* Bulles de mousse de lessive uniquement pour les pages détergent */}
            {page === "detergent" && bubbles
              .filter(bubble => bubble.menuIndex === index)
              .map(bubble => (
                <div
                  key={bubble.id}
                  className="absolute pointer-events-none"
                  style={{
                    left: bubble.x,
                    top: bubble.y,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Mousse principale */}
                  <div className="soap-foam-main">
                    <div className="w-8 h-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-full opacity-90 shadow-lg border border-blue-200"></div>
                    <div className="w-5 h-5 bg-gradient-to-br from-white to-blue-50 rounded-full absolute top-1 left-1 opacity-80"></div>
                    <div className="w-3 h-3 bg-white rounded-full absolute top-2 left-2 opacity-70"></div>
                  </div>

                  {/* Petites bulles de mousse autour */}
                  <div className="soap-foam-small absolute -top-2 -left-2">
                    <div className="w-3 h-3 bg-gradient-to-br from-white to-blue-50 rounded-full opacity-70"></div>
                  </div>
                  <div className="soap-foam-small absolute -top-1 right-1">
                    <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                  </div>
                  <div className="soap-foam-small absolute bottom-1 -left-1">
                    <div className="w-2 h-2 bg-gradient-to-br from-white to-blue-50 rounded-full opacity-50"></div>
                  </div>
                  <div className="soap-foam-small absolute -bottom-2 right-2">
                    <div className="w-1 h-1 bg-white rounded-full opacity-40"></div>
                  </div>
                </div>
              ))}
          </Link>
        ) : null
      )}
      <Link
        href={page == "alimentaire" ? "/detergent" : "/alimentaire"}
        className={`py-2 px-4 rounded-full font-bold uppercase text-white ${
          isPage ? "bg-[#0074b2]" : "bg-red-800"
        }`}
      >
        {page == "alimentaire" ? "Détergents" : "Alimentaires"}
      </Link>
    </div>
  );
};

export default MenuSite;