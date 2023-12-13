import React from 'react';
import Image from 'next/image';

const PartenariatComponent = () => {
  return (
    <div className="text-center">
      <h1 className='font-semibold	mb-5 text-xl'>En partenariat avec</h1>
      <div className="flex justify-center">
        <Image className='mx-2' src="/1630564749583-1.png" alt="logo" width={80} height={80} />
        <Image className='mx-2' src="/untitled-1.png" alt="logo" width={80} height={80} />
        <Image className='mx-2' src="/logo-face-book-1.png" alt="logo" width={80} height={80} />
      </div>
      <div className='h-10'></div>
    </div>
  );
};

export default PartenariatComponent;
