"use client";

import { FaHtml5, FaCss3, FaReact, FaFigma } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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

const experience = {
  title: "My Experience",
  description: "Iam a dedicated, young and ambitious man. i believe that hard work pays off here are my experiences",
  items: [
    {
      company: "Lumino Logistics",
      position: "Freelance",
      duration: "2021 - 2022",
    },
    {
      company: "IphoneReseller",
      position: "Web Developer",
      duration: "2 Months",
    },
    {
      company: "Zetsy Online",
      position: "Web Developer",
      duration: "2024 - Present",
    },
  ]
};

const education = {
  title: "My Education",
  description: "Iam a dedicated, young and ambitious man. i believe that hard work pays off here are my experiences",
  items: [
    {
      institution: "North West Univercity",
      degree: "Bsc Computer Science in Physics",
      duration: "2019 - 2020",
    },
    {
      institution: "North West Univercity",
      degree: "Bsc Information Technology",
      duration: "2022 - 2024",
    },
  ]
};

function Cv() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4, 
          duration: 0.4, 
          ease: "easeIn"
        },
      }}

      className="min-h-[80vh] flex items-center justify-center py-12 md:py-2"
    >

      <div className="container mx-auto">
        <Tabs
          defaultValue="about-me"
          className="flex flex-col md:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto
          md:mx-0 gap-6">
            <TabsTrigger value="about-me">About Me</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>

          {/*  tabs content */}
          <div className="min-h-[70vh] w-full">
            <TabsContent value="about-me" className="w-full text-center md:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">
                  {about.title}
                </h3>
                <p className="grid grid-cols-1 md:grid-cols-2 gap-y-6 max-w-[630px]">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 max-w-[620px] mx-auto md:m-1">
                  {about.info.map((item, index) => {
                      return (
                        <li key={index}
                          className="flex items-center justify-center md:justify-start gap-4"
                        >
                          <span className="text-white/60">{item.fielName}</span>
                          <span className="text-white">{item.fieldValue}</span>
                        </li>
                      );
                    })
                  }
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
                <div className="flex flex-col gap-[30px] text-center md:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">{education.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li key={index}
                            className="bg-[#0e0e11d7] h-[184px] py-6
                            px-10 rounded-xl flex flex-col justify-center
                            items-center md:items-start gap-1"
                          >
                            <span className="text-teal-300">{item.duration}</span>
                            <h3 className="tetx-xl max-w-[260px] min-h-[60px]
                            text-center md:text-left">{item.degree}
                            </h3>
                            <div>
                              <p className="text-white/60">{item.institution}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">{skills.description}</p>
              </div>
              <ul className="grid grid-cols-2 mt-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#100f13b2]
                          rounded-none flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-teal-200
                              transition-all duration-300">
                                {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center md:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto md:mx-0">{experience.description}</p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li key={index}
                            className="bg-[#0e0e11d7] h-[184px] py-6
                            px-10 rounded-xl flex flex-col justify-center
                            items-center md:items-start gap-1"
                          >
                            <span className="text-teal-300">{item.duration}</span>
                            <h3 className="tetx-xl max-w-[260px] min-h-[60px]
                            text-center md:text-left">{item.position}
                              <div>
                                <p className="text-white/60">{item.company}</p>
                              </div>
                            </h3>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
      
    </motion.div>
  )
}

export default Cv