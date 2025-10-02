
const Footer = () => {
  return (
    <div className="footer flex flex-col sm:flex-row justify-between w-[100%] px-10 py-20 bg-black text-white gap-y-10">
        <div className="section w-80 flex flex-col gap-5 ">
           <h2 className="text-3xl font-bold">Genuine Services</h2>
            <p>We believe every space has the potential to inspire and comfort</p>
        </div>
        <div className="section w-80 flex flex-col gap-5">
                <h2 className="text-2xl font-bold">Services</h2>
            <ul className="flex flex-col gap-y-2">
                <li>Interior Design</li>
                <li>Paiting Works</li>
                <li>Building Contruction</li>
                <li>POP Works</li>
            </ul>
        </div>
        <div className="section w-80 flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">Usefull Links</h2>
            <ul className="flex flex-col gap-y-2">
                <li>Home</li>
                <li>Services</li>
                <li>Comtact Us</li>
                <li>About Us</li>
            </ul>
        </div>
        <div className="section w-80 flex flex-col gap-y-5">
                <h2 className="text-2xl font-bold">Contact</h2>
            <ul className="flex flex-col gap-y-2">
                
                <li>+91 85550 88176</li>
                <li>+91 81434 13999</li>
                 <li>support@genuineservice.com</li>
                <li>#2-6-8 Ashita Comolex, 3rd floor Near Kokila Centre, Kakinada, Andhra Pradesh, India</li>
               
            </ul>
        </div>
    </div>
  )
}

export default Footer