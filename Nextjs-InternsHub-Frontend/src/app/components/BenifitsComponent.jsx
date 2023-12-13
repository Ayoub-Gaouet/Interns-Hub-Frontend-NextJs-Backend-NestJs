import React from 'react';
import Image from 'next/image';

const BenefitCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md m-4">
      <div className="flex items-center space-x-2 mb-4">
        <Image src="/2-1.png" alt="Verification Icon" width={24} height={24} />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

const BenifitsComponent = () => {
  return (
    <div className="py-10 w-8/12 mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-10"> <span className='font-extrabold	'>Pourquoi choisir Interns Hub?</span> <br/> Bénéfices & fonctionnalités</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <BenefitCard
          title="Recommandations personnalisées"
          description="Maximisez vos chances de trouver le stage idéal."
        />
        <BenefitCard
          title="Suivi de stage"
          description="Tableau de bord pour suivre vos demandes, entretiens et progrès de stage."
        />
        <BenefitCard
          title="Développement professionnel"
          description="Faire un stage vous aide à développer vos compétences professionnelles."
        />
        <BenefitCard
          title="Profils d'entreprises"
          description="Des profils d'entreprises détaillés pour des décisions éclairées."
        />
        <BenefitCard
          title="Processus de candidature facile"
          description="Simplifiez les candidatures avec un système convivial et transparent."
        />
        <BenefitCard
          title="Nombreuses listes de stages"
          description="Base de données diversifiée de stages pour plus d'opportunités."
        />
      </div>
    </div>
  );
};

export default BenifitsComponent;
