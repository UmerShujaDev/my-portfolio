import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import khubImg from "@/public/khub.png";
import medlegalImg from "@/public/medlegal.png";
import ititansImg from "@/public/ititans.png";
import Discord_Bot_Showcase from "@/public/Discord_Bot_Showcase.png";
import Finance_Tracker_Showcase from "@/public/Finance_Tracker_Showcase.png";
import Ezzstar_Showcase from "@/public/show_case_ezzstar.png";
import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Software Engineer @ Kommerce Hub",
    location: "USA, Remote",
    description:
      "I'm currently working as a software developer, focusing on developing and deploying web applications using React. My day-to-day tasks include implementing RESTful APIs, optimizing codebases, and leading a team to build scalable microservices, all while ensuring seamless performance and timely delivery of high-quality software.",
    icon: React.createElement(FaLaptopCode),
    date: "2021 Nov - present",
  },
  {
    title: "Senior Software Engineer @ Ezzstar",
    location: "USA, Remote",
    description:
      "I am leading the development of full-stack web applications using React, Node.js, Express.js, and MongoDB. My work focuses on improving project delivery timelines, optimizing API and database performance, and mentoring junior developers, all while ensuring code maintainability and implementing CI/CD pipelines for reliable software releases.",
    icon: React.createElement(FaCode),
    date: "2021 Oct - present",
  },
  {
    title: "Software Engineer @ Alchemative",
    location: "Pakistan",
    description:
      "I developed and optimized e-commerce web applications, focusing on enhancing user experience and performance. I led the implementation of complex APIs, migrated legacy code to modern frameworks, and reduced post-deployment issues by 30% through code reviews and automated testing.",
    icon: React.createElement(FaCode),
    date: "2019 July - 2021 Oct",
  },
  {
    title: "Software Engineer @ 9th Dimention",
    location: "Pakistan",
    description:
      "I developed and maintained high-performance web applications, focusing on optimizing user experiences and integrating third-party services. I led custom software solution designs, optimized codebases, and managed multiple projects using agile methodologies to deliver on time and within budget.",
    icon: React.createElement(FaCode),
    date: "2018 Apr - 2019 July",
  },
  {
    title: "Web Developer @ ERS",
    location: "Pakistan",
    description:
      "During my time at ERS, I led the development of scalable applications, focusing on designing efficient code structures, reducing load times, and enhancing performance. I implemented RESTful APIs, optimized codebases, and collaborated with cross-functional teams to deliver high-quality, customized software solutions using Agile methodologies and CI/CD pipelines.",
    icon: React.createElement(FaCode),
    date: "2018 May - 2018 Aug",
  },
] as const;

export const projectsData = [

  {
    title: "Kommerce-HUB",
    description:
      "A warehouse management app that's a one stop for everything a warehouse owner needs with vast modules and scope.",
    tags: ["React.JS", "Next.JS", "NodeJs", "Express.JS"],
    imageUrl: khubImg,
    website: "https://khub.biz/"
  },

  {
    title: "Ezzstar",
    description:
      "A website for SPICA digital tokens, where users can seamlessly check token updates and explore the latest games, enhancing their digital experience.",
    tags: ["React.JS", "Node.Js"],
    imageUrl: Ezzstar_Showcase,
    website: "https://ezzstar-v2.netlify.app/"
  },

  {
    title: "Bankio",
    description:
      "Enhance your financial management with our Next.js-powered Finance Tracker, offering real-time insights, secure transactions, and a user-friendly interface for efficient control.",
    tags: ["Next.js", "Typescript", "RHF"],
    imageUrl: Finance_Tracker_Showcase,
    website: ""
  },

  {
    title: "Bots",
    description:
      "A fully responsive and interactive Discord bot, enhancing user engagement and automation within the platform.",
    tags: ["Node js", "Discord.js", "MongoDB"],
    imageUrl: Discord_Bot_Showcase,
    website: "https://top.gg/"
  },

  {
    title: "iTitans",
    description:
      "An agency website filled with showcasing their services with multiple stepper forms and landing pages.",
    tags: ["HTML", "CSS", "Vanilla JS", "Landing Pages"],
    imageUrl: ititansImg,
    website: "https://ititans.com/"
  },

  {
    title: "Medlegal SafeKeep",
    description:
      "A website for showcasing their mobile app, stunning webpages that are SEO optimized with language translation and format to email setup.",
    tags: ["HTML", "CSS", "Vanilla JS"],
    imageUrl: medlegalImg,
    website: "https://medlegalsafekeep.com/"
  },

] as const;

export const skillsData = [
  "Javascript",
  "Typescript",
  "React Js",
  "Next Js",
  "Redux thunk",
  "Redux Saga",
  "Context Api",
  "React Form Hook",
  "Formik",
  "Node js",
  "Express Js",
  "Mongo DB",
  "Github/Git",
  "Tailwind",
  "Framer Motion",
  "Antd design",
  "Semantic",
  "MUI",
  "shadcn/ui",
  "Socket.io",
  "Docker",
  "CI/CD",
  "AWS",
  "GitHub Actions",
  "Jenkins",
  "Kubernetes",
  "Python",
  "Django",
  "Selenium",
  "BS4",
  "Open AI", 
  "Payments API's", 
  "Twilio API", 
  "SendGrid API", 
  "Slack API", 
  "Google Maps API", 
  "Shopify API", 
  "Google Analytics API", 
  "Firebase Authentication API", 
  "OAuth 2.0",

] as const;
