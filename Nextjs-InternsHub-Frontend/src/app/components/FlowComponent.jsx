'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';




const ProgressBar = ({ step }) => {

  const widths = {
    1: '25%',
    2: '50%',
    3: '75%',
    4: '100%',

  };

  return (
    <div className='relative w-full mb-10'>

  <div className='absolute w-full bg-gray-300 h-2 top-1/2 transform -translate-y-1/2'></div>


  <div className='absolute w-0 bg-[#23E7A1] h-2 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-in-out' style={{ width: widths[step] }}></div>

  <div className={`absolute left-0 transform -translate-x-1/2 -translate-y-1/2 ${step >= 1 ? 'bg-[#23E7A1]' : 'bg-white border-2 border-gray-300'} rounded-full w-8 h-8 top-1/2`}></div>
  <div className={`absolute left-1/4 transform -translate-x-1/2 -translate-y-1/2 ${step >= 2 ? 'bg-[#23E7A1]' : 'bg-white border-2 border-gray-300'} rounded-full w-8 h-8 top-1/2`}></div>
  <div className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${step >= 3 ? 'bg-[#23E7A1]' : 'bg-white border-2 border-gray-300'} rounded-full w-8 h-8 top-1/2`}></div>
  <div className={`absolute left-3/4 transform -translate-x-1/2 -translate-y-1/2 ${step >= 4 ? 'bg-[#23E7A1]' : 'bg-white border-2 border-gray-300'} rounded-full w-8 h-8 top-1/2`}></div>
</div>

  );
};

const FlowComponent = () => {
  const [step, setStep] = useState(1);

  const handleContinue = () => {
    
    setStep((prevStep) => (prevStep < 4 ? prevStep + 1 : prevStep));
  };

  const handleBack = () => {
    setStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
  };
  const [radioData, setRadioData] = useState({
    user: {
      role: '',
      localisation: '',
      secteur: '',
      linkedin: '',
      siteWeb: '',
      Competences: '',
      Localisation: '',
      resume: '',
    },
  });
  
  
  
  
  const [formData, setFormData] = useState({
    user: {
      nom: '',
      prenom: '',
      email:
      typeof window !== 'undefined'
        ? (localStorage.getItem('email') || '').replace(/"/g, '')
        : '',
    password:
      typeof window !== 'undefined'
        ? (localStorage.getItem('password') || '').replace(/"/g, '')
        : '',
    },
    localisation: '',
    secteur: '',
    siteWeb: '',
    linkedin: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    console.log('Form Data:', formData);
  };

  
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      user: {
        ...prevFormData.user,
        [name]: value,
      },
    }));
    setFormDataIntern((prevFormDataIntern) => ({
      
      ...prevFormDataIntern,
      user: {
        ...prevFormDataIntern.user,
        [name]: value,
      },
    }));
    
    console.log('Form Data:', formDataIntern);
  };
  
  const handleSubmit = async (e) => {
    console.log('Submitting form...');
    e.preventDefault();
  if(radioData.user.role === 'recruiter'){
    try {
      const response = await axios.post('http://localhost:5000/entreprise', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Response:', response.data);
    } catch (error) {
      console.error('There was a problem with the Axios request:', error);
    }
  };
  if (radioData.user.role === 'intern') {
    
    try {
      const response = await axios.post(
        'http://localhost:5000/etudiant',
        formDataIntern,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Response:', response.data);
    } catch (error) {
      console.error('There was a problem with the Axios request:', error);
    }
  }
};
  const [formDataIntern, setFormDataIntern] = useState({
    user: {
      nom: '',
      prenom: '',
      email:
      typeof window !== 'undefined'
        ? (localStorage.getItem('email') || '').replace(/"/g, '')
        : '',
    password:
      typeof window !== 'undefined'
        ? (localStorage.getItem('password') || '').replace(/"/g, '')
        : '',
    },
    localisation: '',
    competences: '',
    //resume: '',
  });
  const handleChangeIntern = (e) => {
    const { name, value } = e.target;
    setFormDataIntern((prevFormDataIntern) => ({
      ...prevFormDataIntern,
      [name]: value,
    }));
    console.log('Form Data:', formDataIntern);
  }
  const importAll = (r) => {
    let images = {};
    r.keys().forEach((key) => (images[key] = r(key)));
    return images;
  };

  const images = importAll(require.context('../assets/images', false, /.(png|jpe?g|svg)$/));
 




  console.log('Render - Form Data:', formData);
  console.log('Render - Form Data for Interns:', formDataIntern);

  const handleButtonClick = (type) => {
    setRadioData((prevRadioData) => ({
      ...prevRadioData,
      user: {
        ...prevRadioData.user,
        role: type,
      },
    }));
  };


  

  

  return (
    <div className='w-7/12 mx-auto mt-24'>
      <ProgressBar className='mt-10' step={step} />
      <br />
      <br />
      {step === 1 && (
        <>
          <label htmlFor='prenom' className='text-sm font-extrabold my-3'>Votre Prénom</label>
          <input
            type='text'
            id='prenom'
            name='prenom'
            value={formData.user.prenom}
            onChange={handleUserChange}

            className='w-full p-4 pr-12 text-sm text-black border border-gray-900 rounded-lg placeholder-gray-500'
            placeholder='Entrer Votre Prénom'
            required
          />
          <div className='h-5'></div>
          <label htmlFor='nom' className='text-sm font-extrabold my-3'>Votre Nom</label>
          <input
            type='text'
            name='nom'
            id='nom'
            value={formData.user.nom}
            onChange={handleUserChange}
            className='w-full p-4 pr-12 text-sm text-black border border-gray-900 rounded-lg placeholder-gray-500'
            placeholder='Entrer Votre Nom'
            required
          />
        </>
      )}

{step === 2 && (
  <>
    <div className='text-2xl font-bold mb-5'>Vous êtes</div>
    <label className='block'>
      <input
        type='radio'
        name='role'
        value='intern'
        className='mr-2'
        onChange={() => handleButtonClick('intern')}
      />
      Un chercheur de stage
    </label>
    <label className='block'>
      <input
        type='radio'
        name='role'
        value='recruiter'
        className='mr-2'
        onChange={() => handleButtonClick('recruiter')}
      />
      Un recruteur
    </label>
  </>
)}

{step === 3 && (
  <>
    {radioData.user.role === 'recruiter' && (
      <>
        <label htmlFor='localisation' className='text-sm font-extrabold my-3'>Localisation</label>
        <input
          type='text'
          id='localisation'
          name='localisation'
          value={formData.localisation}
          onChange={handleChange}
          className='w-full p-4 pr-12 text-sm text-black border border-gray-900 rounded-lg placeholder-gray-500'
          placeholder='Entrer votre localisation'
          required
        />
        
        <label htmlFor='secteur' className='text-sm font-extrabold my-3'>Secteur</label>
        <input
          type='text'
          id='secteur'
          name='secteur'
          value={formData.secteur}
          onChange={handleChange}
          className='w-full p-4 pr-12 text-sm text-black border border-gray-900 rounded-lg placeholder-gray-500'
          placeholder='Entrer votre Secteur'
          required
        />

        <label htmlFor='linkedin' className='text-sm font-extrabold my-3'>linkedin</label>
        <input
          type='text'
          id='linkedin'
          name='linkedin'
          value={formData.linkedin}
          onChange={handleChange}
          className='w-full p-4 pr-12 text-sm text-black border border-gray-900 rounded-lg placeholder-gray-500'
          placeholder='Entrer votre linkedin'
          required
        />

        <label htmlFor='siteWeb' className='text-sm font-extrabold my-3'>siteWeb</label>
        <input
          type='text'
          id='siteWeb'
          name='siteWeb'
          value={formData.siteWeb}
          onChange={handleChange}
          className='w-full p-4 pr-12 text-sm text-black border border-gray-900 rounded-lg placeholder-gray-500'
          placeholder='Entrer votre siteWeb'
          required
        />
      </>
    )}

    {radioData.user.role === 'intern' && (
      <>
        <label htmlFor='competences' className='text-sm font-extrabold my-3'>competences</label>
        <input
          type='text'
          id='competences'
          name='competences'
          value={formDataIntern.competences}
          onChange={handleChangeIntern}
          className='w-full p-4 pr-12 text-sm text-black border border-gray-900 rounded-lg placeholder-gray-500'
          placeholder='Entrer les Competences'
          required
        />
        
        <label htmlFor='localisation' className='text-sm font-extrabold my-3'>Localisation</label>
        <input
          type='text'
          id='localisation'
          name='localisation'
          value={formDataIntern.localisation}
          onChange={handleChangeIntern}
          className='w-full p-4 pr-12 text-sm text-black border border-gray-900 rounded-lg placeholder-gray-500'
          placeholder='Entrer votre Localisation'
          required
        />
        
        {/*<label htmlFor='resume' className='text-sm font-extrabold my-3'>Resume</label>
        <input
          type='file'
          id='resume'
          accept="resume/*"
          name='resume'
          value={formDataIntern.resume}
          onChange={handleResumeChange}
          className='w-full p-4 pr-12 text-sm text-black border border-gray-900 rounded-lg placeholder-gray-500'
          placeholder='Entrer votre Resume'
          required
        />*/}
      </>
    )}
  </>
)}


      <div className="flex justify-between mt-5">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="inline-flex items-center bg-gray-200 text-[#0F0A3C] font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Retour
            {/* Replace with an appropriate icon */}
          </button>
        )}
        <button
            onClick={step < 4 ? handleContinue : handleSubmit }
            className="inline-flex items-center bg-[#23E7A1] text-[#0F0A3C] font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
          {step < 4 ? 'Continuer' : 'Terminer'}
         
          <Image src="/svg-cta-link-arrow-1.svg" alt="arrow" width={20} height={20} className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default FlowComponent;

