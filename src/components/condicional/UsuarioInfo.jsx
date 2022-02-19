import React from "react";
import If from "./if";
export default (props) => {
  const usuario = props.usuario || {} //para evitar erros caso nenhum nome seja passado
    return (
    <div>
      <If test={usuario && usuario.nome}> {/* se o usuario existir e tiver um nome */}
        Seja bem vindo <strong>{usuario.nome}</strong>!
      </If>
      <If test={!usuario || !usuario.nome}>
        Seja bem vindo <strong>Amigão</strong>!
      </If>
    </div>
  );
};
