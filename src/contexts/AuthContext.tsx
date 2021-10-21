import { createContext, ReactNode, useEffect } from 'react';
import useAuth from '../hooks/useAuth';

interface IAuthProvider {
  children: ReactNode
}

interface IUser {
  id: string,
  name: string,
  login: string,
  avatar_url: string,
}

interface IAuthContextData {
  user: IUser | null,
  signInUrl: string,
  handleSignOut: () => void;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: IAuthProvider) {
  const signInUrl = 'https://github.com/login/oauth/authorize?scope=user&client_id=736eaf50501ac1fe2ec5';

  const {
    user, handleLogin, handleSignOut,
  } = useAuth();

  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ signInUrl, user, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
