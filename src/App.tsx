// src/App.tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import ArticleDetails from './pages/ArticleDetails';
import Contact from './pages/Contact';
import Home from './pages/Home';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="articles/:id" element={<ArticleDetails />} />
            <Route path="contact" element={<Contact />} />

            {/* Add more routes here */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
