import React from "react";
import BackgroundImageContainer from "../../components/backgroundImageContainer";
import HomeImgCard from "../../components/cards/homeImgCard";
import { Grid } from "@mui/material";
import "./styles.scss";
import IconInfoCard from "../../components/cards/iconInfoCard";

const Home = () => {
  return (
    <div className="VContainer">
      <BackgroundImageContainer imageUrl="assets/images/noticiasback.png">
        <div>
          <h1 className="homeImgTitle">Noticias</h1>
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

      <br />

      <div className="HContainer mv-100" style={{ alignItems: "center" }}>
        <h1 className="homeBigText">Qué es el proyecto</h1>
        <div className="homeTextContainer">
          <p className="homeText">
            Es un proyecto que permite visibilizar las historias y saberes de
            las personas mayores. Nació como un concurso en el que asistentes de
            diferentes departamentos de Colombia escribían cuentos y realizaban
            historias en video… Los mejores relatos, evaluados por destacados
            escritores del país, se recopilaron en seis libros de Historias en
            Yo Mayor, uno por cada versión (2011-2018).
          </p>
          <p className="homeText">
            En 2020, debido a la cuarentena implementada por la pandemia del
            Covid-19 se creó una Escuela Virtual en la que se enseña a las
            personas mayores a explorar su creatividad, contar y compartir
            historias de vida, por medio de reuniones semanales que tienen
            talleres, conversatorios, clubes de lectura y cartillas académicas.
            Se han publicado tres libros Heptamerón: memorias de una cuarentena
            creativa en 2020, 2021 y 2022.
          </p>
        </div>
      </div>
      <br />

      <div className="sectionTitle">Impacto: personas y ciudades</div>

      <div className="HContainer">
        <img
          src="assets/images/impactopersonas.png"
          alt="Imagen"
          className="imageStyle"
        />
        <div
          className="VContainer"
          style={{ alignItems: "center", width: "50%" }}
        >
          <p>Concurso</p>
          <div className="HContainer">
            <IconInfoCard
              imageUrl="assets/icons/icono3.png"
              number="5.487"
              text="concursantes"
            />
            <IconInfoCard
              imageUrl="assets/icons/icono1.png"
              number="19"
              text="ciudades /
              municipios de
              Colombia"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
