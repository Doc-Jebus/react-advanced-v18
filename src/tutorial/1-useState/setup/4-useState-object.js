import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "random message",
  });

  //You can setup as many useStates values as you wish... but it might get messy.
  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  //Using the spread operator leave the other state values and only affecting the message element.
  function changeMessage() {
    //setPerson({ ...person, message: "Hello World!" });
    setMessage("Hello World!");
    setName("James");
    setAge(43);
  }
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
