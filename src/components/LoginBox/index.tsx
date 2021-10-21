import { VscGithubInverted } from 'react-icons/vsc';

import { LoginBoxWrapper, SignInWithGithub } from './style';

function LoginBox() {
  return (
    <LoginBoxWrapper>
      <strong>Entre e compartilhe sua mensagem</strong>
      <SignInWithGithub to="#">
        <VscGithubInverted size={24} />
        Entrar com Github
      </SignInWithGithub>
    </LoginBoxWrapper>
  );
}

export default LoginBox;
