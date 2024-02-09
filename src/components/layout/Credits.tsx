import React from "react";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const Links = [
  {
    id: 1,
    href: "https://www.linkedin.com/in/iamahmaad/",
    icon: <LinkedinIcon />,
  },
  {
    id: 2,
    href: "https://www.instagram.com/_iammuhammadahmad/",
    icon: <InstagramIcon />,
  },
  {
    id: 3,
    href: "https://twitter.com/iAamAhmad",
    icon: <TwitterIcon />,
  },
  {
    id: 4,
    href: "https://github.com/iAamAhmad",
    icon: <GithubIcon />,
  },
];

const Credits = () => {
  return (
    <div className='bg-gray-700'>
      <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
        <p className='text-white text-sm text-center sm:text-left'>
          Developed By{" "}
          <Link
            href='https://github.com/iAamAhmad'
            className='font-bold underline'>
            Muhammad Ahmad
          </Link>
        </p>
        <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
          {Links.map((link) => (
            <a
              target='_blank'
              href={link.href}
              key={link.id}
              className='w-5 h-5 ml-3 text-white'>
              {link.icon}
            </a>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Credits;
