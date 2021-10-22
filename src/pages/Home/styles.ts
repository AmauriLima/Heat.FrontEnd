import styled, { css } from 'styled-components';

import backgroundSvg from '../../assets/images/background.svg';

interface IContainer {
  signed: boolean
}

export const Container = styled.main<IContainer>`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 453px;
  column-gap: 120px;
  position: relative;

  ${({ signed }) => signed && css`
    &::before {
      content: '';
      height: 100vh;
      width: 420px;
      background: url(${backgroundSvg}) no-repeat;
      background-size: cover;
      position: absolute;
      right: -200px;
      top: 0;
    }
  `}
`;
