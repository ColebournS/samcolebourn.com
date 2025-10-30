'use client';
import { useEffect, useRef } from 'react';

import useFluidCursor from '../../lib/useFluidCursor';

const FluidCursor = () => {
  const initializedRef = useRef(false);

  useEffect(() => {
    // Only initialize once when component mounts
    if (!initializedRef.current) {
      initializedRef.current = true;
      // Call the initialization function (not actually a React hook)
      const initializeFluid = useFluidCursor;
      initializeFluid();
    }
  }, []);

  return (
    <div className='fixed top-0 left-0 -z-10'>
      <canvas id='fluid' className='w-screen h-screen' />
    </div>
  );
};
export default FluidCursor;
