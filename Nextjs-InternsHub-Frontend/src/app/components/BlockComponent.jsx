import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const BlockComponent = () => {
  return (
    <div className="flex justify-between mt-20 items-center w-9/12 mx-auto p-5 ">
      <div className="flex-1 mr-5">
        <h1 className="text-4xl text-[#0F0A3C] font-bold  mb-4">Êtes-vous prêt à découvrir un vivier de talents prometteurs pour dynamiser votre entreprise ?</h1>
        <p className="mb-4 text-2xl mt-5">Déposez dès maintenant vos offres de stage sur notre plateforme et donnez aux étudiants la possibilité de rejoindre votre équipe.</p>
        <button className="inline-flex mt-10 items-center bg-[#23E7A1] text-[#0F0A3C] font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23E7A1] hover:bg-[#1cbf82]">
          <Link href="/postoffrestage">
            soumettre une offre  <span className="ml-2">→</span>
          </Link>

          </button>
      </div>
      <div className="flex-1 mx-5" style={{marginRight :"-250px"}}>
        {/* Replace the src with your image path */}
        <Image src="/stage.png" alt="Stage Illustration" width={500} height={300} />
      </div>
    </div>
  );
};

export default BlockComponent;
