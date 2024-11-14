import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Calificaciones from './Trabajadores/Calificaciones';
import ListaClientes from './Trabajadores/Docente'; // Assuming ListaClientes is the Docentes component
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <Calificaciones />
      <ListaClientes />
    </div>
  </React.StrictMode>
);

reportWebVitals();
