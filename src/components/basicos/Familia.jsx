/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable linebreak-style */
import React from 'react';

import FamiliaMembro from './FamiliaMembro';

export default function (props) {
  return (
    <div>
      <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
      <FamiliaMembro nome="Ana" {...props}/>
      <FamiliaMembro nome="Gustavo" sobrenome="Silva" />
    </div>
  )
} 