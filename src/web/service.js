import React from 'react';
import styled, { keyframes } from 'styled-components';
import SimpleDialogDemo from './dialog';

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const BouncingDiv = styled.div`
  animation: ${bounceAnimation} 0.5s infinite;
`;

const BouncingAnimation = () => {
  return <BouncingDiv>
    <div>
        <h3 className='text-white'>Animation</h3>
        <SimpleDialogDemo/>
    </div>
  </BouncingDiv>;
};

export default BouncingAnimation;
