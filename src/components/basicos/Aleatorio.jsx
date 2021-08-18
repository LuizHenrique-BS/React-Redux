import React from "react";

export default function Aleatorio(props) {
  const { min, max } = props; // destruction
  return (
    <div>
      <p>
        a nota aleatória entre
        <strong> {max} </strong>e<strong> {min} </strong>
        é:
        <strong> {Math.floor(Math.random() * (max - min + 1)) + min} </strong>
      </p>
    </div>
  );
}
