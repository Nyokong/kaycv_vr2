import React from 'react'
import Link from "next/link";
import { Button } from "./ui/button";


// imported components
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between
            items-center">
            {/** logo */}
            <Link href="/">
                <h1 className='text-4xl font-semibold '>Kay
                    <span className='text-accent'>.</span>
                </h1>
            </Link>

            {/* desktop nav */}
            <div className="hidden md:flex items-center gap-8">
                <Nav />
            </div>

            {/* mobile nav */}
            <div className="md:hidden">
                mobile nav
            </div>
        </div>
    </header>
  )
}
