"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Web Development",
        description: 
        "I make web apps with the next best tech",
        href: "",
    },
    {
        num: "02",
        title: "Illustration Digital Art",
        description: 
        "I make web based animation and illustration",
        href: "",
    },
    {
        num: "03",
        title: "Animatior",
        description: 
        "I make web based animation on platforms like youtube",
        href: "",
    },
    {
        num: "04",
        title: "Software Developer",
        description: 
        "I make software and specialize in python",
        href: "",
    },
];

const Services = () => {
    return (
        <section className="flex flex-col justify center py-12 md:py-3 md:mt-8">
            <div className="container mx-auto mt-2 md:mt-5 mb-4 md:mb-8">
                <h1 className="cus_h1">
                        Services
                </h1>
            </div>
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease:"easeIn"
                        },
                    }}
                    className="grid grid-cols md:grid-cols-2 gap-[60px]"
                >
                
                
                {/* contained div */}      
                {services.map((service, index) =>{
                    return (
                        <div key={index} className="flex flex-1 flex-col 
                        justify-center gap-6 group">
                            <div>
                                {/* top */}
                                <div className="w-full flex 
                                justify-between items-center">
                                    <div className="text-5xl font-extrabold
                                    text-outline text-transparent group-hover:text-outline-hover
                                    transition-all duration-400 flex justify-center
                                    items-center hover:-rotate-45">
                                        {service.num}
                                    </div>
                                    <Link href={service.href}
                                        className="w-[50px] h-[50px] rounded-full 
                                        group-hover:bg-teal-600 bg-teal-500 text-white
                                        font-extrabold group-hover:text-outline-hover text-outline
                                        transition-all duration-400 flex justify-center
                                        items-center hover:-rotate-45"
                                    >
                                        <BsArrowDownRight />
                                    </Link>
                                </div>
                                {/* heading */}
                                <h2 className="text-[22px] font-bold leading-none mt-2 mb-2
                                text-white group-hover:text-accent transition-all duration-400
                                ">
                                    {service.title}
                                </h2>
                                {/* description */}
                                <p>{service.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full">

                                </div>
                            </div>
                        </div>
                    )
                })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services