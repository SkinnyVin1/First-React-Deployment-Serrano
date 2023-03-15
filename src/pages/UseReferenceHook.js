import { useEffect, useRef } from "react";
import RenderCounter from "../Components/RenderCounter";

const UseReferenceHook = () => {
  const selectingElements = useRef();
  useEffect(() => {
    alert("Rendered Something");
  });

  const getValue = function () {
    alert(selectingElements.current.value);
  };

  const changeValue = function () {
    selectingElements.current.value = "Hi Im Vin";
  };

  const getClass = function () {
    alert(selectingElements.current.classList);
  };

  return (
    <div>
      <h1>Use Reference Page</h1>
      <hr /> <br />
      <input ref={selectingElements} type="text" className="Class 1 class 2" />
      <br />
      <button onClick={getValue}> Get Value</button>
      <button onClick={changeValue}>Change Value</button>
      <button onClick={getClass}>Get ClassList</button>
      <br /> <br /> <hr /> <br />
      <br />
      <RenderCounter></RenderCounter>
    </div>
  );
};

export default UseReferenceHook;
