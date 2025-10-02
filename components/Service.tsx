"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

const Service = ({
  dir,
  path,
  info,
  title,
  images = [], // default empty array
}: {
  dir: string;
  path: string;
  info: string;
  title: string;
  images?: (string | StaticImageData)[]; // array of strings or imported images
}) => {
  const directionClass =
    dir === "reverse" ? "sm:flex-row-reverse" : "sm:flex-row";
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // slower playback
    }
  }, []);

  return (
    <div
      className={`service flex w-full flex-col items-center justify-center gap-x-5 ${directionClass}`}
    >
      <div className="Img sm:w-150 w-90 h-90 sm:h-120 bg-gray-300 overflow-hidden">
        <video
          ref={videoRef}
          width="600"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        >
          <source src={path} type="video/mp4" />
        </video>
      </div>

      <div className="flex flex-col sm:w-200 w-full p-5 gap-5">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-3xl">{title}</h2>
          <p className="sm:text-start text-center text-gray-500">{info}</p>
        </div>

        <div className="images flex gap-5 overflow-x-auto w-full pretty-scroll">
          {images.length > 0 ? (
            images.map((item, index) => (
              <Image
                src={item}
                alt={`${title} image ${index}`}
                key={index}
                height={200}
                className="rounded-lg object-cover"
              />
            ))
          ) : (
            <p className="text-gray-400 text-sm">No images available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
