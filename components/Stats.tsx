
"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 6,
        text: "years of experience",
    },
    {
        num: 5,
        text: "Projects Completed",
    },
    {
        num: 3,
        text: "Technologies mastered",
    },
    {
        num: 290,
        text: "Code Commits",
    },

];

export const Stats = () => {
    return (
        <section className="pt-4 pb-12 md:pt-0 md:pb-0 md:mt-6"> 
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto md:max-w-none">
                    {stats.map((stat, index) => {
                        return (
                            <div
                                className="flex-1 flex gap-4 items-center justify-center
                                md:justify-start"
                                key={index}>
                                <CountUp end={stat.num} duration={5} delay={2} className="text-4xl md:text-6xl font-extrabold"/>
                                <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{stat.text}</p>
                            </div>
                        )
                    })}
                </div>
            </div>    
        </section>
    )
}

export default Stats
