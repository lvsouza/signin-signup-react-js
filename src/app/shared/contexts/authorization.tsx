import { createContext, useState } from 'react';

interface IAuthorizationContextData {
  isAuthenticated: boolean;
}
export const AuthorizationContext = createContext<IAuthorizationContextData>({} as IAuthorizationContextData);

export const AuthorizationProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthorizationContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthorizationContext.Provider>
  );
}
