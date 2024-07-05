import { useState } from "react";

function UseState() {
  const [name, setName] = useState("Vasanth");

  const [number, setNumber] = useState({ value: 100, type: "number" });
  const changename = () => {
    setName("Mahesh");
  };
  const increment = () => {
    setNumber({value: number.value + 1});
  };
  const decrement = () => {
    setNumber({value: number.value - 1});
  };
  return (
    <>
      My name : {name}
      <button onClick={changename}> Change </button>
      <br />
      Number : {number.value}
      <button onClick={increment}> +1 </button>
      <button onClick={decrement}> -1 </button>
    </>
  );
}

export default UseState;
