import BeforeAfterCard from "@/components/BeforeAfterCard"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import MobileNavigation from "@/components/MobileNavigation"
import Navigation from "@/components/Navigation"
import OurServices from "@/components/OurServices"
import OurWork from "@/components/OurWork"

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navigation/>
      {/* <MobileNavigation/> */}
      <Hero/>
      <OurServices/>
      <OurWork/>
      <Footer/>
    </div>
  )
}

export default page