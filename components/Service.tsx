const Service = ({dir}:{dir:string}) => {
  return (
    <div className={`service flex w-[100%] sm:flex-row flex-col items-center justify-center  sm:${dir=="reverse"?"flex-row-reverse":""} `}>
      <div className="Img sm:w-150 w-90 h-120 bg-gray-300"></div>
      <div className="flex flex-col sm:w-200 w-full p-5 gap-5">
        <div className="flex flex-col gap-y-5">
          <h2 className="text-3xl">Paiting Works</h2>
          <p className="sm:text-start text-center">
            We believe every space has the potential to inspire and comfort. Our
            designs bring together elegance, functionality, and personal style.
            From cozy homes to modern offices, we craft spaces that tell your
            story. Each project is tailored to reflect your unique taste and
            lifestyle. With attention to detail, we ensure quality in every
            corner. Our mission is to create interiors that feel timeless and
            welcoming. Let us transform your vision into a living masterpiece.
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
