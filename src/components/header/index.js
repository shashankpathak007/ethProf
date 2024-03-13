import React from "react";
import "./style.css";
import { ReactComponent as Logo } from "../../assets/LOGO.svg";
// import Logo from '../../assets/LOGO.svg';

const Index = () => {
  return (
    <>
      <div className="header">
        <div className="header-left">
          <Logo />
        </div>
        <div className="header-right">
          <div className="header-right-home">
            <a href="#">Home</a>
          </div>
          <div className="header-right-text">
            <a href="#">Tokenomic</a>
          </div>
          <div className="header-right-text">
            <a href="#">Our Mission</a>
          </div>
          <div className="header-right-shop">
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
