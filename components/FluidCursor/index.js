'use client';
import { useEffect } from 'react';

import useFluidCursor from '../../lib/useFluidCursor';

const FluidCursor = () => {
  useEffect(() => {
    useFluidCursor();
  }, []);

  return (
    <div className='fixed top-0 left-0 -z-10'>
      <canvas id='fluid' className='w-screen h-screen' />
    </div>
  );
};
export default FluidCursor;
