import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
import { FC } from "react";

// Define the prop types
interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
    {icon: <FaGithub />, path: ''},
    {icon: <FaLinkedinIn />, path: ''},
    {icon: <FaYoutube/>, path: ''},
    {icon: <FaInstagram />, path: ''},
]


const Socials: FC<SocialsProps> = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((social, index) => {
            return <Link key={index} href={social.path} className={iconStyles}>
                {social.icon}
            </Link>
        })}
    </div>
  )
}

export default Socials