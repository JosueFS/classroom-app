import React from 'react';

import { AuthProvider } from './auth';
import { CustomThemeProvider } from './theme';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <CustomThemeProvider>{children}</CustomThemeProvider>
  </AuthProvider>
);

export default AppProvider;
