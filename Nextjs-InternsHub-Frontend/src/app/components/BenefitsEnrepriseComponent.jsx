import React from 'react'
import Image from 'next/image';

const BenefitsEnrepriseComponent = () => {
  return (
    <div className="flex justify-between mt-10 items-center w-9/12 mb-20 mx-auto  p-6">
    <div className="flex-1">
        <Image src="/Businesswoman happy about profit growth.png" alt="Businesswoman Happy" width={300} height={350} objectFit="contain" />
      </div>
      <div className="space-y-4">
        <h2 className="text-5xl mb-16 text-[#0F0A3C] font-bold mb-4">Avantages pour les entreprises</h2>
        <div className="flex items-center">
        <p className="ml-2 text-3xl">Accès à un bassin de talents divers</p>
        <Image src="/Ellipse 2.png" alt="Star" width={40} height={40}  style={{marginLeft:'115px'}}/>
        </div>
        <hr className='border-t-2 border-gray-300 w-full my-4'/>

        <div className="flex items-center">
        <p className="ml-2 text-3xl">Processus de recrutement simplifié</p>
        <Image src="/Ellipse 2.png" alt="Star" width={40} height={40} style={{marginLeft:'108px'}} />
        </div>
        <hr className='border-t-2 border-gray-300 w-full my-4'/>

        <div className="flex items-center">
        <p className="ml-2 text-3xl">solution rentable et economique</p>
        <Image src="/Ellipse 2.png" alt="Star" width={40} height={40} style={{marginLeft:'136px'}} />
        </div>
        <hr className='border-t-2 border-gray-300 w-full my-4'/>

        <div className="flex items-center">
        <p className="ml-2 text-3xl">Amélioration de la marque employeur.</p>
        <Image src="/Ellipse 2.png" alt="Star" width={40} height={40} style={{marginLeft:'58px'}} />
        </div>
        <hr className='border-t-2 border-gray-300 w-full my-4'/>

        <div className="flex items-center">
        <p className="ml-2 text-3xl">Acquisition de talents à long terme</p>
        <Image src="/Ellipse 2.png" alt="Star" width={40} height={40} style={{marginLeft:'105px'}} />
        </div>
        <hr className='border-t-2 border-gray-300 w-full my-4'/>

        <div className="flex items-center">
        <p className="ml-2 text-3xl">Accès aux analyses et aux renseignements</p>
        <Image src="/Ellipse 2.png" alt="Star" width={40} height={40} style={{marginLeft:'10px'}}/>
        </div>
      </div>

    </div>
  );
};


export default BenefitsEnrepriseComponent
