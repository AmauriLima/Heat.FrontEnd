import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../services/AuthService';

interface IUser {
  id: string,
  name: string,
  login: string,
  avatar_url: string,

}
interface IUserData {
  user: IUser
}

interface IAuthResponse {
  token: string,
  user: IUser,
}

function useAuth() {
  const history = useHistory();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('@dowhile:token') as string;
      if (token) {
        const { user: userData } = await AuthService.refreshToken(token) as IUserData;
        setUser(userData);
      }
    })();
  }, []);

  async function handleLogin() {
    const url = history.location.search;
    const hasGithubCode = url.includes('?code=');

    if (hasGithubCode) {
      const [urlWithoutCode, githubCode] = url.split('?code=');

      history.push(urlWithoutCode);

      const { user: userData, token } = await AuthService.signIn(githubCode) as IAuthResponse;

      localStorage.setItem('@dowhile:token', token);

      setUser(userData);
    }
  }

  async function handleSignOut() {
    setUser(null);
    localStorage.removeItem('@dowhile:token');
  }

  return {
    handleLogin,
    handleSignOut,
    user,
  };
}

export default useAuth;
