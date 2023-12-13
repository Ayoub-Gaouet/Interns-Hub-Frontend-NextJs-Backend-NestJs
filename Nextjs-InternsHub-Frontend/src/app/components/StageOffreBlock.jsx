"use client";

import React from 'react';
import Image from 'next/image';
import axios from 'axios';


import { useState,useEffect } from 'react';

const StageOffreBlock = () => {
  //const { id } = useParams();
  const  [stage,setStage]=useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTitre, setSearchTitre] = useState('');
  useEffect(() => {
    axios.get(`http://localhost:5000/offre-stage`).then((res) => {
      console.log(res.data);
      setStage(res.data);
    });
  }
  );
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredStages = stage.filter((stage) =>
          stage.titre.toLowerCase().includes(searchTitre.toLowerCase()) &&
          stage.localisation.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearchTitre = (e) => {
    setSearchTitre(e.target.value);
  };

 

  


  return (
    <div className='w-9/12 mt-20 mx-auto'>
      <div>
        <p className='text-6xl text-center font-extrabold'>
          Trouvez votre <span className='text-[#23E7A1]'>nouveau stage</span> maintenant
        </p>
        <p className='w-10/12 mx-auto mt-10 text-3xl'>
          Des milliers de stagiaires dans les secteurs de l&lsquo;informatique, de l&lsquo;ingénierie et de la technologie vous attendent.
        </p>
      </div>
      <div className='flex justify-center w-7/12 mx-auto mt-10'>
        <div className='flex bg-white border-2 border-r-0 rounded-l-full overflow-hidden flex-grow'>
          <div className='pl-5 pr-2 py-2 flex items-center'>
            <Image src="/search.png" alt="Search" width={24} height={24} />
          </div>
          <input
            className='py-2 px-4 outline-none flex-grow'
            type='text'
            onChange={handleSearchTitre}
            placeholder='Quel poste recherchez-vous ?'
          />
        </div>
        <div className='flex border-2 rounded-r-full overflow-hidden'>
          <div className='pl-5 pr-2 py-2 flex items-center'>
            <Image src="/search.png" alt="Location" width={24} height={24} />
          </div>
          <input
            className='py-2 px-4 outline-none'
            type='text'
            placeholder='Localisation'
            onChange={handleSearch}
            style={{ flexBasis: '200px' }} // You can adjust this value as needed
          />
          <button className='bg-[#23E7A1] text-white rounded-r-lg p-2 flex items-center'>
            <span className="arrow-right">→</span>
          </button>
        </div>
      </div>

      <div className="w-full mt-20 mx-auto">
      <div className="flex bg-white" >

        <div className="w-1/4 px-5">
          <h3 className="text-2xl font-bold mb-6">Filtres</h3>

          <div className="mb-10">
            <h4 className="font-semibold mb-4">Localisation</h4>

            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="localisation" className="form-radio text-[#23E7A1]" />
                <span className="ml-2">Près de chez moi</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="localisation" className="form-radio text-[#23E7A1]" />
                <span className="ml-2">Près de chez moi</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="localisation" className="form-radio text-[#23E7A1]" />
                <span className="ml-2">Près de chez moi</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="localisation" className="form-radio text-[#23E7A1]" />
                <span className="ml-2">Près de chez moi</span>
              </label>

            </div>
          </div>
          {/* Date of Posting Filters */}
          <div>
            <h4 className="font-semibold mb-4">Date of posting</h4>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="date" className="form-radio text-[#23E7A1]" />
                <span className="ml-2">Toutes les fois</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="date" className="form-radio text-[#23E7A1]" />
                <span className="ml-2">Toutes les fois</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="date" className="form-radio text-[#23E7A1]" />
                <span className="ml-2">Toutes les fois</span>
              </label>

            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="w-3/4 pl-10">
          <h3 className="text-4xl font-bold mb-10">3177 Inter</h3>
          <div className="space-y-6">
          {filteredStages.map((stage) => (
            <div className="border p-6 bg-white rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 mr-4">
                {/* Replace with the actual logo path */}
                <Image src="/untitled-1.png" width={50} height={50} alt="Company Logo" />
              </div>
              <div>
                <h2 className='text-gray-400'> wait for id </h2>
                <h4 className="text-xl font-semibold">{stage.titre} | {stage.domaine}</h4>
                <div className='flex flex-wrap'>
                  <div className="flex items-center mx-2 my-1">
                    <Image src="/MapPinLine.png" alt="Location Icon" width={20} height={20} />
                    <p className="text-gray-600 ml-2">{stage.localisation} </p>
                  </div>
                  <div className="flex items-center mx-2 my-1">
                    <Image src="/Clock.png" alt="Duree Icon" width={20} height={20} />
                    <p className="text-gray-600 ml-2">{stage.duree}</p>
                  </div>
                  <div className="flex items-center mx-2 my-1">
  <Image src="/CurrencyDollar.png" alt="Salaire Icon" width={20} height={20} />
  <p className="text-gray-600 ml-2">
    {stage.paye ? 'Paye' : 'Non Paye'}
  </p>
</div>
                  <a href={stage.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center mx-2 my-1">
                    <Image src="/linkedin.png" alt="LinkedIn Icon" width={20} height={20} />
                    <p className="text-gray-600 ml-2">LinkedIn</p>
                  </a>
                  <div className="flex items-center mx-2 my-1">
                    <Image src="/phone-call 1.png" alt="Tel Phone Icon" width={20} height={20} />
                    <p className="text-gray-600 ml-2">{stage.numtel}</p>
                  </div>
                  <div className="flex items-center mx-2 my-1">
                    <a href={stage.siteWeb} target="_blank" rel="noopener noreferrer" className="flex items-center mx-2 my-1">
                    <Image src="/siteWeb.png" alt="LinkedIn Icon" width={20} height={20} />
                    <p className="text-gray-600 ml-2">SiteWeb</p>
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-gray-600">
              {stage.description} <br></br>
              et les compentence rechercher sont : {stage.competences}
            </p>
          </div>
            ))}
            
            
            <div className="flex justify-center">

              <div className="flex items-center space-x-1">

                <button className="px-3 py-1 border rounded">1</button>
                <button className="px-3 py-1 border rounded">2</button>
                <button className="px-3 py-1 border rounded">3</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default StageOffreBlock;
