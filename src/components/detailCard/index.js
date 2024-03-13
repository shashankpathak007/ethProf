import React from "react";
import "./style.css";

const Index = ({ pic, content }) => {
  return (
    <div className="card-right">
      <div>{pic}</div>
      <p>{content}</p>
    </div>
  );
};

export default Index;
