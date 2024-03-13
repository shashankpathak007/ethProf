import React from "react";
import "./style.css";
import Text from "../../assets/MEME PACKS Crypto Cannabis Culture.png";
import Circle from "../../assets/47.png";

import Grid from "@mui/material/Grid";

const Index = () => {
  return (
    <>
      <div className="front">
        <Grid container>
          <Grid item sm={12} md={6}>
            <div className="front-left">
              <div className="front-left-image">
                <img src={Text} />
              </div>
              <p>Don't let life pass you by - Take It!</p>
              <div className="front-left-button">
                <button className="front-left-button-1">WHITEPAPER</button>
                <button className="front-left-button-2">MEME SWAP</button>
              </div>
            </div>
          </Grid>
          <Grid item sm={12} md={6}>
            <div className="front-right">
              <img src={Circle} />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Index;
