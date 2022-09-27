import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  //As the state value is an empty string, it is falsy.
  const [text, setText] = useState('');

  //value of text or if falsy, hello world.
  const firstValue = text || 'hello world';
  //If it is not true, return the value. Otherwise return hello world.
  const secondValue = text && 'hello world';
  

  return <>
  <h1>{firstValue}</h1>
  <h1>value: {secondValue}</h1>
  </>
};

export default ShortCircuit;
