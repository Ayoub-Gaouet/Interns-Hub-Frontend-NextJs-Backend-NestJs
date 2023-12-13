import React from 'react'
import BlockComponent from '../components/BlockComponent'
import Nav from '../components/NavComponent'
import StepIndicator from '../components/StepIndicator'
import PartenariatComponent from '../components/PartenariatComponent'
import BenefitsEnrepriseComponent from '../components/BenefitsEnrepriseComponent'
import Newsletter from '../components/Newsletter'

const page = () => {
  return (
    <div style={{ backgroundImage: "url('/bg-entreprise.png')" }}>
      <Nav />
      <BlockComponent />
      <StepIndicator />
      <BenefitsEnrepriseComponent />
      <PartenariatComponent />

      <div className='mt-12' style={{ backgroundImage: "url('/bg-newssletter.png')" }}>
        <Newsletter />
      </div>

    </div>
  )
}

export default page
