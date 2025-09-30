const OurServices = () => {
  return (
    <div className="OurServices sm:h-100  w-fit h-fit flex flex-col item-center justify-center gap-y-10">
      <div className="flex items-center gap-x-10">
        <p className="w-10 h-0.5 bg-black"></p>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-green-600 to-black bg-clip-text text-transparent">Our Services</h1>
      </div>
      <div className="flex sm:flex-row flex-col items-center">
        <div className="flex sm:w-110 w-90  h-60 items-center justify-center gap-x-5  relative"> 
          <div className="w-10 h-13 bg-gray-600"></div>
          <div className="w-80 flex flex-col gap-y-5">
            <h1 className="text-xl font-bold">Interior Design</h1>
            <p>
              We believe every space has the potential to inspire and comfort.
              Our designs bring together elegance, functionality, and personal
              style.
            </p>
            <p className="w-10 h-1 bg-black absolute bottom-5 right-10"></p>
          </div>
        </div> <div className="flex sm:w-110 w-90 h-60 items-center justify-center gap-x-5  relative"> 
          <div className="w-13 h-13 bg-gray-600"></div>
          <div className="w-80 flex flex-col gap-y-5">
            <h1 className="text-xl font-bold">Outdoor Design</h1>
            <p>
              We believe every space has the potential to inspire and comfort.
              Our designs bring together elegance, functionality, and personal
              style.
            </p>
            <p className="w-10 h-1 bg-black absolute bottom-5 right-10"></p>
          </div>
        </div>
         <div className="flex sm:w-110 w-90 h-60 items-center justify-center gap-x-5  relative"> 
          <div className="w-13 h-13 bg-gray-600"></div>
          <div className="w-80 flex flex-col gap-y-5">
            <h1 className="text-xl font-bold">Lighting Design</h1>
            <p>
              We believe every space has the potential to inspire and comfort.
              Our designs bring together elegance, functionality, and personal
              style.
            </p>
            <p className="w-10 h-1 bg-black absolute bottom-5 right-10"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
