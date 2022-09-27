import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  //As the state value is an empty string, it is falsy.
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  //The 'or' operator (||) value says that if the state is falsy, then return the alternative ('hello world').
  //const firstValue = text || "hello world";
  //The 'and' operator says the if the state is truthy, return the value ('hello world').
  //const secondValue = text && "hello world";

  return (
    <>
      {/*<h1>{firstValue}</h1>
      <h1>value: {secondValue}</h1>*/}

      <h1>{text || "james"}</h1>
      {/* Created a toggle button, switching between true and false */}
      <button className='btn' onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error...</h1>}

      {isError ? (
        <p>there is an error...</p>
      ) : (
        <div>
          <h2>there is no error.</h2>
        </div>
      )}
      {/*<h1>value: {text && "paul"}</h1>
      {/* This flips it by saying 'if it is not true...' 
      {!text && <h1>hello world</h1>}*/}
    </>
  );
};

export default ShortCircuit;
