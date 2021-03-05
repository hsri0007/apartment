import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  landing: {
    minHeight: "60vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      minHeight: "60vh",
    },
  },
  textTile: {
    color: "#EDEBEB",
    marginLeft: "20px",
    borderBottom: "1px solid #EDEBEB",
    [theme.breakpoints.down("xs")]: {
      fontSize: "3rem",
    },
  },
}));
const Landing = ({ MainPic, tilte }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.landing}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.2)),url(${MainPic})`,
      }}>
      <Typography variant="h1" className={classes.textTile}>
        {tilte}
      </Typography>
    </div>
  );
};

export default Landing;
