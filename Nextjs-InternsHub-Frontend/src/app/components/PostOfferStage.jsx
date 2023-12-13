"use client";
import React, { useState ,useEffect} from 'react';
import axios from 'axios';


const PostOfferStage = () => {
  const [titre, setTitre] = useState(null);
  const [description, setDescription] = useState(null);
  const [domaine, setDomaine] = useState(null);
  const [candidatures, setCandidatures] = useState([]);
  const [localisation, setLocalisation] = useState(null);
  const [competences, setCompetences] = useState(null);
  const [duree, setDuree] = useState(null);
  const [siteWeb, setSiteWeb] = useState(null);
  const [linkedin, setLinkedin] = useState(null);
  const [numtel, setNumtel] = useState(null);
  const [paye, setPaye] = useState(false);

  useEffect(() => {
    console.log('Form state changed:', {
      titre,
      description,
      domaine,
      candidatures,
      localisation,
      competences,
      duree,
      siteWeb,
      linkedin,
      numtel,
      paye,
    });
  }, [titre, description, domaine, candidatures, localisation, competences, duree,siteWeb, linkedin, numtel, paye]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/offre-stage', {
        titre,
        description,
        domaine,
        candidatures,
        localisation,
        competences,
        duree,
        siteWeb,
        linkedin,
        numtel,
        paye,
      });
      console.log(response.data); 
      setTitre('');
      setDescription('');
      setDomaine('');
      setCandidatures([]);
      setLocalisation('');
      setCompetences('');
      setDuree('');
      setSiteWeb('');
      setLinkedin('');
      setNumtel('');
      setPaye(false);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-white"  style={{ backgroundImage: "url('/bag-page.png')" }}>
        <div className="flex flex-row items-start p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className=''>
            <div className="">
              <div className="card">
                <div className="card-body">
                  <div>
                    <label htmlFor='text' className="block text-5xl	font-size: 1.25rem; /* 20px */ font-bold text-[#0F0A3C]">Découvrez les meilleurs talents</label>
                  </div>
                  <div>
                    <label htmlFor='text'>Connectez-vous facilement avec des étudiants et des diplômés exceptionnels. Simplifiez votre processus de recrutement et libérez le potentiel de votre entreprise. Soumettez vos offres de stages dès aujourd'hui! ✨💼🚀</label>
                  </div>
                </div>
              </div>


              <form onSubmit={handleSubmit}  >
                <label htmlFor='text' className="block text-sm font-bold text-[#0F0A3C]">Remplissez le formulaire.</label>
                <div>

                  <label htmlFor="text" className="block text-sm font-bold text-[#0F0A3C]">
                    Titre
                  </label>
                  <input
                    type="text"
                    name="titre"
                    id="titre"
                    value={titre}
                    onChange={(e) => setTitre(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Titre"
                    required
                  />
                </div>

                {/*<div>

                  <label htmlFor="type" className="block text-sm font-bold text-[#0F0A3C]">
                    Type
                  </label>
                  <select
                    name="type"
                    id="type"
                    className="border border-black w-full h-12 rounded-md pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                    required
                  >
                    <option value="">Temps Plein </option>
                  </select>
                      </div>*/}


                <div>
                  <label htmlFor="location" className="block text-sm font-bold text-[#0F0A3C]">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={localisation}
                    onChange={(e) => setLocalisation(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Location"
                    required
                  />
                </div>

                <div>

                  <label htmlFor="text" className="block text-sm font-bold text-[#0F0A3C]">
                    Durée
                  </label>
                  <input
                    type="text"
                    name="durée"
                    id="durée"
                    value={duree}
                    onChange={(e) => setDuree(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="1-2 mois"
                    required
                  />
                </div>
                <div>

                  <label htmlFor="text" className="block text-sm font-bold text-[#0F0A3C]">
                    Competence
                  </label>
                  <input

                    name="competence"
                    id="competence"
                    value={competences}
                    onChange={(e) => setCompetences(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Competences "
                    required
                  />
                    </div>
               {/* <div>

                  <label htmlFor="email" className="block text-sm font-bold text-[#0F0A3C]">
                    Adresse e-mail
                  </label>
                  <input
                    name="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Adresse e-mail"
                    required
                  />
                  </div>*/}
                <div>

                  <label htmlFor="text" className="block text-sm font-bold text-[#0F0A3C]">
                    Linkedin
                  </label>
                  <input
                    type='url'
                    name="linkedin"
                    id="linkedin"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Linkedin"
                    required
                  />
                </div>
                <div>

                  <label htmlFor="text" className="block text-sm font-bold text-[#0F0A3C]">
                    Domaine
                  </label>
                  <input
                    type='text'
                    name="Domaine"
                    id="Domaine"
                    value={domaine}
                    onChange={(e) => setDomaine(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Domaine"
                    required
                  />
                </div>
                <div>

                  <label htmlFor="text" className="block text-sm font-bold text-[#0F0A3C]">
                    Site Web
                  </label>
                  <input
                    type='url'
                    name="Site Web"
                    id="Site Web"
                    value={siteWeb}
                    onChange={(e) => setSiteWeb(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Site Web"
                    required
                  />
                </div>
                <div>

                  <label htmlFor="number" className="block text-sm font-bold text-[#0F0A3C]">
                    Numéro de téléphone
                  </label>
                  <input
                    type='tel'
                    required pattern="[0-9]{8}"
                    name="number"
                    id="number"
                    value={numtel}
                    onChange={(e) => setNumtel(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Numéro de téléphone"
                  />
                </div>
                {/*<div>

                  <label htmlFor="text" className="block text-sm font-bold text-[#0F0A3C]">
                    Adresse
                  </label>
                  <input
                    name="Adresse"
                    id="Adresse"
                    className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Adresse"
                    required
                  />
                </div>*/}
                <div>
                  <label htmlFor="password" className="block text-sm font-bold text-[#0F0A3C]">
                    Payé?
                  </label>

                  <div>
                      <label htmlFor="oui" className="mr-2">
                        <input
                          type="radio"
                          id="oui"
                          name="paye"
                          value="oui"
                          className="mr-1"
                          checked={paye === true} 
                          onChange={() => setPaye(true)}
                        />
                        Oui
                      </label>
                      <label htmlFor="non">
                        <input
                          type="radio"
                          id="non"
                          name="paye"
                          value="non"
                          className="mr-1"
                          checked={paye === false}
                          onChange={() => setPaye(false)}
                        />
                        Non
                      </label>
                    </div>
                </div>
               {/* <div>

                  <label htmlFor="text" className="block text-sm font-bold text-[#0F0A3C]">
                    Mots-clés (séparés par des virgules)
                  </label>
                  <input
                    name="Mots-clés"
                    id="Mots-clés"
                    className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="HTML, CSS, JavaScript, ..."
                    required
                  />
                </div>*/}
                <div>
                  <label htmlFor="text" className="block text-sm font-bold text-[#0F0A3C]">
                    Description du post
                  </label>
                  <textarea
                    height='500px'
                    name="Description"
                    id="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded mt-1 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#23E7A1] focus:outline-none focus:ring-2 focus:ring-offset-2"


                >
                  Envoyer
                </button>
                <div className="flex justify-center items-center my-4">

                  <span className="p-2 text-gray-400 mb-1">Merci pour votre offre</span>

                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>

  );
}

export default PostOfferStage;
