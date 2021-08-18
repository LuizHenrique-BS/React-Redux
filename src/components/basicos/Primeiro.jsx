import React from "react";

export default function Primeiro() {
  // nao eh obrigatorio ter nome na funcao por default
  const msg = "Seja bem vindo(a)!";
  return (
    <div>
      <h2>Primeiro Componente</h2>
      <p> {msg} </p>
    </div>
  );
}
