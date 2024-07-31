"use client";

import {Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "online cv",
        path: "/cv",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

function MobileNav() {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center border-none items-center  text-[32px] text-teal-200">
                <CiMenuFries/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
            {/* logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
                <h1 className="text-4l font-semibold">Kay <span className="text-teal-400">.</span></h1>
            </div>
            {/* navigation */}
            <nav className='flex flex-col justify-center items-center gap-8'>
                {links.map((link, index) => {
                    return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-teal"} capitalize font-medum hover:text-accent translation-all`}>
                        {link.name}
                    </Link>
                })}
            </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav