import React from "react";
import "./styles.scss";

const DateComponent = ({ date, dateII, border }) => {
  return (
    <div
      className={`dateComponent VContainer ${
        border != null ? (border === "top" ? "borderTop" : "borderBottom") : ""
      }`}
    >
      <p className="Numberfont">{date}</p>
      {dateII && <p className="Numberfont">{dateII}</p>}
    </div>
  );
};

const InfoContainer = ({
  children,
  img1,
  img2,
  year,
  yearII,
  inverse,
  border,
}) => {
  if (inverse) {
    return (
      <div className="HContainer">
        <DateComponent date={year} dateII={yearII} border={border} />
        <div className="VContainer" style={{ width: "100%" }}>
          <div className="infoContainer">
            <img src={img2} alt="Imagen" className="aboutUsImg" />

            <div
              className="VContainer"
              style={{
                alignItems: "center",
                width: "350px",
                justifyContent: "center",
                textAlign: "justify",
              }}
            >
              <img src={img1} alt="Imagen" className="aboutUsImgLogo" />
              {children}
            </div>
          </div>
          <img
            src="assets/images/lineapunteada.png"
            alt="Imagen"
            className="separator"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="HContainer">
      <DateComponent date={year} dateII={yearII} border={border} />
      <div className="VContainer" style={{ width: "100%" }}>
        <div className="infoContainer">
          <div
            className="VContainer"
            style={{
              alignItems: "center",
              width: "350px",
              justifyContent: "center",
              textAlign: "justify",
            }}
          >
            <img src={img1} alt="Imagen" className="aboutUsImgLogo" />
            {children}
          </div>
          <img src={img2} alt="Imagen" className="aboutUsImg" />
        </div>
        <img
          src="assets/images/lineapunteada.png"
          alt="Imagen"
          className="separator"
        />
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="VContainer">
      <p className="aboutUsTitle">Quiénes somos</p>
      <p className="aboutUsSubTitle">línea de tiempo</p>
  
      <div className="VContainer">
        <InfoContainer
          img1="assets/images/historiasenyomayor1.jpg"
          img2="assets/images/quienessomos1.png"
          year="2011"
          border="top"
        >
          <p className="infoText">
            La primera versión del concurso se llevó a cabo en{" "}
            <b className="infoboldText">2011</b>. En esta, se capacitaron a{" "}
            <b>300</b> adultos mayores de Bogotá y <b>200</b> de ellos
            participaron en el concurso con las categorías de cuento escrito y
            narración oral. Con seis ganadores, se publicó el primer libro
            Historias en Yo Mayor, en el que se recopilaron <b>20</b> cuentos
            escritos.
          </p>
        </InfoContainer>

        <InfoContainer
          img1="assets/images/historiasenyomayor2.jpg"
          img2="assets/images/quienessomos2.png"
          year="2012"
          inverse
        >
          <p className="infoText">
            En su segunda versión, en 2012, Historias en Yo Mayor llegó a Cali,
            Medellín y Cartagena. Se capacitaron a más de 1800 adultos y se
            recibieron 470 cuentos escritos y 240 narraciones orales. Con 710
            participantes en las mismas categorías y 24 ganadores, se publicó el
            segundo libro con 13 cuentos escritos
          </p>
        </InfoContainer>
        <InfoContainer
          img1="assets/images/historiasenyomayor3.jpg"
          img2="assets/images/quienesomos3.png"
          year="2013"
        >
          <p className="infoText">
            En 2013, para la tercera edición del concurso, continuaron
            participando Bogotá, Cali y Medellín y se incluyó al departamento de
            Quindío. En esta versión, concursaron 1012 personas mayores y más de
            1500 fueron capacitadas a través de actividades y conversatorios.
            Esta categoría contó con la postulación de 732 cuentos escritos y
            280 narraciones orales. Hubo 14 ganadores.
          </p>
        </InfoContainer>
        <InfoContainer
          img1="assets/images/historiasenyomayor4.jpg"
          img2="assets/images/quienesomos4.png"
          year="2014"
          inverse
        >
          <p className="infoText">
            En la cuarta versión del concurso se capacitaron 1370 personas. Se
            agregaron dos nuevas categorías: Herencia de mi pueblo, que marcó un
            antes y un después en el concurso al buscar preservar saberes y
            contar las historias de las personas mayores en zonas de conflicto,
            y Yo Mayor en la web. En ambas categorías concursaron 65 y 150
            personas respectivamente. Asimismo, se postularon 380 cuentos
            escritos y 300 narraciones orales. Hubo 18 ganadores. En esta
            ocasión, se sumaron los municipios de San Basilio de Palenque,
            Macayepo, Ovejas, San Onofre, Sincelejo, San Jacinto y Versalles
            para la categoría de Herencia de mi pueblo.
          </p>
          <p className="infoText">
            Este año surgieron los laboratorios, que eran espacios permanentes
            donde las personas se reunían una vez a la semana con el objetivo de
            escribir, narrar y compartir un espacio de mejora y corrección
            conjunta, más allá del concurso. Eran dirigidos por profesores de
            cada región y Fahrenheit hacía acompañamiento.
          </p>
        </InfoContainer>
        <InfoContainer
          img1="assets/images/historiasenyomayor5.jpg"
          img2="assets/images/quieresomos5.png"
          year="2015"
          yearII="2016"
        >
          <p className="infoText">
            Se llevó a cabo entre el <b>2015</b> y <b>2016</b>. En esta edición
            del concurso, se capacitaron <b>200</b> personas, y con respecto al
            año anterior, se sumaron municipios del departamento del Chocó:
            Andagoya, Pizarro, Istmina y El Papayo (comunidad indígena Wounaan),
            lo que permitió la asistencia de <b>1250</b> concursantes. Se
            recibieron <b>850</b> cuentos escritos y <b>360</b> narraciones
            orales, y participaron <b>80</b> personas en la categoría herencia
            de mi pueblo. Hubo <b>19</b> ganadores.
          </p>
          <p className="infoText">
            Los laboratorios se volvieron autónomos; es decir, las personas se
            reunían en ausencia de profesores y decidían de forma independiente
            las temáticas, los ejercicios y las conversaciones.
          </p>
        </InfoContainer>
        <InfoContainer
          img1="assets/images/historiasenyomayor6.jpg"
          img2="assets/images/quienessomos6.png"
          year="2017"
          yearII="2018"
          inverse
        >
          <p className="infoText">
            La última edición del concurso de Historias en Yo Mayor tuvo lugar
            entre el 2017 y el 2018. En esta se capacitaron 200 personas, y
            participaron 1250 de Bogotá, Buenaventura y los departamentos de
            Boyacá y Amazonas. Hubo 1420 participantes en las categorías de
            cuento escrito, narración oral y herencia de mi pueblo. Hubo 19
            ganadores.
          </p>
          <b>Escuela virtual:</b>
          <p className="infoText">
            En 2020, debido a la cuarentena implementada por la pandemia de la
            Covid-19, en alianza con el periódico El Tiempo, se creó una escuela
            virtual en la que se enseña a las personas mayores a explorar su
            creatividad, contar y compartir historias de vida a través de
            reuniones semanales que tienen talleres, conversatorios, clubes de
            lectura y cartillas académicas.
          </p>
        </InfoContainer>
        <InfoContainer
          img1="assets/images/historiasenyomayor7.jpg"
          img2="assets/images/quienesomos7.png"
          year="2020"
        >
          <p className="infoText">
            En la primera edición de la Escuela Virtual se capacitaron 200
            adultos mayores. Se publicaron 52 cuentos escritos en un libro
            llamado Heptamerón: memorias de una cuarentena creativa. También
            asistieron 9630 personas a los clubes de lectura y 16.500 a los
            conversatorios. Además, de cada encuentro semanal, se recogieron
            testimonios en el podcast Relatos Sonoros en Yo Mayor. La Escuela
            tuvo un gran alcance nacional, y contó con la participación de
            personas de Chile, Perú, República Dominicana, Argentina y
            Venezuela.
          </p>
        </InfoContainer>
        <InfoContainer
          img1="assets/images/historiasenyomayor8.jpg"
          img2="assets/images/quienesomos8.png"
          year="2021"
          inverse
        >
          <p className="infoText">
            En este año 176 adultos mayores de Uruguay, Perú, México, Venezuela
            y distintos departamentos de Colombia participaron en la Escuela. 57
            de los cuentos que fueron fruto de su trabajo se recogieron en el
            Segundo Heptamerón. 9700 personas asistieron a los clubes de lectura
            y 16.000 a los conversatorios.
          </p>
        </InfoContainer>
        <InfoContainer
          img1="assets/images/historiasenyomayor9.jpg"
          img2="assets/images/quienesomos9.png"
          year="2022"
          border="bottom"
        >
          <p className="infoText">
            En el 2022 se publicó el Tercer Heptamerón, con 67 historias
            escritas en la Escuela Virtual, que capacitó a 195 personas mayores
            de Colombia, Venezuela, Uruguay y Panamá. En esa edición los clubes
            de lectura tuvieron 4725 asistentes y los conversatorios, 3000.
          </p>
        </InfoContainer>
      </div>
    </div>
  );
};

export default Contact;
