"use client";

import { FaHtml5, FaCss3, FaReact, FaFigma } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

const about = {
  title: "Khotso Nyokong",
  description: "25 year old Full stack Developer",
  info: [
    {
      fielName: "Name",
      fieldValue: "Khotso Nyokong",
    },
    {
      fielName: "Phone",
      fieldValue: "(+27) 67 792 4732",
    },
    {
      fielName: "Experience",
      fieldValue: "6 years",
    },    
    {
      fielName: "Nationality",
      fieldValue: "South African",
    },
    {
      fielName: "Email",
      fieldValue: "mikewolfnyokong@gmail.com",
    },
    {
      fielName: "Freelance",
      fieldValue: "Available",
    },
    {
      fielName: "Languages",
      fieldValue: "English, Setswana, Sesotho, Zulu, Xhosa, Japanese",
    },
  ]
};

const skills = {
  title: "My Skills",
  description: "Set of things i can do as a junior developer",
  skillList:[
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
    },
    {
      icon: <SiNextdotjs />,
      name: "nextjs",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind-css",
    },
    {
      icon: <FaReact />,
      name: "reactjs",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ]
};

function Cv() {
  return (
    <div>
      
    </div>
  )
}

export default Cv