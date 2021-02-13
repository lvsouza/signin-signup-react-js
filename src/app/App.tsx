import React from 'react';

import { ThemeProvider } from './shared/contexts/theme';
import { Routes } from './routes/Routes';
import './styles/global.css';

export const App = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}
