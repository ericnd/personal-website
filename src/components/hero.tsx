"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { BadgeCheckIcon } from "lucide-react";
import { data } from "../constants";
import SpinningTetrahedron from "./tetra";
import { motion } from "framer-motion";

export function Hero() {
  const { avatar, about, links } = data;

  return (
    <>
      <motion.div
        className="flex flex-col items-center justify-center gap-8 w-full min-h-[80vh]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 1 },
          },
        }}
      >
        {/* ✅ Spinning Tetrahedron with No Overlap */}
        <motion.div
          className="flex justify-center min-h-[200px]" // 🏗️ Reserves space to avoid overlap
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            delay: 0.2,
            type: "spring",
            stiffness: 120,
          }}
        >
          <SpinningTetrahedron />
        </motion.div>

        {/* ✅ Name Section */}
        <motion.div
          className="flex items-center justify-center flex-row gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="dark:text-neutral-100 text-neutral-900 text-4xl font-bold text-balance text-center">
            Eric Do
          </h1>
        </motion.div>

        {/* ✅ About Section */}
        <motion.div
          className="flex flex-col font-mono gap-4 dark:text-neutral-200 text-neutral-800 text-pretty text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2>{about.title}</h2>
          <h3>{about.description}</h3>
        </motion.div>

        {/* ✅ Links with Staggered Animation */}
        <motion.nav
          className="flex gap-x-4 pt-4 justify-center min-h-[60px]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.7,
              },
            },
          }}
        >
          {links.map((link) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size={null}
                    key={link.title}
                    className="p-2 shadow rounded-lg"
                    asChild
                  >
                    <a
                      key={link.title}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.title}
                      className="flex justify-center items-center md:gap-2"
                    >
                      <link.icon className="size-6 stroke-[1.5]" />
                      <p className="hidden md:block">{link.title}</p>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="md:hidden">
                  <p>{link.title}</p>
                </TooltipContent>
              </Tooltip>
            </motion.div>
          ))}
        </motion.nav>
      </motion.div>
    </>
  );
}
