import React from 'react';

const StepIndicator = () => {
  return (
    <div className=" w-9/12 mx-auto p-4 rounded-lg">
      <p className=" text-2xl text-[#0F0A3C]">Une procédure de postulation de stage</p>
      <p className='mb-5 font-extrabold text-[#0F0A3C]" mb-6 text-4xl'>Simple et pratique!</p>
      <div className="flex items-center">
        <div className="flex-1">
          <div className="w-10 h-10 mx-auto bg-purple-200 rounded-full text-lg text-white flex items-center">
            <span className="text-[#0F0A3C] text-2xl font-bold text-center w-full">1</span>
          </div>
          <div className="text-xl mx-1 text-center mt-2 font-semibold text-gray-600">Publiez vos Offres de Stage</div>
        </div>

        <div className="flex-auto border-2 h-2 bg-black transition duration-500 ease-in-out border-black"></div>

        <div className="flex-1">
          <div className="w-10 h-10 mx-auto bg-purple-200 rounded-full text-lg text-white flex items-center">
            <span className="text-[#0F0A3C] text-2xl font-bold text-center w-full">2</span>
          </div>
          <div className="text-xl mx-1 text-center mt-2 font-semibold text-gray-600">Chercher et Sélection des candidats</div>
        </div>

        <div className="flex-auto border-2 h-2 bg-black transition duration-500 ease-in-out border-black"></div>

        <div className="flex-1">
          <div className="w-10 h-10 mx-auto bg-purple-200 rounded-full text-lg text-white flex items-center">
            <span className="text-[#0F0A3C] text-2xl font-bold text-center w-full">3</span>
          </div>
          <div className="text-xl mx-1 text-center mt-2 font-semibold text-gray-600">Communiquez et Recrutez</div>
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;
