// import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts"
import Category from "@/components/Category";
// import Footer from "@/components/Footer"
import HotCategory from "@/components/HotCategory";
import OurProducts from "@/components/OurProducts";

export default function Home({id}:{id:string}) {
  return (
    <div>
      {/* <Navbar /> */}
     <Hero />
     <FeaturedProducts />
    <Category />
    <HotCategory />
    <OurProducts /> 
    
    {/* <Footer /> */}
    </div>
  );
}
