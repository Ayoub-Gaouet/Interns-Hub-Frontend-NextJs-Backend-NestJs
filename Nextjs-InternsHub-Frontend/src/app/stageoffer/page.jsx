import React from 'react'
import NavComponent from '../components/NavComponent'
import StageOffreBlock from '../components/StageOffreBlock'
import Newsletter from '../components/Newsletter'


const page = () => {
  return (
    <>
    <div style={{ backgroundImage: "url('/bg-entreprise.png')" }} >
    <NavComponent />
    <StageOffreBlock />
    </div>
    <Newsletter style={{ backgroundImage: "url('/bg-newssletter.png')" }}  />
    </>
  )
}

export default page

