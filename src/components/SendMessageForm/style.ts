import styled from 'styled-components';

export const SendMessageFormWrapper = styled.div`
  background: #1b1b1f;
  padding: 24px;
  align-self: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  position: relative;
`;

export const SignOutButton = styled.button`
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme.colors.pink};
  position: absolute;
  left: 24px;
  top: 24px;

  &:hover {
    filter: brightness(0.9);
  }
`;

export const UserInformation = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 24px;
    line-height: 30px;
    margin-top: 16px;
  }

  span {
    display: flex;
    align-items: center;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.gray.medium};

    svg {
      margin-right: 8px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-top: 48px;

  background: ${({ theme }) => theme.colors.black.light};

  label {
    padding: 18px 24px;
    font-size: 20px;
    background: ${({ theme }) => theme.colors.gray.darker};
    font-weight: bold;
    text-align: left;
  }

  textarea {
    background-color: transparent;
    border: 0;
    padding: 24px;
    resize: none;
    height: 160px;
    color: ${({ theme }) => theme.colors.gray.light};
    font-size: 16px;
    line-height: 24px;

    &:focus {
      outline: 0;
    }

    &::placeholder {
      color: ${({ theme }) => theme.colors.gray.dark};
    }
  }

  button {
    align-self: flex-end;
    background: ${({ theme }) => theme.colors.pink};
    margin: 24px;
    padding: 0 32px;
    border: 0;
    height: 40px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
