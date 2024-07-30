"use client";

import { motion } from "framer-motion";
import Image from 'next/image';


function Mainphoto() {
  return (
    <div className="w-full h-full relative">
        <motion.div 
                initial={{opacity:0}} 
                animate={{opacity: 1, transition: {delay: 2, duration:0.4, ease:"easeInOut"},
                }}
                className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] mix-blend-lighten"
            >
                <Image 
                    src='/assets/imgs/corp.png'
                    priority
                    quality={100}
                    fill
                    alt="corporate image"
                    className="object-contain"
                />
        </motion.div>
    </div>
  )
}

export default Mainphoto