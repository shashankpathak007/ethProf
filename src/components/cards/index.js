import React from "react";
import "./style.css";
import Grid from "@mui/material/Grid";
import DetailCard from "../detailCard/index";
// import Image from "../../assets/Grid 2.png";
import Number from "../number/index";
import First from "../../assets/1.png";
import Second from "../../assets/2.png";
import Third from "../../assets/3.png";
import { ReactComponent as Ice } from "../../assets/Group 33.svg";
import { ReactComponent as Packet } from "../../assets/Group 34.svg";
import { ReactComponent as Jocker } from "../../assets/Group 31.svg";

const Index = () => {
  // const para1 =
  return (
    <div className="cards">
      {/* 1st card */}

      <Grid container className="card-first">
        <Grid item sm={12} md={5}>
          {/* <div className="card-left"> */}
          <Number
            firstLine={"BORN AS"}
            secondLine={"A MEME"}
            thirdLine={"PACKS"}
            numImg={First}
          />
          {/* </div> */}
        </Grid>
        <Grid item sm={12} md={7}>
          <DetailCard
            pic={<Ice />}
            content={`Join our vibrant Slurps community to connect with like-minded
              individuals and unlock a world of exciting rewards. With each
              connection you make and every purchase you enjoy, you'll earn
              exclusive perks, surprises, and even brand ownership`}
          />
        </Grid>
      </Grid>

      {/* 2nd card */}

      <Grid container className="card-second">
        <Grid item sm={12} md={7}>
          <DetailCard
            pic={<Packet />}
            content={`Our premium cannabis products are crafted with care, ensuring that you're always ready and in full effect. Whether you're unwinding or celebrating success, Blast Gummies will take your enjoyment to the next leve and experience the difference today.`}
          />
        </Grid>
        <Grid item sm={12} md={5} className="card-second-number">
          <Number
            firstLine={"PREMIUM"}
            secondLine={"CANNABIS"}
            thirdLine={"PRODUCT"}
            numImg={Second}
          />
        </Grid>
      </Grid>

      {/* 3rd card */}

      <Grid container className="card-first">
        <Grid item sm={12} md={5}>
          <Number
            firstLine={" COUNTER"}
            secondLine={"THE OLD"}
            thirdLine={"CULTURE"}
            numImg={Third}
          />
        </Grid>
        <Grid item sm={12} md={7}>
          <DetailCard
            pic={<Jocker />}
            content={`Join us in reshaping the future through groundbreaking NFTs, collaborative ventures, and transformative projects. Together, we redefine boundaries and make lasting impacts in the realms of art, cannabis, and community.`}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
