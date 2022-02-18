/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable linebreak-style */
import React, { cloneElement } from 'react';

export default function (props) {
  return (
    <div>
      {
        props.children.map((child, i) => {
          return cloneElement(child, { ...props, key: i });
        })
      }
    </div>
  )
} 