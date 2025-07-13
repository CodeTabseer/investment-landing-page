/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

// Array of images with their details
const images = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20144432-I5k00gcSQ3lKFsyuf2RCdvw2sqoabA.png",
    alt: "Team group photo in office",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20144432-I5k00gcSQ3lKFsyuf2RCdvw2sqoabA.png",
    alt: "I Love tabstartup Pay banner with team",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20144432-I5k00gcSQ3lKFsyuf2RCdvw2sqoabA.png",
    alt: "Team meeting session",
  },
  {
    id: 4,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20144432-I5k00gcSQ3lKFsyuf2RCdvw2sqoabA.png",
    alt: "Office workspace with team",
  },
  {
    id: 5,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20144432-I5k00gcSQ3lKFsyuf2RCdvw2sqoabA.png",
    alt: "Team outdoor gathering",
  },
  {
    id: 6,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-20%20144432-I5k00gcSQ3lKFsyuf2RCdvw2sqoabA.png",
    alt: "Individual with tabstartup Pay device",
  },
];

export default function Introduction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Text Content */}
        <div className="space-y-6">
          <motion.h1
            className="text-4xl font-bold text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Introduction
          </motion.h1>
          <motion.div
            className="space-y-4 text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg">
              TabStartup is an accelerator platform designed to empower startups
              by connecting them with the right resources like co-founders,
              investors, and mentors. It offers structured mentorship, funding
              access, and strategic partnerships to help startups grow from
              ideation to scaling.
            </p>
            <p className="text-lg">
              TabStartup provides high-potential startups with the tools,
              knowledge, and networks to succeed. Whether you are in the early
              stages or ready to scale, TabStartup is dedicated to accelerating
              your business growth.
            </p>
            <p className="text-lg">
              By joining TabStartup, entrepreneurs gain access to a dynamic
              ecosystem that fosters innovation and opportunity. It's where
              great ideas are nurtured into impactful, scalable businesses,
              backed by expert guidance and strong partnerships.
            </p>
          </motion.div>
        </div>

        {/* Image Grid */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 gap-4"
        >
          {images.map((image) => (
            <motion.div
              key={image.id}
              variants={item}
              className="relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority={image.id <= 2} // Prioritize loading first two images
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
