import { forwardRef, useImperativeHandle } from "react";

const ChildComp = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    showAlert() {
      alert("Hello from Child Component");
    },
  }));
});

export default ChildComp;
