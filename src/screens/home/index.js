import React from "react";
import BackgroundImageContainer from "../../components/backgroundImageContainer";
import HomeImgCard from "../../components/cards/homeImgCard";
import { Grid } from "@mui/material";

const Home = () => {
  return (
    <div>
      <BackgroundImageContainer imageUrl="assets/images/noticiasback.png">
        <div>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <HomeImgCard
                imageUrl=""
                buttonText="LEER MÁS"
                text="Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  Vivamus et est lorem. Donec
                  vestibulum mi nibh, egestas
                  fermentum sem fermentum id.
                  Curabitur vitae congue mauris. "
                onClick={() => console.log("click")}
              />
            </Grid>
            <Grid item xs={4}>
              <HomeImgCard
                imageUrl=""
                buttonText="LEER MÁS"
                text="Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  Vivamus et est lorem. Donec
                  vestibulum mi nibh, egestas
                  fermentum sem fermentum id.
                  Curabitur vitae congue mauris. "
                onClick={() => console.log("click")}
              />
            </Grid>
            <Grid item xs={4}>
              <HomeImgCard
                imageUrl=""
                buttonText="LEER MÁS"
                text="Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                  Vivamus et est lorem. Donec
                  vestibulum mi nibh, egestas
                  fermentum sem fermentum id.
                  Curabitur vitae congue mauris. "
                onClick={() => console.log("click")}
              />
            </Grid>
          </Grid>
        </div>
      </BackgroundImageContainer>
    </div>
  );
};

export default Home;
