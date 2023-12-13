import React from 'react';
import Image from "next/image";
import Link from "next/link";

const EtapeComponent = () => {
  return (
    <>
      <div className='flex w-9/12 mx-auto'>
        <div className='w-5/12 mx-auto'>
          <h1 className='font-extrabold text-7xl w-full text-[#0F0A3C] mb-10'>
            Postuler pour
            un stage est
            plus facile
            que jamais !
          </h1>

          <button className="inline-flex items-center bg-[#23E7A1] text-[#0F0A3C] font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 ">
            <Link href="/stageoffer">
              Commencer
            </Link>
          </button>
        </div>
        <div className='w-1/12 mx-auto'>
        <div className="w-9/12  mx-auto" style={{marginRight:'-100px'}}>
          <div className='flex flex-col items-center mb-8'>
            <div className='w-44 h-16 bg-[#23E7A1] text-[#0E093] font-extrabold rounded-full text-lg flex items-center justify-center '>
              <Image src="/click.png" alt="etape1"  width={20} height={20} style={{marginRight:"10px"}} />
              ÉTAPE 1
            </div>
            <div className='w-44 h-32 border-4 border-t-0 border-[#23E7A1] text-[#0F0A3C] rounded-b-xl flex items-center justify-center ' style={{marginTop:"-25px"}}>
              <p className='text-center text-xl font-semibold'>Cliquez sur Commencer</p>
            </div>
          </div>
        </div>
        <div className="w-9/12 mx-auto " style={{marginRight:'-100px'}}>
          <div className='flex flex-col items-center mb-8'>
            <div className='w-44 h-16 bg-[#23E7A1] text-[#0E093] font-extrabold rounded-full text-lg flex items-center justify-center '>
              <Image src="/tel.png" alt="etape1"  width={20} height={20} style={{marginRight:"10px"}} />

              ÉTAPE 3
            </div>
            <div className='w-44 h-32 border-4 border-t-0 border-[#23E7A1] text-[#0F0A3C] rounded-b-xl flex items-center justify-center ' style={{marginTop:"-25px"}}>
              <p className='text-center text-xl font-semibold'>Contacter l&lsquo;entreprise</p>
            </div>
          </div>
        </div>
        </div>
        <div className='w-3/12 mx-auto'>
          <div className="w-9/12 mx-auto">
            <div className='flex flex-col items-center mb-8'>
              <div className='w-44 h-16 bg-[#23E7A1] text-[#0E093] font-extrabold rounded-full text-lg flex items-center justify-center '>
                <Image src="/sear.png" alt="etape1"  width={20} height={20} style={{marginRight:"10px"}} />

                ÉTAPE 2
              </div>
              <div className='w-44 h-32 border-4 border-t-0 border-[#23E7A1] text-[#0F0A3C] rounded-b-xl flex items-center justify-center ' style={{marginTop:"-25px"}}>
                <p className='text-center text-xl font-semibold'>Rechercher une opportunité</p>
              </div>
            </div>
          </div>
          <div className="w-9/12 mx-auto">
            <div className='flex flex-col items-center mb-8'>
              <div className='w-44 h-16 bg-[#23E7A1] text-[#0E093] font-extrabold rounded-full text-lg flex items-center justify-center '>
                <Image src="/relode.png" alt="etape1"  width={20} height={20} style={{marginRight:"10px"}} />

                ÉTAPE 4
              </div>
              <div className='w-44 h-32 border-4 border-t-0 border-[#23E7A1] text-[#0F0A3C] rounded-b-xl flex items-center justify-center ' style={{marginTop:"-25px"}}>
                <p className='text-center text-xl font-semibold'>Répéter</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>

  );
}

export default EtapeComponent;
