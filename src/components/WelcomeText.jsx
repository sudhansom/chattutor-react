import React from "react";

const WelcomeText = () => {
  return (
      <div className="welcome-text position-relative">
        <h2>Welcome back, TueHerlau <sup><span>Teacher</span></sup></h2>
        <p>A8000 (Mikkel Semester)</p>
        <div className="form-check form-switch position-absolute right-2 mb-neg-24">
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Developer mode</label>
        </div>
      </div>
  );
};

export default WelcomeText;
