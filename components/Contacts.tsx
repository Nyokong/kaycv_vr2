"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "(+27) 67 792 4732",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mikewolfnyokong@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "None",
  },
];

const Contacts = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.4, 
          duration: 0.4, 
          ease: "easeIn"
        },
      }}

      className="py-6 md:py-2 mt-10 mb-20"
    >
      <div className="container mx-auto">
        <div className="container mx-auto mt-2 md:mt-5 mb-4 md:mb-8">
            <h1 className="cus_h1">
                    Contacts Info
            </h1>
        </div>
        <div className='flex flex-col md:flex-row gap-[30px]'>
          {/* form here */}
          <div className='md:w-[54%] order-2 md:order-none'>
            <div className='bg-[#141316] h-[300px] flex-nowrap hidden md:block w-full'>
                <h1 className='md:cus_h1 cus_h3 '>
                    Please reach out to me here
                </h1>
            </div>
          </div>
          {/* infor */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:m-0'>
            {/* My information tab */}
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <li key={index}
                    className='flex items-center gap-6'  
                  >
                    <div className='w-[52px] h-[52px] md:w-[72px] md:h-[72px] 
                    bg-[#101014ad] text-teal-500 rounded-md items-center
                    justify-center'>
                      <div className='text-[28px] h-full flex items-center justify-center'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p>{item.title}</p>
                      <h3>{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Contacts