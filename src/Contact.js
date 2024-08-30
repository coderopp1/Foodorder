import React, { useState } from "react";


const Contact = () => {
  const [status, setStatus] = useState({
    all: true,
    1: false,
    2: false,
    3: false,
    4: false
  });

  const handleCheckboxChange = (id) => {
    setStatus({
      ...status,
      [id]: !status[id]
    });
  };

  return (
    <>
      <label htmlFor="all">All</label>
      <input
        id="all"
        type="checkbox"
        checked={status.all}
        onChange={() => handleCheckboxChange("all")}
      ></input>

      <label htmlFor="1">1</label>
      <input
        id="1"
        type="checkbox"
        checked={status[1]}
        onChange={() => handleCheckboxChange(1)}
      ></input>

      <label htmlFor="2">2</label>
      <input
        id="2"
        type="checkbox"
        checked={status[2]}
        onChange={() => handleCheckboxChange(2)}
      ></input>

      <label htmlFor="3">3</label>
      <input
        id="3"
        type="checkbox"
        checked={status[3]}
        onChange={() => handleCheckboxChange(3)}
      ></input>

      <label htmlFor="4">4</label>
      <input
        id="4"
        type="checkbox"
        checked={status[4]}
        onChange={() => handleCheckboxChange(4)}
      ></input>
    </>
  );
};

export default Contact;
