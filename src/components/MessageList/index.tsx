import {
  List, Message, MessageContent, MessageListWrapper, MessageUser, UserImage,
} from './style';

import logoImg from '../../assets/images/logo.svg';

function MessageList() {
  return (
    <MessageListWrapper>
      <img src={logoImg} alt="DoWhile 2021" />

      <List>
        {new Array(3).fill('').map(() => (
          <Message key={Math.random()}>
            <MessageContent>
              Não vejo a hora de começar esse evento,
              com certeza vai ser o melhor de todos os tempos, vamooo pra cima! 🔥🔥
            </MessageContent>
            <MessageUser>
              <UserImage>
                <img src="https://github.com/AmauriLima.png" alt="" />
              </UserImage>
              <span>Diego Fernandes</span>
            </MessageUser>
          </Message>
        ))}
      </List>
    </MessageListWrapper>
  );
}

export default MessageList;
