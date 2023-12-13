import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const IntroComponent = () => {
  return (
    <div className="flex justify-between items-center w-9/12 mx-auto p-5 mb-10">
      <div className="w-11/12 space-y-6">
        <h1 className="text-7xl text-[#0F0A3C] font-extrabold">
          Débutez votre carrière en
          <br />
          <Image src="/Grand.svg" alt="Grand" width={400} height={400} />
        </h1>
        <h2 className="text-xl w-9/12">
          Des nombreuses opportunités de stage qui correspondent parfaitement à vos compétences, intérêts et objectifs de carrière.
        </h2>
        <div className="flex space-x-4">
          <button className="inline-flex items-center bg-[#23E7A1] text-[#0F0A3C] font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ">
            <Link href="/stageoffer" >
              Découvrez des opportunités
            </Link>
          </button>
          <button className="inline-flex items-center border-2 border-[#0F0A3C] text-[#0F0A3C] font-semibold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F0A3C]">
            <Link href="/signup" >
              S’inscrir-gratuitement
            </Link>
            <Image src="/svg-cta-link-arrow-1.svg" alt="arrow" width={20} height={20} className="ml-2" />
          </button>
        </div>
      </div>

      <div className="flex-shrink-0">
        <Image src="/2-1.png" alt="logo" width={400} height={400} />
      </div>
    </div>
  )
}

export default IntroComponent
