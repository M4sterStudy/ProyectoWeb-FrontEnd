import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigationType, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';

// Importaciones de los componentes de las páginas y otros recursos
import Login from './pages/Login/Login';
import Registro from './pages/Registro/Registro';
import { Registro2 } from './pages/Registro-login/Registro2.jsx';
import { Login2 } from './pages/Registro-login/Login2.jsx';
import About from "./pages/Inicio/Inicio.jsx";
import Inicio from "./pages/Inicio";
import Frame from './components/Shared/Footer';
import Box from './components/Shared/HeaderInicio';
import { store } from './pages/store/store.js';

function App() {
  return (
    <Provider store={store}>
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/" element={<Inicio />} />
        </Routes>
    </Provider>
  );
}

// Componente para manejar el scroll y el título de la página
function ScrollToTop() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    // Configura aquí los títulos y descripciones para otras rutas
    switch (pathname) {
      case "/":
        title = "Inicio";
        metaDescription = "Página de inicio";
        break;
      // otros casos...
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  

  return null; // No renderiza nada visualmente
}

export default App;

