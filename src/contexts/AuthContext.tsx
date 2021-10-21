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
  const {
    user, signInUrl, handleLogin, handleSignOut,
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
