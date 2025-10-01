"use client"
import { useEffect, useRef } from "react";

const Service = ({ dir ,path,info,title }: { dir: string;path:string;info:string ;title:string}) => {
  const directionClass = dir === "reverse" ? "sm:flex-row-reverse" : "sm:flex-row";
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // 0.5x speed (slower)
      // you can also try 0.75, 1.25, 2.0 etc.
    }
  }, []);
 
  return (
    <div
      className={`service flex w-full flex-col items-center justify-center gap-x-5   ${directionClass}`}
    >
      {" "}
      <div className="Img sm:w-150 w-90  h-90 sm:h-120 bg-gray-300 overflow-hidden">
        <video ref={videoRef}width="600" autoPlay loop className="w-full h-full object-cover ">
          <source src={path} type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col sm:w-200 w-full p-5 gap-5">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-3xl">{title}</h2>
          <p className="sm:text-start text-center text-gray-500">
            {info}
          </p>
        </div>
        <div className="images flex gap-5 overflow-x-auto w-full pretty-scroll">
          <div className="img sm:w-70 sm:h-70 w-50 h-70 bg-gray-100 shrink-0"></div>
          <div className="img sm:w-70 sm:h-70 w-50 h-70 bg-gray-100 shrink-0"></div>
          <div className="img w-70 h-70 bg-gray-100 shrink-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Service;
