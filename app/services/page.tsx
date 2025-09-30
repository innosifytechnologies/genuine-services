import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Service from "@/components/Service";

const page = () => {
  return (
    <div className="service flex flex-col items-center justify-center">
      <Navigation />
      <Service dir="reverse" />
      <Service dir="forward" />
      <Service dir="reverse" />
      <Service dir="forward" />
      <Footer />
    </div>
  );
};

export default page;
