import "./Input.css";
import React, { useState } from "react";

export default (props) => {
  const [valor, setValor] = useState("Inicial");
  function quandoMudar(e) {
    setValor(e.target.value);
  }
  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column", // deixa um input abaixo do outro
        }}
      ></div>
      <input value={valor} onChange={quandoMudar} />
      <input value={valor} readOnly />
      <input value={undefined} /*nao controlado*/ />
    </div>
  );
};
