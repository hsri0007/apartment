import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    display: "flex",
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.4)),url(https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1506&q=80)`,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
  },
  Title: {
    color: "white",
  },
});

const Homepage = () => {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const { userInfo } = user;

  let userRole = userInfo ? userInfo.userRole : null;

  React.useEffect(() => {
    if (userRole === "APARTMENT_MANAGER")
      history.push(`${userInfo.apartmentName}/${userRole}`);
    if (userRole === "FLAT_OWNER")
      history.push(`${userInfo.apartmentName}/${userRole}`);
    if (userRole === "SUPER_ADMIN") history.push(`/${userRole}`);
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.Title} gutterBottom>
        SmartCivitas
      </Typography>
    </div>
  );
};

export default Homepage;
