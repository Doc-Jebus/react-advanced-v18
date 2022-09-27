import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  //IMPORTANT NOTE: Use a cleanup function to prevent unnecessary allocations. After addEventListener, initiate removeEventListener.
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size : {size}px</h2>
    </div>
  );
};

export default ShowHide;
