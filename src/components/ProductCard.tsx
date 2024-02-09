import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const ProductCard = (props:any) => {
  return (
    <Link href={`/Products/${props.id}`} passHref>
      <div className='mb-8 hover:scale-110 duration-300 cursor-pointer'>
        <Image
          src={props.img.src}
          alt='product-1'
          className='rounded w-80'
          width={300}
          height={200}
        />
        <h3 className='font-bold text-lg mt-3'>{props.title}</h3>
        <p className='font-bold text-lg'>${props.price}</p>
        <p className='font-bold text-lg'>
          Category:{" "}
          <span className='text-base font-normal text-black capitalize'>
            {props.category}
          </span>
        </p>
        <Button className='bg-black text-white'>
          <ShoppingCart className='h-4 w-4 mr-2' />
          Add to Cart
        </Button>
      </div>
    </Link>
  );
};

export default ProductCard;
