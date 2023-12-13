import React from 'react'
import PartenariatComponent from './PartenariatComponent'
import IntroComponent from './IntroComponent'
import NavComponent from './NavComponent'
import FirstBloc from './FirstBloc'
import LandJob from './LandJob'
import BenifitsComponent from './BenifitsComponent'
import EtapeComponent from './EtapeComponent'
import Newsletter from './Newsletter'

const LandingBloc = () => {
  return (
    <>
    <div className="bg-cover bg-center" style={{ backgroundImage: "url('/cover.png')" }}>
      <NavComponent />
      <IntroComponent />
      <PartenariatComponent />
    </div>

    <FirstBloc />
    <LandJob />
    <BenifitsComponent  className="bg-cover bg-center" style={{ backgroundImage: "url('/details.png')" }} />
    <EtapeComponent />
    <Newsletter />
    </>
  )
}

export default LandingBloc
