import React from "react";
import "./Button.css";
import {Link} from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

export const Button = ({children, type, onClick, buttonStyle, link}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <>
      {link !== undefined ? (
        <Link to={`/${link}`} className="btn-mobile">
          <button
            className={`btn ${checkButtonStyle} large`}
            onClick={onClick}
            type={type}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          className={`btn ${checkButtonStyle} large`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
      )}
    </>
  );
};
