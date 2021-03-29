import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Button.css";

// This class creates a card with text on it that can either bring user to the main
// page or you can pass in a function that will run when the user clicks on it

const Button = ({
  onClick = () => {},
  width,
  height,
  route = "",
  children,
}) => {
  const ButtonStyle = styled.div`
    border: 1px solid black;
    border-radius: 7px;
    box-shadow: 1px 1px 1px 1px gray;
    width: ${width ? width + "px" : "80px"};
    height: ${height ? height + "px" : "20px"};
    overflow: hidden;
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 20px;
    opacity: 0.8;
    &:hover {
      box-shadow: 2px 2px 2px 2px gray;
      background-color: white;
      cursor: pointer;
      opacity: 1;
    }
  `;
  return (
    <React.Fragment>
      {route === "" ? (
        <ButtonStyle onClick={onClick}>
          <div>{children}</div>
        </ButtonStyle>
      ) : (
        <Link to={route} className="noDecorations">
          <ButtonStyle>{children}</ButtonStyle>
        </Link>
      )}
    </React.Fragment>
  );
};
export default Button;
