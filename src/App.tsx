import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/theme/defaultTheme';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';
import { PostsContextProvider } from './context/PostsContext';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <PostsContextProvider>
          <Router />
        </PostsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
