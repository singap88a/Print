import Image from "next/image";
import Business_card from "./components/business_card";
import Reviews from "./components/reviews";
import FAQ from "./components/faqs";
import ProductsSection from "./components/Products/ProductsSection";
  
export default function Home() {
  return (
   <div>
    <Business_card/>
    <Reviews/>
    <FAQ/>
    <ProductsSection />
    </div>
  );
}
