import React from "react";
import "./newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="titles">
          <h2>Your journey starts here</h2>
          <p>Stay uo to datw with the latest flights and offers</p>
        </div>

        <div className="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <button type="submit">join our newsletter</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
