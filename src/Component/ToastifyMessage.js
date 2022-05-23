import React, { forwardRef, useImperativeHandle } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastifyMessage = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    handleToast(message) {
      toast(message);
    },
  }));

  return <ToastContainer theme="dark" />;
});

export default ToastifyMessage;
