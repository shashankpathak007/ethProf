import React from "react";
import "./style.css";

const Index = ({ firstLine, secondLine, thirdLine, numImg }) => {
  return (
    <>
      <div className="card-left">
        <img className="card-left-img" src={numImg} />
        <h1>
          {firstLine} <br />
          {secondLine} <br />
          {thirdLine}
        </h1>
      </div>
    </>
  );
};

export default Index;
