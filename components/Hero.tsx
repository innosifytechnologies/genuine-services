"use client"; // important for client-side rendering

import React, { useState, useEffect } from "react";

const Hero = () => {
  const titles = ["Interior Design ", "Painting Works ", "Building Contruction ", "POP Works ","Outdoor Design "];
  const typingSpeed = 150; // ms per character
  const deletingSpeed = 100;
  const pauseTime = 1500; // pause before deleting

  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setText(currentTitle.substring(0, text.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setText(currentTitle.substring(0, text.length + 1));
      }, typingSpeed);
    }

    // Switch between typing and deleting
    if (!isDeleting && text === currentTitle) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, titleIndex]);

  return (
    <div className="Hero w-[90vw] py-10">
      <div className="section sm:flex-row flex-col flex items-center justify-center gap-10">
        <div className="flex flex-col gap-y-10 sm:w-220 w-full py-5">
          <h1 className="sm:text-6xl text-4xl w-full font-bold bg-gradient-to-r from-blue-600 via-green-500 to-black bg-clip-text text-transparent sm:h-22 ">
            {text}
            <span className="blinking-cursor">|</span>
          </h1>
                

          <p className="sm:hidden text-center">We believe every space has the potential to inspire and comfort. Our
            designs bring together elegance,functionality, and personal style.
            From cozy homes to modern offices</p>
          <p className="text-lg sm:text-start text-center hidden sm:block">
            We believe every space has the potential to inspire and comfort. Our
            designs bring together elegance, functionality, and personal style.
            From cozy homes to modern offices, we craft spaces that tell your
            story. Each project is tailored to reflect your unique taste and
            lifestyle. With attention to detail, we ensure quality in every
            corner. Our mission is to create interiors that feel timeless and
            welcoming. Let us transform your vision into a living masterpiece.
          </p>
        </div>

        <div className="sm:w-100 w-90 h-70 bg-gray-500"></div>
      </div>

      <div className="section sm:flex-row flex-col flex items-center justify-between sm:px-10 sm:py-5 w-full gap-10">
        <div className="sm:w-150 w-full flex items-center flex-col gap-y-5">
          <button className="bg-black text-white px-8 py-3 m-7 w-fit rounded-xl hover:bg-orange-600 translate">
            Start Project
          </button>
          <ul className="flex gap-x-10 sm:py-10 scale-[0.8]">
            <li className="flex flex-col items-center gap-y-3">
              <p className="text-5xl">400+</p>
              <p>Project Complete</p>
            </li>
            <li className="flex flex-col items-center gap-y-3">
              <p className="text-5xl">600+</p>
              <p>Satisfied Clients</p>
            </li>
            <li className="flex flex-col items-center gap-y-3">
              <p className="text-5xl">100+</p>
              <p>Unique Styles</p>
            </li>
          </ul>
        </div>
        <div className="sm:w-200 w-90 h-40 sm:h-80 bg-gray-500"></div>
      </div>

      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 6xl;
          color: black;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0%, 50%, 100% {
            opacity: 1;
          }
          25%, 75% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
