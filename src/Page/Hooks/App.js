import React, { useRef } from "react";
import ChildComp from "./ChildComp";

const Hooks = () => {
  const ChildCompRef = useRef();
  return (
    <>
      <div className="hook_div">
        <h2>React Hook useRef</h2>
        <button
          onClick={() => ChildCompRef.current.showAlert()}
          className="hook_btn"
        >
          Show Alert
        </button>
        <ChildComp ref={ChildCompRef} />
      </div>
    </>
  );
};

export default Hooks;
