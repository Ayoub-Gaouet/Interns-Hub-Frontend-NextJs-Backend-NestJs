import Image from 'next/image';
import React from 'react';
import NavComponent from './NavComponent';

const LoginComponent = () => {
  return (
    <>
      <NavComponent />
      <div className="flex bg-[#0E0939] items-center justify-center min-h-screen">
        <div className="flex flex-row items-start bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto relativec" >
          <div className=''>
            <div className="" >
              <div className="flex items-center  mb-5 space-x-2">
                <Image src="/logo.png" alt="logo" width={50} height={50} />
                <Image src="/interns-hub-1.svg" alt="Interns Hub" width={200} height={50} />
              </div>
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#0F0A3C]">
                    Votre e-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Votre e-mail"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-bold text-[#0F0A3C]">
                    Votre mot de passe
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Choisissez un mot de passe"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#23E7A1] focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Continuer
                </button>
                <div className="flex justify-center items-center my-4">
                  <span className="h-px bg-gray-300 w-full"></span>
                  <span className="p-2 text-gray-400 mb-1">ou bien</span>
                  <span className="h-px bg-gray-300 w-full"></span>
                </div>
                <div className="flex flex-col space-y-4">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center border-2 border-[#0F0A3C] text-[#0F0A3C] font-semibold py-2 px-4 rounded-md transition-colors duration-300 ease-in-out hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F0A3C]"
                  >
                    <Image src="/google.png" alt="google" width={20} height={20} className="mr-2" />
                    Se connecter avec votre compte Google
                  </button>
                  <button
                    type="button"
                    className="w-full flex items-center justify-center border-2 border-[#0F0A3C] text-[#0F0A3C] font-semibold py-2 px-4 rounded-md transition-colors duration-300 ease-in-out hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0F0A3C]"
                  >
                    <Image src="/linkedin.png" alt="linkedin" width={20} height={20} className="mr-2" />
                    Se connecter avec votre compte LinkedIn
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Left side - Login Form */}

          {/*Right side - Text */}
        </div>
        <div className="w-1/2 flex items-center ">
          <p className=" text-7xl font-extrabold text-white absolute top-60 bottom-96" >
            Saisissez votre e-mail pour vous connecter et poursuivre vos candidatures !
          </p>
        </div>
      </div>
      <Image src="/Mask-group.svg" alt="login" width={600} height={600} className="absolute bottom-0 right-0" />
    </>
  );
}

export default LoginComponent;
