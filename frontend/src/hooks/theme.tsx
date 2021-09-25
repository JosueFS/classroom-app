import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ThemeProvider } from 'styled-components';

import { student, teacher } from '../styles/theme';

interface IThemeContext {
  changeTheme(): void;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [isStudent, setIsStudent] = useState(() => {
    const userType = localStorage.getItem('@JG_Classroom:type') === 'teacher';

    if (userType) return !userType;

    localStorage.setItem('@JG_Classroom:type', 'student');

    return true;
  });

  const changeTheme = useCallback(() => {
    setIsStudent(!isStudent);
  }, [isStudent]);

  useEffect(() => {
    localStorage.setItem(
      '@JG_Classroom:type',
      isStudent ? 'student' : 'teacher',
    );
  }, [isStudent]);

  return (
    <ThemeProvider theme={isStudent ? student : teacher}>
      <ThemeContext.Provider value={{ changeTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}
