import styled, { css } from 'styled-components';

interface IUserImageWrapper {
  large?: boolean | false,
}

export const UserImageWrapper = styled.div<IUserImageWrapper>`
${({ theme, large }) => css`
padding: ${large ? '3px' : '2px'};
  background: linear-gradient(100deg, ${theme.colors.pink} 0%, ${theme.colors.orange} 100%);
`}
border-radius: 50%;
line-height: 0;

img {
  background: transparent;
  border-radius: 50%;
  ${({ theme, large }) => css`
    width: ${large ? '94px' : '30px'};
    height: ${large ? '94px' : '30px'};
    border: ${large ? '6px' : '4px'} solid ${theme.colors.black.medium};
  `}
}
`;
