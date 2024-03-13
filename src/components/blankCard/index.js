import React from "react";
import "./style.css";

const Index = ({ title, para }) => {
  return (
    <>
      <div className="black-card">
        <div className="black-card-box"></div>
        <div className="black-card-data">
          <h1>{title}</h1>
          <p>{para}</p>
        </div>
      </div>
    </>
  );
};

export default Index;
