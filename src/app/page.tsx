import ScrollToTop from "@/components/ScrollToTop";

import Hero from "@/components/views/Hero";
import Promotion from "@/components/Promotion";
import Jewellery from "@/components/Jewellery";
import Newsletter from "@/components/Newsletter";
import { ProductList } from "@/components/views/ProductList";
export default function Home() {
  return (
    <div className='py-0 ml-0 lg:py-12 lg:ml-20'>
      <ScrollToTop />
      <Hero />
      <Promotion />
      <ProductList />
      <Jewellery />
      <Newsletter />
    </div>
  );
}
