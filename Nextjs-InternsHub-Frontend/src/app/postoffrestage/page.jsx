import React from 'react';
import PostOfferStage from '../components/PostOfferStage';
import Newsletter from "../components/Newsletter";
import NavComponent from "../components/NavComponent";


const page = () => {
  return (
    <div>
      <NavComponent />
      <PostOfferStage/>
      <Newsletter />
    </div>
  );
}

export default page;
