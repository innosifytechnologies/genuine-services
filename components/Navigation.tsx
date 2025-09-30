

const Navigation = () => {
  return (
    <div className="navigation flex items-center justify-between w-[90vw] h-30 ">
           <div className="navigation-title flex items-center justify-center gap-x-5">
            <div className="img w-12 h-12 bg-amber-400"></div>
            <div className="flex flex-col">
            <h2 className="sm:text-2xl text-lg font-bold ">Genuine Services</h2>
            <p>Kakinada</p>
            </div>
           </div>
           <div className="navigation-list flex-col hidden sm:flex">
            <ul className="flex items-center justify-center gap-x-20 ">
                <li className="border-b-4 border-black">Home</li>
                <li>Services</li>
                <li>Contact Us</li>
                <li>Feedback</li>
            </ul>
           </div>
    
           <div className="navigation-button">
            <button className="sm:w-30 h-10 w-20 bg-black text-white rounded-xl hover:bg-orange-600 transition ">Contact</button>
           </div>
    </div>
  )
}

export default Navigation