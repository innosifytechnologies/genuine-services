import BeforeAfterCard from "@/components/BeforeAfterCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileNavigation from "@/components/MobileNavigation";
import Navigation from "@/components/Navigation";
import OurServices from "@/components/OurServices";
import OurWork from "@/components/OurWork";
import Service from "@/components/Service";

import p1 from '../public/images/services/painting01.webp'
import p2 from '../public/images/services/painting02.jpeg'
import p3 from '../public/images/services/painting03.jpg'
import p4 from '../public/images/services/painting04.jpg'
import i1 from '../public/images/services/interior01.webp'
import i2 from '../public/images/services/interior02.jpg'
import i3 from '../public/images/services/interior03.webp'
import i4 from '../public/images/services/interior04.jpg'

import po1 from '../public/images/services/pop01.jpg'
import po2 from '../public/images/services/pop02.webp'
import po3 from '../public/images/services/pop03.jpg'
import po4 from '../public/images/services/pop04.jpg'

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navigation />
      <MobileNavigation />
      <Hero />
      <OurServices />
        <Service
        images={[p1,p2,p3,p4]}
        title="Painting Works"
        dir="forward"
        path="/videos/painting.mp4"
        info="A fresh coat of paint can completely redefine the mood of any space. Our painting services are designed to combine quality, durability, and creativity. From smooth interior finishes that make rooms feel bright and welcoming, to weather-resistant exterior coatings that protect and beautify your property, we handle every project with care. Our team works with premium materials and precise techniques to ensure a flawless look that lasts. Whether you prefer bold modern colors or subtle classic tones, we tailor each job to match your vision. "
      />
      <Service
        images={[i1,i2,i3,i4]}
        title="Interior Design"
        dir="reverse"
        path="/videos/interioring.mp4"
        info="Our Interior Design services are crafted to transform spaces into functional and visually stunning environments. We blend creativity, style, and practicality to design interiors that truly reflect your personality and lifestyle. From concept development to execution, every detail is carefully considered from furniture layout and lighting to color schemes and textures. Whether it’s a cozy home, a modern office, or a commercial space, our designs focus on comfort, elegance, and harmony. "
      />
      <Service
        images={[po2,po3,po4,po1]}
        title="POP Works"
        dir="forward"
        path="/videos/poping.mp4"
        info="Our POP (Plaster of Paris) works bring elegance and sophistication to every interior space. From intricately designed false ceilings to stylish wall panels and decorative mouldings, we combine creativity with precision to transform ordinary rooms into visually stunning areas. Each project is customized to reflect your personal taste, ensuring harmony with the overall design of your home or office. Using high-quality materials and expert craftsmanship, we focus on fine detailing, durability, and smooth finishes. "
      />
   
      {/* <OurWork /> */}
      <Footer />
    </div>
  );
};

export default page;
