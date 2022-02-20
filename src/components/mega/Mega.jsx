import "./Mega.css";
import "./Gerador";
import React, { useState } from "react";

export default (props) => {
  /*   
  function mostrarNumeros(vetor) {
    return vetor.map((obj) => <div key={obj}>{obj}</div>);
  } 
  function update(e) {
    setNumeros(e.target.value);
  } 
  */
  function gerarNumeros(qtd) {
    var arr = [];
    const [max, min] = [1, 60];
    let i = 0;
    while (i < qtd) {
      let igual = false;
      var n = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
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
  // recebe o valor via props ou inicia com 6
  const [qtde, setQtde] = useState(props.qtde || 6);
  const numerosIniciais = gerarNumeros(qtde); // .fill(0) inicia o array com 0
  const [numeros, setNumeros] = useState(numerosIniciais);

  return (
    <div className="Mega">
      <h2>Números da MegaSena</h2>
      <h3>Qtd. de dezenas: {qtde}</h3>
      <h3>{numeros.join(" ")}</h3>
      <label htmlFor="numeros">Qtd. de dezenas: </label>
      <input
        min="6"
        max="17"
        id="numeros"
        type="number"
        value={qtde}
        onChange={(e) => {
          /* atualiza a qtd exibida no input */
          setQtde(+e.target.value);
          /* gera num assim que o valor eh alterado */
          setNumeros(
            gerarNumeros(+e.target.value)
          );
        }}
      />
      <div className="center">
        <button onClick={() => setNumeros(gerarNumeros(qtde))}>
          Gerar Números
        </button>
      </div>
    </div>
  );
};
