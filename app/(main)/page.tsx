"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SpinningTetrahedron from "./../(components)/tetra";

const typewriterText = "Eric Do";
const subtitleText = "computer science @ unsw";
const navbarLinks = ["about", "work", "contact"];

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const [subtitleTyped, setSubtitleTyped] = useState("");
  const [navLinksTyped, setNavLinksTyped] = useState(Array(navbarLinks.length).fill(""));

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < typewriterText.length) {
        setTypedText(prev => prev + typewriterText[i]);
        i++;
      } else {
        clearInterval(typeInterval);
        let j = 0;
        const subtitleInterval = setInterval(() => {
          if (j < subtitleText.length) {
            setSubtitleTyped(prev => prev + subtitleText[j]);
            j++;
          } else {
            clearInterval(subtitleInterval);
            let navIndex = 0;
  
            const typeNavWord = () => {
              if (navIndex >= navbarLinks.length) return;
  
              const word = navbarLinks[navIndex];
              let k = 0;
  
              const wordInterval = setInterval(() => {
                if (k < word.length) {
                  setNavLinksTyped(prev => {
                    const newLinks = [...prev];
                    newLinks[navIndex] = (newLinks[navIndex] || "") + word[k]; // Ensure valid string
                    return newLinks;
                  });
                  k++;
                } else {
                  clearInterval(wordInterval);
                  navIndex++; // Move to the next word AFTER clearing interval
                  setTimeout(typeNavWord, 200); // Add delay between words
                }
              }, 50); // Typing speed per letter
            };
  
            typeNavWord();
          }
        }, 50);
      }
    }, 100);
  
    return () => {
      clearInterval(typeInterval);
      clearInterval(subtitleInterval);
    };
  }, []);
  
  
  

  return (
    <div className="relative w-screen flex flex-col">
      {/* Sticky Navbar */}
      <div className="fixed top-4 right-4 text-white p-2 rounded-lg z-50">
        <nav>
          <ul className="flex sm:flex-row sm:space-x-8 flex-col sm:space-y-0 space-y-2 text-right">
            {navLinksTyped.map((text, index) => (
              <li key={index}>
                <a href={`#${navbarLinks[index]}`} className="hover:text-orange-500 focus:outline-none">
                  {text || " "}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Landing Page */}
      <motion.section
        className="h-screen flex flex-col justify-center relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
      >
        <div className="absolute top-4 left-4 text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{typedText}</h1>
          <h2 className="text-sm sm:text-base md:text-lg">{subtitleTyped}</h2>
        </div>
        <div className="flex items-center justify-center h-full">
          <SpinningTetrahedron />
        </div>
      </motion.section>

      {/* Infinite scrolling sections */}
      {navbarLinks.map((section, index) => (
        <motion.section
          key={index}
          id={section}
          className="h-screen flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold">{section.charAt(0).toUpperCase() + section.slice(1)} Section</h2>
        </motion.section>
      ))}
    </div>
  );
}
