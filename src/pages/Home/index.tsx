import { useContext } from 'react';
import { LoginBox, MessageList, SendMessageForm } from '../../components';
import { AuthContext } from '../../contexts/AuthContext';
import { Container } from './styles';

function Home() {
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <MessageList />
      {user
        ? <SendMessageForm />
        : <LoginBox />}
    </Container>
  );
}

export default Home;
