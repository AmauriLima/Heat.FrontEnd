import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { AuthProvider } from '../../contexts/AuthContext';
import { Home } from '../../pages';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Home />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
