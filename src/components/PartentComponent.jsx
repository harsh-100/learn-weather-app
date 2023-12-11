import { useCallback, useEffect, useMemo, useState } from "react";

import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  //   const myValue = useMemo(() => {
  //     return 10;
  //   }, []);

  //   useEffect(() => {
  //     const myFunc = () => {
  //       return 10;
  //     };
  //   }, []);

  const myFunc = useCallback(() => {
    // some operation performed
    return 10;
  }, []);

  console.log("Parent Render");
  return (
    <>
      <h1>Parent Component - {number}</h1>

      <h2>Count is {count}</h2>

      <button onClick={() => setNumber(number + 1)}>increase Number </button>
      <button onClick={() => setCount(count + 1)}>increase COunt </button>

      {/* <button></button> */}

      <ChildComponent number={number} handleFunc={myFunc} />
    </>
  );
};

export default ParentComponent;
