import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <div className="relative text-center space-y-4 min-h-[40vh] md:h-[30vh] lg:min-h-[10rem] flex flex-col justify-center items-center text-gray-800">
      <h1 className="absolute text-6xl md:text-[9rem] font-bold text-gray-200 text-center mx-auto -z-50">
        Newsletter
      </h1>
      <h2 className="text-3xl md:text-3xl font-bold">
        Subscribe to Our Newsletter
      </h2>
      <p className="max-w-[16rem] text-lg font-medium">
        Get the latest information and promotional offers directly.
      </p>
      <div className="flex gap-4 flex-wrap items-center justify-center">
        <Input
          type="email"
          className="border border-gray-600 py-1 px-2 md:px-4 flex w-80"
          placeholder="Enter your email address"
        />
        <Button className="bg-black text-white">Subscribe</Button>
      </div>
    </div>
  );
};

export default Newsletter;
