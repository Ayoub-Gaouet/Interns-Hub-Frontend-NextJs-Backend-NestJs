// import React from 'react';
// import NavComponent from './NavComponent';
// import Image from "next/image";
// import Link from "next/link";
//
// const SignUpComponent = () => {
//   return (
//     <>
//       <NavComponent />
//       <div className="bg-[#0E0939] min-h-screen flex justify-center items-center px-4 lg:px-0">
//         <div className="max-w-7xl mx-auto flex justify-between items-center p-8 rounded-lg shadow-lg space-x-20 top">
//           {/* Left side - Text */}
//           <div className="flex-1 flex flex-col justify-center space-y-6">
//             <h1 className="text-4xl lg:text-5xl font-bold text-white">Inscrivez-vous Gratuitement !</h1>
//             <p className="text-white">Notre mission, vous proposer une offre sur-mesure !</p>
//             <button className="bg-[#23E7A1] text-0F0A3C py-2 px-4 rounded-md">S'inscrire avec un Mail</button>
//             <p className="text-white text-center">ou bien</p>
//
//             <div className="flex flex-col space-y-4">
//               <button
//                 type="button"
//                 className="w-full flex items-center justify-center border-2 border-white text-white font-semibold py-2 px-4 rounded-md "
//               >
//                 <Image src="/google.png" alt="google" width={20} height={20} className="mr-2" />
//                 Se connecter avec votre compte Google
//               </button>
//               <button
//                 type="button"
//                 className="w-full flex items-center justify-center border-2 border-white text-white font-semibold py-2 px-4 rounded-md"
//               >
//                 <Image src="/linkedin.png" alt="linkedin" width={20} height={20} className="mr-2" />
//                 Se connecter avec votre compte LinkedIn
//               </button>
//             </div>
//           </div>
//           {/* Right side - Form */}
//           <div className="flex-1 bg-white p-8 rounded-lg shadow-lg ">
//             <div className="space-y-4">
//               <div className="flex items-center mb-5 space-x-2">
//                 <Image src="/logo.png" alt="logo" width={50} height={50} />
//               </div>
//               <p className="text-sm font-bold text-[#0F0A3C]">Vous êtes déjà un membre chez Hi Interns ?</p>
//               <p className="text-sm font-bold text-[#0F0A3C]">Connectez-vous directement à votre espace. Votre profil sera pré-renseigné par des offres de stages 100% sur-mesure.</p>
//               <button className="w-full inline-flex justify-center items-center border-2 border-[#0F0A3C] text-[#0F0A3C] font-semibold py-2 px-4 rounded-full ">
//                 <Link href="/login" className="text-[#0F0A3C] font-bold  px-4 py-2  transition-colors duration-200">
//                   se connecter </Link>
//                 <Image src="/svg-cta-link-arrow-1.svg" alt="arrow" width={20} height={20} className="ml-2" />
//               </button>
//             </div>
//
//           </div>
//         </div>
//       </div>
//       <Image src="/Mask-group.svg" alt="login" width={400} height={400} className="w-fit h-auto absolute bottom-0 right-0" />
//       <Image src="/flesh-sign.svg" alt="login" width={400} height={400}  className="w-fit h-auto absolute bottom-0 left-56" />
//     </>
//   );
// }

// export default SignUpComponent;
'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import NavComponent from "./NavComponent";


const SignUpComponent = () => {

  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });

  const router = useRouter();

  useEffect(() => {
    localStorage.setItem('email', JSON.stringify(formData.email));
    localStorage.setItem('password', JSON.stringify(formData.password));
    let timer;
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push('/Flow');
  };
  const handleInputChange = (e) => {
    console.log('Handling input change');
    const { name, value } = e.target;
    console.log(`Name: ${name}, Value: ${value}`);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
<>
    <NavComponent />
  <div className="bg-[#0E0939] min-h-screen flex justify-center items-center px-4 lg:px-0">

    <div className="max-w-7xl mx-auto flex justify-between items-center p-8 rounded-lg shadow-lg space-x-20 top">


      <div className='w-9/12 mx-56 mt-32    text-left'>
        <h2 className='text-2xl font-bold   text-white'>Notre  mission, vous proposer une offre sur-mesure !</h2>
        <h2 className='text-6xl font-bold max-w-screen-sm mt-5  text-white'>Dites-nous en plus sur vous !</h2>
        <form className='mt-8 space-y-6 max-w-md' onSubmit={handleSubmit}>
          <div className='relative'>
            <label htmlFor='email' className='text-sm font-medium text-white'>E-mail</label>
            <input 
            type='email' 
            id='email' 
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            className='w-full p-4 pr-12 text-sm text-white bg-[#0E0939] border border-gray-300 rounded-lg placeholder-gray-500'
            placeholder='Enter votre adresse e-mail' 
            required />
          </div>
          <div className='relative'>
            <label htmlFor='password' className='text-sm font-medium text-white'>Mot de passe</label>
            <input 
            type='password' 
            id='password' 
            name='password'
            value={formData.password}
            onChange={handleInputChange}
            className='w-full p-4 pr-12 text-sm text-white bg-[#0E0939] border border-gray-300 rounded-lg placeholder-gray-500'
             placeholder='Enter Password' required
              />
          </div>
          <div className='relative'>
            <label htmlFor='confirm-password' className='text-sm font-medium text-white'>Confirmation Mot de passe</label>
            <input type='password' id='confirm-password' className='w-full p-4 pr-12 text-sm text-white bg-[#0E0939] border border-gray-300 rounded-lg placeholder-gray-500'
                   placeholder='Enter votre nom complet' required />
          </div>
          <button type='submit' className='block w-full px-5 py-3 text-sm font-medium text-white bg-[#23E7A1] rounded-lg'>
            C est parti !
          </button>
        </form>
        <Image src="/Mask-group.svg" alt="login" width={400} height={400} className="w-fit h-auto absolute bottom-0 right-0" />
        <Image src="/flesh-sign.svg" alt="login" width={400} height={400}  className="w-fit h-auto absolute bottom-0 left-56" />
      </div>
    </div>
    </div>
</>
  );
}

export default SignUpComponent;