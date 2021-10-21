import { LoginBox, MessageList } from '../../components';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <MessageList />
      <LoginBox />
    </Container>
  );
}

export default Home;
