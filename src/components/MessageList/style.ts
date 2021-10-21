import styled, { css } from 'styled-components';

export const MessageListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  > img {
    height: 28px;
    margin: 32px 0;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex: 1;
  justify-content: center;
`;

export const Message = styled.li`
  max-width: 440px;

  &:nth-child(2) {
    margin-left: 80px;
  }
`;

export const MessageContent = styled.p`
  font-size: 20px;
  line-height: 28px;
`;

export const MessageUser = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;

  span {
    font-size: 16px;
    margin-left: 12px;
  }
`;

export const UserImage = styled.div`
  padding: 2px;
  ${({ theme }) => css`
    background: linear-gradient(100deg, ${theme.colors.pink} 0%, ${theme.colors.orange} 100%);
  `}
  border-radius: 50%;
  line-height: 0;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.colors.black.medium};
  }
`;
