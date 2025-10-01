'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"
import logo from '../public/images/logo.png'
import Image from "next/image";

const Navigation = () => {
  const pathname =usePathname();
  return (
    <div className="navigation flex items-center justify-between w-[90vw] h-30 ">
           <div className="navigation-title flex items-center justify-center gap-x-5">
            <div className="img w-15 h-15 rounded-2xl bg-black flex items-center justify-center">
              <Image src={logo} alt="" className="w-15 h-12 " />
            </div>
            <div className="flex flex-col">
            <h2 className="sm:text-2xl text-lg font-bold ">Genuine Services</h2>
            <p>Kakinada</p>
            </div>
           </div>
           <div className="navigation-list flex-col hidden sm:flex">
            <ul className="flex items-center justify-center gap-x-20 ">
               <Link href="/"><li className={`border-b-4 ${pathname=='/'?"border-black":"border-none"} `}>Home</li>                </Link>
               <Link href="/services"><li className={`border-b-4 ${pathname=='/services'?"border-black":"border-none"} `}>Services</li></Link>
               <Link href="/contactUs"><li className={`border-b-4 ${pathname=='/contactUs'?"border-black":"border-none"} `}>Contact Us</li></Link>
               <Link href="/feedback"><li className={`border-b-4 ${pathname=='/feedback'?"border-black":"border-none"} `}>Feedback</li></Link>
            </ul>
           </div>
    
           <div className="navigation-button">
           <Link href={'/contactUs'}> <button className="sm:w-30 h-10 w-20 bg-black text-white rounded-xl hover:bg-orange-600 transition ">Contact</button></Link>
           </div>
    </div>
  )
}

export default Navigation