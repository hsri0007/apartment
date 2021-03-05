import React from "react";
import Landing from "../../Reuse/landingpage/landing";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import Axios from "../../api/axios";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "20px",
    padding: "0px 10px",
  },
}));
const Security = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkInDate: "",
    checkOutDate: "",
    flat_number: "",
    phone_number: "",
    purpose: "",
    block_name: "",
    visitor_name: "",
    vehicle_number: "",
  });

  const HandleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const user = useSelector((state) => state.user);

  const { userInfo } = user;

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        sessionid: `${userInfo.sessionId}`,
      },
    };

    const data = {
      ...state,
      apartmentId: userInfo.apartmentId,
      role: userInfo.userRole,
    };

    // const res = await Axios.post(`/api/user/add-visitor`, data, config);

    console.log(data);
  };
  return (
    <form onSubmit={HandleSubmit}>
      <Landing
        MainPic="https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
        tilte="Security"
      />
      <Grid container style={{ marginTop: "50px" }}>
        <Grid item container justify="center">
          <Grid item container xs={false} sm={1} />
          <Typography variant="h3" xs={false} sm={1} gutterBottom>
            Enter Details Below
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
              id="outlined-basic"
              label="Block Name"
              variant="outlined"
              name="block_name"
              onChange={HandleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Flat Number"
              variant="outlined"
              name="flat_number"
              onChange={HandleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Visitor Name"
              variant="outlined"
              name="visitor_name"
              onChange={HandleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              name="phone_number"
              onChange={HandleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Vehicle Number"
              variant="outlined"
              name="vehicle_number"
              onChange={HandleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Purpose"
              variant="outlined"
              name="purpose"
              onChange={HandleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="datetime-local"
              id="outlined-basic"
              label="Check In Date"
              variant="outlined"
              name="checkInDate"
              onChange={HandleChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="datetime-local"
              id="outlined-basic"
              label="Check Out Date"
              variant="outlined"
              name="checkOutDate"
              onChange={HandleChange}
              InputLabelProps={{
                shrink: true,
              }}
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
            Submit
          </Button>
        </Grid>
        <Grid item container xs={false} sm={1} />
      </Grid>
    </form>
  );
};

export default Security;
