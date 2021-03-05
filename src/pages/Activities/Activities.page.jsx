import React from "react";
import Landing from "../../Reuse/landingpage/landing";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "../../api/axios";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    padding: "0px 10px",
  },
}));
const Activities = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    comment: "string",
    type_of_activity: "string",
  });
  const { userInfo } = useSelector((valv) => valv.user);
  console.log(userInfo);

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const HandleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      ...state,
      apartmentId: userInfo.apartmentId,
      role: "string",
    };

    console.log(body);
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     sessionid: `${userInfo.sessionId}`,
    //   },
    // };

    // try {
    //   const res = await Axios.post(`/api/user/add-activities`, body, config);

    //   console.log(res);
    // } catch (error) {}
  };

  return (
    <div>
      <Landing
        MainPic="https://images.unsplash.com/photo-1605847481753-45d997c50107?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        tilte="Activities"
      />
      <form onSubmit={HandleSubmit}>
        <Grid container style={{ marginTop: "50px" }}>
          <Grid item container justify="center">
            <Grid item container xs={false} sm={1} />
            <Typography variant="h3" xs={false} sm={1} gutterBottom>
              Post Your Activity
            </Typography>
            <Grid item container xs={false} sm={1} />
          </Grid>
        </Grid>
        <Grid container className={classes.root}>
          <Grid item container xs={false} sm={1} />
          <Grid item container xs={12} sm={10} spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="comment"
                required
                label="Description"
                variant="outlined"
                name="comment"
                onChange={HandleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                required
                id="type_of_activity"
                label="Type of Activity"
                variant="outlined"
                name="type_of_activity"
                onChange={HandleChange}
              />
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                marginTop: "40px",
                marginBottom: "40px",
                marginLeft: "5px",
              }}>
              Post
            </Button>
          </Grid>
          <Grid item container xs={false} sm={1} />
        </Grid>
      </form>
    </div>
  );
};

export default Activities;
