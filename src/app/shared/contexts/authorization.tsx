import React, { createContext, useCallback, useState } from 'react';

import { SignInService } from '../services';

interface IAuthorizationContextData {
  isAuthenticated: boolean;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
}
export const AuthorizationContext = createContext<IAuthorizationContextData>({} as IAuthorizationContextData);

export const AuthorizationProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('accessToken'));

  const handleLogin = useCallback(async (email: string, password: string) => {
    const { success, messages, data } = await SignInService.signIn(email, password);

    if (success && data?.accessToken) {
      setIsAuthenticated(true);
      localStorage.setItem('accessToken', data.accessToken);
    } else {
      if (!messages || messages.length === 0) {
        alert('Erro no login!');
      } else {
        alert(messages.join(',\n'));
      }

      setIsAuthenticated(false);
      localStorage.removeItem('accessToken');
    }
  }, []);

  const handleLogout = useCallback(async () => {
    setIsAuthenticated(false);
    localStorage.removeItem('accessToken');
  }, []);

  return (
    <AuthorizationContext.Provider value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthorizationContext.Provider>
  );
}
