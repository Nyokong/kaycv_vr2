"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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

import { motion } from "framer-motion";

const Contact = () => {
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

      className="py-6 md:py-2"
    >
      <div className="container mx-auto">
        <div className='flex flex-col md:flex-row gap-[30px]'>
          {/* form here */}
          <div className='md:w-[54%] order-2 md:order-none'>
            <form action="" 
              className='flex flex-col gap-6 p-10 bg-[#101014ad] rounded-none'
            >
              <h3 className='text-4xl text-teal-400'>Email Me Anytime!</h3>
              <p className="text-white/60">
                Please reach out to me anytime you can!
              </p>
              {/* inputs */}
              <div className='grid grid-cold-1 md:grid-cols-2 gap-6'>
                <Input type="firstname" placeholder='Firstname' />
                <Input type="lastname" placeholder='Lastname' />
                <Input type="email" placeholder='Email Address' />
                <Input type="phone" placeholder='Phone Number' />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="select a serveice"/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="wb">Web Development</SelectItem>
                    <SelectItem value="am">Animation</SelectItem>
                    <SelectItem value="il">Illustration</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea className='h-[200px]' placeholder='Any comments you might like to add?'/>
              {/* button */}
              <div className='w-full flex justify-center items-center'>
                <Button size="lg" className='w-40'>Send</Button>
              </div>
            </form>
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

export default Contact