import React from 'react'

const StatCard = ({ number, text, bgColor, children }) => (
  <div className={`flex-1 ${bgColor} m-4 p-6 rounded-lg shadow-md flex flex-col items-center`}>
    <span className="text-5xl font-bold">{number}</span>
    <span className="mt-2">{text}</span>
    {children}
  </div>
);

const LandJob = () => {
  return (
    <div className="py-10 w-9/12 mx-auto px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 dotted-border">
        Get ready
        <br />
        To land your job!
      </h2>
      <div className="flex justify-around items-center">
        <StatCard className=" h-24" number="100K" text="Company in Tunisian market" bgColor="bg-white">
          <button className="mt-4 h-10 text-green-800 py-2 px-4 rounded-full"></button>
        </StatCard>

        <StatCard className=" h-24" number="111K" text="soyez visible auprès des recruteurs" bgColor="bg-green-200">

          <button className="mt-4 bg-black text-white py-2 px-4 rounded-full">Déposer mon CV</button>
        </StatCard>
        <StatCard className=" h-24" number="111K" text="University student" bgColor="bg-white">

          <button className="mt-4 h-10 text-yellow-800 py-2 px-4 rounded-full"></button>
        </StatCard>
        <StatCard className=" h-24" number="111K" text="soyez alerté rapidement" bgColor="bg-yellow-200">

        <button className="mt-4 bg-black text-white py-2 px-4 rounded-full">Créer mon alerte</button>
        </StatCard>
      </div>
    </div>
  )
}

export default LandJob
