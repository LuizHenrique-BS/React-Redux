import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default () => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Aleatorio max = {60} min= {1} />
    <Fragmento />
    <ComParametro titulo="Situação do Aluno" aluno="Pedro Silva" nota={8.3} />
    <Primeiro></Primeiro>
  </div>
);
