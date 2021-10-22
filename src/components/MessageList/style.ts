import styled from 'styled-components';

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
