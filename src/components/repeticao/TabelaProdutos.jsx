/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import "../../data/produtos";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";
{
  /* criar uma tabela para exibir todos os produtos na sua devida coluna */
}

export default (props) => {
  function prodLi() {
    return produtos.map((produto, i) => {
      return (
        <tr key={produto.id} className={i % 2 === 0 ? "Par" : "Impar"}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>R$ {produto.preco.toFixed(2)}</td>
        </tr>
      );
    });
  }
  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Produto</th>
            <th>Preço em R$</th>
          </tr>
        </thead>
        <tbody>{prodLi()}</tbody>
      </table>
    </div>
  );
};
