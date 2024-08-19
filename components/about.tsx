"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        With 8+ years of experience and strong problem-solving skills, I’ve developed mid-large applications for diverse clients.
      </p>
      <p className="mb-3">
        Experienced in building both systems and organizations that are secure, scaleable, cost-effective, and most of all, promote human flourishing.
      </p>
      <p className="mb-3">
        Well-versed in programming languages, cloud technologies, and people management.
      </p>
      <p className="mb-3">
        Experienced with the entire engineering lifecycle, from ideation and requirements design to architecture and implementation to sales and support.
      </p>

    </motion.section>
  );
}
