import { useEffect, useState } from 'react';

import {
  List, Message, MessageContent, MessageListWrapper, MessageUser, UserImage,
} from './style';

import logoImg from '../../assets/images/logo.svg';

import MessagesService from '../../services/MessagesService';

interface IMessage {
  id: string,
  text: string,
  user: {
    name: string,
    avatar_url: string,
  }
}

function MessageList() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    (async () => {
      const messagesList = await MessagesService.listThreeLastMessages() as IMessage[];
      setMessages(messagesList);
    })();
  }, []);

  return (
    <MessageListWrapper>
      <img src={logoImg} alt="DoWhile 2021" />

      <List>
        {messages.map((message) => (
          <Message key={message.id}>
            <MessageContent>
              {message.text}
            </MessageContent>
            <MessageUser>
              <UserImage>
                <img src={message.user.avatar_url} alt={message.user.name} />
              </UserImage>
              <span>{message.user.name}</span>
            </MessageUser>
          </Message>
        ))}
      </List>
    </MessageListWrapper>
  );
}

export default MessageList;
