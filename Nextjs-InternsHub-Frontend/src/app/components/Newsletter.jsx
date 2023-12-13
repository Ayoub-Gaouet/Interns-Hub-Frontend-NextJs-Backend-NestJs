import React from 'react';
import Image from "next/image";
import Link from "next/link";


const Newsletter = () => {
  return (
    <div className="p-4  w-9/12 mx-auto"  >
    <div className="newsletter-container">
      <h1 className="newsletter-title">S&apos;abonner à notre newsletter</h1>
      <div className="newsletter-form">
        <input
          type="email"
          className="newsletter-input"
          placeholder="houssamfellix@example.com"
          aria-label="Email for newsletter"
        />
        <button className="newsletter-submit" aria-label="Subscribe to newsletter">
          <span className="arrow-right">→</span>
        </button>
      </div>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <Image src="/interns-hub-1.svg" alt="Interns Hub" width={150} height={50} />
        </div>

        {/* Burger Menu Button */}
        <button className="md:hidden">
          {/* Icon for Menu button */}
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <a href="#" className="text-[#0F0A3C] font-bold px-4 py-2 transition-colors duration-200">
            À propos
          </a>
          <a href="#" className="text-[#0F0A3C] font-bold px-4 py-2 transition-colors duration-200">
            Contact
          </a>
          <a href="#" className="text-[#0F0A3C] font-bold px-4 py-2 transition-colors duration-200">
            <Image src="/entreprise.svg" alt="Entreprises" className='mt-2' width={100} height={100} />
          </a>
          <a href="#" className="text-[#0F0A3C] font-bold px-4 py-2 transition-colors duration-200">
            Stages
          </a>
        </div>
        <div className=" hidden md:flex  items-center space-x-3">
          <Image src="/fb.png" alt="IconFacebook" width={20} height={20} />
          <Image src="/insta.png" alt="IconInstagram" width={20} height={20} />
          <Image src="/linkedinn.png" alt="IconLinkedin" width={20} height={20} />
          <Image src="/twitterr.png" alt="IconTwitter" width={20} height={20} />
        </div>
      </div>
      <hr className="border-black border-t-1 " />
    </div>
    </div>
  );
};

export default Newsletter;
