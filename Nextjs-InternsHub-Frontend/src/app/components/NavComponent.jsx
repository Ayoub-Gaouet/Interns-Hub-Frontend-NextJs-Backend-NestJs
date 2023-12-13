"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const NavComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-4  w-9/12 mx-auto">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <Image src="/logo-1.png" alt="logo" width={50} height={50} />
          <Image src="/interns-hub-1.svg" alt="Interns Hub" width={200} height={50} />
        </div>

        {/* Burger Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
          <a href="/enterprise" className="text-[#0F0A3C] font-bold px-4 py-2 transition-colors duration-200">
            <Image src="/entreprise.svg" alt="Entreprises" className='mt-2' width={100} height={100} />
          </a>
          <a href="/stageoffer" className="text-[#0F0A3C] font-bold px-4 py-2 transition-colors duration-200">
            Stages
          </a>

        </div>
        <div className=" hidden md:flex  items-center">
          <Link href="/login" className="text-[#0F0A3C] font-bold  px-4 py-2  transition-colors duration-200">
            Se connecter
            <hr className="border-[#23E7A1] border-t-4 " />
          </Link>
        </div>
        <div className=" hidden md:flex  items-center">
          <Link href="/signup" className="text-[#0F0A3C] font-bold  px-4 py-2  transition-colors duration-200">
            Cree un compte
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`absolute w-full md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block text-[#0F0A3C] font-bold px-4 py-2 border-b">
          À propos
        </a>
        <a href="#" className="block text-[#0F0A3C] font-bold px-4 py-2 border-b">
          Contact
        </a>
        <Link href="/enterprise" className="block text-[#0F0A3C] font-bold px-4 py-2 border-b">
          Entreprises
        </Link>
        <a href="#" className="block text-[#0F0A3C] font-bold px-4 py-2 border-b">
          Stages
        </a>
        {/* Mobile Se connecter Button */}
        <a href="#" className="block text-[#0F0A3C] font-bold px-4 py-2">
          Se connecter
        </a>
      </div>
    </nav>
  );
};

export default NavComponent;
