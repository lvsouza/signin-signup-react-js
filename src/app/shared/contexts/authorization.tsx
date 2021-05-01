import React, { createContext, useCallback, useState } from 'react';

import { SignInService } from '../services';

interface IAuthorizationContextData {
  isAuthenticated: boolean;
  logout: () => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
}
export const AuthorizationContext = createContext<IAuthorizationContextData>({} as IAuthorizationContextData);

export const AuthorizationProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = useCallback(async (email: string, password: string) => {
    const result = await SignInService.signIn(email, password);

    if (result.success) {
      setIsAuthenticated(true);
    } else {
      if (!result.messages || result.messages.length === 0) {
        alert('Erro no login!');
      } else {
        alert(result.messages.join(',\n'));
      }

      setIsAuthenticated(false);
    }
  }, []);

  const handleLogout = useCallback(async () => {
    setIsAuthenticated(false);
  }, []);

  return (
    <AuthorizationContext.Provider value={{ isAuthenticated, login: handleLogin, logout: handleLogout }}>
      <input
        type="checkbox"
        checked={isAuthenticated}
        onChange={() => setIsAuthenticated(!isAuthenticated)}
      />

      {children}
    </AuthorizationContext.Provider>
  );
}
