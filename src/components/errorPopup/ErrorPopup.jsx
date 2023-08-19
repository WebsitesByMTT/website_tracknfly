import React from "react";
import "./errorPopup.scss";
import { useNavigate } from "react-router-dom";

const ErrorPopup = ({ setError, setPopup, error }) => {
  const navigate = useNavigate();

  const ErrorHandler = () => {
    setPopup(false);
    setError("");
  };

  return (
    <div className="error-popup">
      <div className="error-container">
        <div className="inner-container">
          <div className="loader">
            <img src="/error.svg" alt="error" />
          </div>
          <div className="text">
            <h2>Error</h2>
            <p>{error}</p>
            <button onClick={ErrorHandler}>Try Again</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPopup;
