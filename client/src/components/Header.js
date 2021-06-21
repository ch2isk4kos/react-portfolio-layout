import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Chris Kakos</h1>
        <div className="typed-text">
          <Typed
            strings={[
              "Software Engineer",
              "Computer Science Major",
              "Disgruntled Knicks Fan",
              "All Kinds of Awesome",
            ]}
            typeSpeed={70}
            backSpeed={60}
            loop
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <button href="#" className="btn btn-primary btn-lg main-button">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
