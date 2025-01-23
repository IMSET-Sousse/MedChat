import React from 'react';
import { css } from '@emotion/react';

const animationStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  background-color: #007bff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  color: #ffffff;
`;

function Animation() {
  return <div css={animationStyles}>MEDCHAT</div>;
}

export default Animation;