import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

import building from '../public/images/building.svg'
import interior from '../public/images/interior.svg'
import painting from '../public/images/painting.svg'
import Image from "next/image";
const OurServices = () => {
  return (
    <div className="OurServices sm:h-100  w-fit h-fit flex flex-col item-center justify-center gap-y-5 py-10">
      <div className="flex items-center gap-x-10">
        <p className="w-10 h-0.5 bg-black"></p>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-green-600 to-black bg-clip-text text-transparent">
          Our Services
        </h1>
      </div>
      <div className="flex sm:flex-row flex-col items-center">
      <Link href={'/services'}>  <div className="flex sm:w-110 w-90  h-60 items-center justify-center gap-x-5  relative hover:bg-blue-50 rounded-2xl">
          <div className="w-13 h-13">
           <Image src={interior} alt="" className="w-full h-full"/>
          </div>
          <div className="w-80 flex flex-col gap-y-5">
            <h1 className="text-xl font-bold">Interior Design</h1>
            <p className="text-gray-500">
              We believe every space has the potential to inspire and comfort. Our designs bring together elegance, functionality, and personal style.
            </p>
            <p className="w-10 h-1 absolute bottom-10 right-5">
              <GoArrowRight size={25} />
            </p>{" "}
          </div>
        </div></Link>
       <Link href={'/services'}><div className="flex sm:w-110 w-90 h-60 items-center justify-center gap-x-5  relative hover:bg-blue-50 rounded-2xl">
          <div className="w-15 h-15 bg-gray-600">
           <Image src={painting} alt="" className="w-full h-full"/>

          </div>
          <div className="w-80 flex flex-col gap-y-5">
            <h1 className="text-xl font-bold">Paiting & POP Works</h1>
            <p className="text-gray-500">
              From flawless painting finishes to creative POP ceilings and walls, we add style and durability to every space, reflecting your unique vision.
            </p>
            <p className="w-10 h-1 absolute bottom-10 right-5">
              <GoArrowRight size={25} className="w-full h-full"/>
            </p>{" "}
          </div>
        </div></Link> 
        <Link href={'/services'}><div className="flex sm:w-110 w-90 h-60 items-center justify-center gap-x-5  relative hover:bg-blue-50 rounded-2xl">
          <div className="w-13 h-13 bg-gray-600">
           <Image src={building} alt=""/>

          </div>
          <div className="w-80 flex flex-col gap-y-5">
            <h1 className="text-xl font-bold">Building Contruction</h1>
            <p className="text-gray-500">
             With strong planning and quality materials, we deliver reliable construction solutions that balance durability, design, and modern living needs.
            </p>
            <p className="w-10 h-1 absolute bottom-10 right-5 ">
              <GoArrowRight size={25} />
            </p>
          </div>
        </div></Link>
      </div>
    </div>
  );
};

export default OurServices;
