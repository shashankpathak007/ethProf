import React from "react";
import BlankCard from "../blankCard/index";
import "./style.css";

const Index = () => {
  return (
    <>
      <h1 className="products-heading">OUR PRODUCT</h1>
      <div className="products">
        <BlankCard title={"ENHANCED STAMINA"} para={"$45 USD"} />
        <BlankCard title={"MAXIMUM STRENGHT"} para={"$45 USD"} />
        <BlankCard title={"ENERGY & FOCUS "} para={"$45 USD"} />
      </div>
    </>
  );
};

export default Index;
