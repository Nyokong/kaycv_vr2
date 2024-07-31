import React from 'react'
import Link from "next/link";
import { Button } from "./ui/button";

import { TbKayak } from "react-icons/tb";

// imported components
import Nav from "./Nav";
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between
            items-center">
            {/** logo */}
            <Link href="/">
                <h1 className='text-4xl font-semibold flex flex-row-reverse'>Kay
                    <span className='text-white/60 w-[50px] h-[50px]
                    rounded-full text-[30px] mx-2 justify-center
                    text-center p-2'>
                        <TbKayak/>
                    </span>
                </h1>
            </Link>

            {/* desktop nav */}
            <div className="hidden md:flex items-center gap-8">
                <Nav />
            </div>

            {/* mobile nav */}
            <div className="md:hidden">
                <MobileNav/>
            </div>
        </div>
    </header>
  )
}
