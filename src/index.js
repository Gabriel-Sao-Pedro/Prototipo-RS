import React from 'react';
import ReactDOM from 'react-dom/client';
import Home  from "./Home"
import EQUIPAMENTO from './equipamentos/Equipamento';
import Jogo from './Jogo/Jogo'
import Pagamento from './pagamento/Pagamento'
import Pagar from './pagar'
import Edicao from './edicao'
import Login from './login'
import Cadastro from'./cadastro'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/equipamento" element={<EQUIPAMENTO />} />
        <Route path="/jogo" element={<Jogo />} />
        <Route path="/pagamento" element={<Pagamento />} />
        <Route path="/pagar" element={<Pagar />} />
        <Route path="/edicao" element={<Edicao />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
  </BrowserRouter>
);
