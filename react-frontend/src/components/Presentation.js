// components/Presentation.js
import React from 'react';
import { css } from '@emotion/react';

const presentationStyles = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  height: 50vh;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

function Presentation({ title, subtitle, features }) {
  return (
    <div css={presentationStyles}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default Presentation;