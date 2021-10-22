import { FormEvent, useContext, useState } from 'react';
import { VscGithubInverted, VscSignOut } from 'react-icons/vsc';
import { UserImage } from '..';
import { AuthContext } from '../../contexts/AuthContext';
import MessagesService from '../../services/MessagesService';
import {
  Form, SendMessageFormWrapper, SignOutButton, UserInformation,
} from './style';

function SendMessageForm() {
  const [message, setMessage] = useState('');
  const { user, handleSignOut } = useContext(AuthContext);

  function handleSendMessage(event: FormEvent) {
    event.preventDefault();
    MessagesService.sendMessage(message);
    setMessage('');
  }

  return (
    <SendMessageFormWrapper>
      <SignOutButton onClick={handleSignOut}>
        <VscSignOut size={32} />
      </SignOutButton>

      <UserInformation>
        <UserImage avatar_url={user?.avatar_url} name={user?.name} large />
        <strong>{user?.name}</strong>
        <span>
          <VscGithubInverted size={16} />
          {user?.login}
        </span>
      </UserInformation>

      <Form onSubmit={handleSendMessage}>
        <label htmlFor="message">Mensagem</label>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          name="message"
          id="message"
          placeholder="Qual sua expectativa para o evento?"
        />

        <button type="submit">Enviar mensagem</button>
      </Form>
    </SendMessageFormWrapper>
  );
}

export default SendMessageForm;
