import React from "react";
import "./ErrorMsg.css";

const ErrorMessage = ({ msg, style }) => {
  return (
    <div className="validation_text mb-3" style={style}>
      {msg}
    </div>
  );
};

export default ErrorMessage;
