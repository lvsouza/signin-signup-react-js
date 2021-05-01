import { AuthorizationProvider } from './shared/contexts/authorization';
import { ThemeProvider } from './shared/contexts/theme';
import { Routes } from './routes/Routes';
import './styles/global.css';

export const App = () => {
  return (
    <ThemeProvider>
      <AuthorizationProvider>
        <Routes />
      </AuthorizationProvider>
    </ThemeProvider>
  );
}
