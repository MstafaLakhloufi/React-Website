import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjFour } from '../../data/Data';

function Products() {
  return (
    <>
        <HeroSection {...homeObjFour} />
    </>
  );
}

export default Products;