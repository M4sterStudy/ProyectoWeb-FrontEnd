import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Registro from './Pages/Registro/Registro';
import { Registro2 } from './Pages/Registro2/Registro2.jsx';
import Box from './Components/Shared/HeaderInicio';
import Frame from './Components/Shared/Footer';
import About from "./Pages/Inicio/Inicio.jsx"
import { store } from './Pages/store/store.js';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/registro2" element={<Registro2 />} />
        <Route path="/inicio" element={<About />} />
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        {/* ... otras rutas */}
      </Routes>
    </Router>
    </Provider>

  );
}

export default App;
