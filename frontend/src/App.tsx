import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './hooks';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
