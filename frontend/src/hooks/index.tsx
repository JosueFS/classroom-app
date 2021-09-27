import React from 'react';

import { AuthProvider } from './auth';
import { CustomThemeProvider } from './theme';
import { WebSocketProvider } from './websocket';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <WebSocketProvider>
      <CustomThemeProvider>{children}</CustomThemeProvider>
    </WebSocketProvider>
  </AuthProvider>
);

export default AppProvider;
