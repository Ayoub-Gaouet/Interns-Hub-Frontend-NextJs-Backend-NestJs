import React from 'react'
import Image from 'next/image'

const FirstBloc = () => {
  return (

    <>
      <div className="flex justify-center  mt-10">
        <a href="#" className="text-[#0F0A3C] font-bold text-2xl px-4 py-2  transition-colors duration-200">
        Pour etudiants
          <hr className="border-[#23E7A1] border-t-4 " />
        </a>
        <a href="#" className="text-[#0F0A3C] font-bold text-2xl  px-4 py-2  transition-colors duration-200">
        Pour entreprises
          <hr className="border-[#23E7A1] border-t-4 " />
        </a>
      </div>
      <div className="bg-white w-9/12 mx-auto text-[#0F0A3C] p-5 flex flex-col md:flex-row md:items-center">
        <div className="flex-1 space-y-6">


          <h1 className="text-4xl font-bold mb-4">
            La prochaine étape de votre carrière
          </h1>

          <p className="text-lg mb-6">
            Rejoignez notre réseau diversifié, acquérez une expérience précieuse grâce à des stages dans différents secteurs, et bénéficiez dhoraires de travail flexibles, dune orientation professionnelle sur mesure, et bien plus encore ! Inscrivez-vous à Hi Interns pour atteindre vos objectifs de carrière dès aujourd hui !
          </p>

          <button className="inline-flex items-center bg-[#23E7A1] text-[#0F0A3C] font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23E7A1] hover:bg-[#1cbf82]">
            Voir les postes vacants <span className="ml-2">→</span>
          </button>
        </div>

        <div className="flex-1 flex justify-end">
          <Image src="/student-male.png" alt="Student Illustration" width={400} height={400} />
        </div>
      </div>
    </>

  )
}

export default FirstBloc
