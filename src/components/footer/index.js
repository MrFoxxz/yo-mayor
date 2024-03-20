import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./styles.scss";

const Footer = () => {
  return (
    <div>
      <img src="assets/images/foot.png" alt="Imagen" className="footerImage" />
      <div
        style={{
          backgroundColor: "#063c4b",
          color: "white",
          padding: "10px 0",
          textAlign: "center",
        }}
      >
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item>
            <p>Síguenos</p>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                boxShadow: 3,

                p: 1,
                m: 1,
                borderRadius: 50,
                width: "50px",
                height: "50px",
                textAlign: "center",
              }}
            >
              <TwitterIcon />
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                boxShadow: 3,
                bgcolor: (theme) => "#fff",
                color: (theme) =>
                  theme.palette.mode === "dark" ? "grey.300" : "grey.800",
                p: 1,
                m: 1,
                borderRadius: 50,
                width: "50px",
                height: "50px",
                textAlign: "center",
              }}
            >
              <FacebookIcon />
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
