// components/BeforeAfterCard.tsx
import React from "react";


const BeforeAfterCard= ({
  beforeImg,
  afterImg,
  alt = "Before After Image",
  width = "w-80",
  height = "h-100",
}:{
  beforeImg:string;
  afterImg:string;
  alt?:string;
  width?:string;
  height?:string
}) => {
  return (
    <div className={`relative overflow-hidden rounded-lg shadow-lg group cursor-pointer ${width} ${height}`}>
      {/* After Image - Color (default) */}
      <img
        src={afterImg}
        alt={alt}
        className="w-full h-full object-cover"
      />
      <span className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm font-semibold">
        After
      </span>

      {/* Before Image - Black & White (revealed on hover) */}
      <img
        src={beforeImg}
        alt={alt}
        className="absolute top-0 left-0 w-full h-full object-cover filter grayscale transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"
      />
      <span className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm font-semibold group-hover:block hidden">
        Before
      </span>
    </div>
  );
};

export default BeforeAfterCard;
