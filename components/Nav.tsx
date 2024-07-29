"use client"

import React from 'react'
import Link from "next/link";
import { usePathname } from 'next/navigation';

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "cv",
        path: "/cv",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contacts",
    },
];

export default function Nav() {

    {/* getting the current directory */}
    const pathName = usePathname();

return (
    <nav className='flex gap-8'>
        {links.map((link, index) => {
            return <Link href={link.path} key={index} className={`${link.path === pathName && "text-accent border-b-2 border-teal"} capitalize font-medum hover:text-accent translation-all`}>
                {link.name}
            </Link>
        })}
    </nav>
    );
}
