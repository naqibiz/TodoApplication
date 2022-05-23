import React from "react";
import styled, { css } from "styled-components";

const Button = ({ onClick, disabled }) => {
  const Button = styled.button`
    background-color: transparent;
    margin: auto;
    display: block;
    color: #1cc1a0;
    font-size: 20px;
    padding: 9px 20px !important;
    border-radius: 5px;
    border: 2px solid #1cc1a0;
    cursor: pointer;
    margin: 25px 0 !important;
  `;
  return (
    <div>
      <Button onClick={onClick} disabled={disabled}>
        {disabled ? "Loading..." : "Fetch Todo"}
      </Button>
    </div>
  );
};

export default Button;
