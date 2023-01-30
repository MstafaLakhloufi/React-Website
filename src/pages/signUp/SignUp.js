import React from 'react';
import HeroSection from '../../components/HeroSection';
import { homeObjThree } from '../../data/Data';

function SignUp() {
  return (
    <>
        <HeroSection {...homeObjThree} />
    </>
  );
}

export default SignUp;