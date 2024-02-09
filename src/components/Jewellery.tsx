import Image from "next/image";
import P3 from "/public/p3.png";
import { Button } from "@/components/ui/button";

const Jewellery = () => {
  return (
    <div className='py-6 px-12 text-gray-700'>
      {/* top */}
      <div className='flex justify-start md:justify-center text-2xl md:text-3xl font-bold py-4'>
        <h1 className='max-w-[27rem]'>
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>
      {/* bottom */}
      <div className='flex flex-col md:flex-row justify-between py-4 mt-2 gap-5'>
        {/* left */}
        <div className='relative w-full md:w-1/2 gap-6 lg:gap-10 grid grid-cols-2 grid-rows-2'>
          <div className='absolute -z-50 text-slate-200 inset-0'>
            <h2 className='text-5xl md:text-7xl lg:text-[7.3rem] leading-[5.9rem] font-bold'>
              Different from <br />
              others
            </h2>
          </div>
          <div className='max-w-[13rem] space-y-2'>
            <h3 className='font-semibold text-xl'>
              Using Good Quality Materials
            </h3>
            <p className='text-lg leading-5'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          {/* Repeat similar structure for other items */}
        </div>
        {/* right */}
        <div className='flex flex-col md:flex-row w-full md:w-1/2 gap-6 lg:gap-10'>
          <div className='w-full md:w-1/2 px-4 lg:px-0'>
            <Image
              width={1000}
              height={1000}
              src={P3}
              alt='Designer Jewellery'
            />
          </div>
          <div className='space-y-6 md:space-y-4 p-6'>
            <p className='h-[90%] lg:max-w-[15rem]'>
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Button className='bg-black text-white'>See All Products</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jewellery;
