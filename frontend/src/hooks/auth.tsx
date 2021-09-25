import React, { createContext, useCallback, useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

interface AuthState {
  token?: string;
  name: string;
  type: 'student' | 'teacher';
}

export interface AuthContextData {
  authState: AuthState;
  signIn(credentials: AuthState): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@JG_Classroom:token');
    const name = localStorage.getItem('@JG_Classroom:name');
    const type = localStorage.getItem('@JG_Classroom:type');

    if (token && name && (type === 'student' || type === 'teacher')) {
      return { token, name, type };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(
    async ({ token = uuid(), name, type }: AuthState) => {
      localStorage.setItem('@JG_Classroom:token', token);
      localStorage.setItem('@JG_Classroom:name', name);
      localStorage.setItem('@JG_Classroom:type', type);

      setData({ token, name, type });
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@JG_Classroom:token');
    localStorage.removeItem('@JG_Classroom:name');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ authState: data, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
