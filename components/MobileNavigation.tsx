"use client"; // if using Next.js App Router

import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);
  const path=usePathname();

  const paths=[
    {path:"/",value:"Home"},
    {path:"/contactUs",value:"Contact Us"},
    {path:"/feedback",value:"Feedbacks"},
    {path:"/services",value:"Services"},
  ]
const knowValue =(path:string)=>{
 return paths.find((item)=>item.path==path)?.value
}
  return (
    <div className="w-full flex flex-col mt-[-10px] py-2 sm:hidden">
     
      {/* Top Bar */}
      <div className="flex justify-between items-center w-full px-10">
        <p className=" px-5 py-2 rounded-xl flex items-center gap-x-2 text-lg text-orange-600 font-bold">{knowValue(path)} <MdKeyboardDoubleArrowRight size={20} color="orange"/></p>
        <button
          className="bg-yellow-400 p-2 rounded"
          onClick={() => setOpen((prev) => !prev)}
        >
          <RiMenu3Fill size={25} />
        </button>
      </div>

      {/* Dropdown List with transition */}
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="list bg-amber-50 p-10 my-2 rounded-xl shadow">
          <ul className="flex flex-col gap-y-5">
           <Link href={'/'} onClick={()=>setOpen(false)}><li className="flex items-center gap-x-5 hover:text-red-600">
              <MdKeyboardDoubleArrowRight size={20} /> Home
            </li></Link> 
            <Link href={'/services'} onClick={()=>setOpen(false)}><li className="flex items-center gap-x-5 hover:text-red-600">
              <MdKeyboardDoubleArrowRight size={20} /> Services
            </li></Link> 
            <Link href={'/contactUs'} onClick={()=>setOpen(false)}>
            <li className="flex items-center gap-x-5 hover:text-red-600">
              <MdKeyboardDoubleArrowRight size={20} /> Contact Us
            </li>
            </Link>
            <Link href={'/feedback'} onClick={()=>setOpen(false)}>
            <li className="flex items-center gap-x-5 hover:text-red-600">
              <MdKeyboardDoubleArrowRight size={20} /> Feedbacks
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
