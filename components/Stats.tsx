
"use client";

import CountUp from "react-countup";

import { GetServerSideProps } from 'next';
import { fetchAllCommits } from '../utils/github';
import { FC, ReactNode } from 'react';

import { ScrollArea } from "@/components/ui/scroll-area";

import { useEffect, useState } from 'react';

interface Commit {
  sha: string;
  message: string;
  author: {
    name: string;
    email: string;
  };
}

interface StatsProps {
    commits: Commit[];
}

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
        num: 300,
        text: "Code Commits",
    },

];

export const Stats: React.FC = () => {
    const [commits, setCommits] = useState<Commit[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
    const getCommits = async () => {
        const commitsData = await fetchAllCommits();
        setCommits(commitsData);
        setLoading(false);
    };

        getCommits();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
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
                <div className="bg-[#0e0e11d7] h-[150px] py-6
                                px-10 rounded-xl flex flex-col justify-center
                                items-center md:items-start gap-1 mt-8 mb-8">

                    <h2 className="text-teal-200 text-2xl font-bold">All commits of 2024</h2>
                    <h3 className="flex items-center">Total Commits: 
                        
                        <CountUp end={commits.length} duration={5} delay={2} className="text-4xl md:text-6xl font-extrabold mx-5"/>
                    </h3>
                </div>
                <ScrollArea className="h-[300px]">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                        {commits.length > 0 ? (
                            commits.map((commit) => (
                                <li key={commit.sha}
                                className="bg-[#0e0e11d7] h-[84px] py-6
                                px-10 rounded-xl flex flex-col justify-center
                                items-center md:items-start gap-1"
                                >
                                <p className="text-white/60 flex-nowrap max-h-[40px]">Commit Message: {commit.message}</p>
                                <p className="text-sm max-w-[260px] min-h-[50px]
                            text-center md:text-left">Author: {commit.author.name}</p>
                                </li>
                            ))
                            ) : (
                            <p>No commits found.</p>
                        )}
                    </ul>
                </ScrollArea>
            </div>    
        </section>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const commits = await fetchAllCommits();
    return {
      props: {
        commits,
      },
    };
  };

export default Stats
