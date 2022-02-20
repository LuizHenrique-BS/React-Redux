import "./Mega.css";
import "./Gerador";
import React, { useState } from "react";

export default (props) => {
  const [numeros, setNumeros] = useState(0);

  function gerarNumeros(qtd) {
    var arr = [];
    const [max, min] = [1, 60];
    let i = 0;
    while (i < qtd) {
      let igual = false;
      var n = Math.floor(Math.random() * (max - min + 1)) + min;
      for (let j = 0; j < arr.length; j++) {
        if (n === arr[j]) {
          igual = true;
        }
      }
      if (!igual) {
        arr.push(n);
        ++i;
      }
    }

    return arr.sort(function (a, b) {
      return a - b;
    });
  }

  function mostrarNumeros(vetor) {
    return vetor.map((obj) => <div key={obj}>{obj}</div>);
  }

  function update(e) {
    setNumeros(e.target.value);
  }
  return (
    <div className="Mega">
      <h2>Números da MegaSena</h2>
      <h3>Qtd. de dezenas: {numeros}</h3>
      <h3>{mostrarNumeros(gerarNumeros(numeros))}</h3>
      <label htmlFor="numeros">Qtd. de dezenas: </label>
      <input id="numeros" type="number" value={numeros} onChange={update} />
      <button onClick={() => update(numeros)}>Gerar Números</button>
    </div>
  );
};
