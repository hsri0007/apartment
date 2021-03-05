import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { createApartment } from "../../../redux/apartment/apartmentAction";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function MaterialUIPickers() {
  const [state, setState] = React.useState({
    address: "",
    apartmentName: "",
    apartmentType: "",
    contactPerson: "",
    email: "",
    membership: "",
    numberOfBlocks: "",
    phoneNumber: "",
    totalFlatsInBlock: "",
    website: "",
  });

  const userState = useSelector((states) => states.user);
  const { userInfo } = userState;
  const dispatch = useDispatch();
  const classes = useStyles();

  const history = useHistory();

  const apartmentId = userInfo ? userInfo.apartmentId : "";

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      ...state,
      apartmentId,
    };
    dispatch(createApartment(body, history));
    // setState({
    //   address: "",
    //   apartmentName: "",
    //   apartmentType: "",
    //   contactPerson: "",
    //   email: "",
    //   membership: "",
    //   numberOfBlocks: "",
    //   phoneNumber: "",
    //   totalFlatsInBlock: "",
    //   website: "",
    // });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value });
  };

  return (
    <div style={{ marginTop: "43px" }}>
      <Grid container>
        <Grid item container>
          <Grid item container sm={1} />
          <Typography variant="h3" sm={1} color="primary" gutterBottom>
            Create Apartment
          </Typography>
          <Grid item container sm={1} />
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid container className={classes.root}>
          <Grid item container sm={1} />
          <Grid item container xs={12} sm={10} spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Apartment Name"
                variant="outlined"
                name="apartmentName"
                required
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Apartment Type"
                variant="outlined"
                name="apartmentType"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Address"
                variant="outlined"
                name="address"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="outlined-basic"
                name="contactPerson"
                label="Contact Person"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="phoneNumber"
                id="outlined-basic"
                label="Phone Number"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                name="feedBack"
                id="outlined-basic"
                label="Email"
                name="email"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Website"
                variant="outlined"
                name="website"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Total Blocks"
                variant="outlined"
                name="numberOfBlocks"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Total Flats In Each Block"
                variant="outlined"
                name="totalFlatsInBlock"
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Membership"
                variant="outlined"
                name="membership"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid item container sm={1} />
        </Grid>

        <Grid item container>
          <Grid item container sm={1} />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ marginTop: "40px" }}>
            Submit
          </Button>
          <Grid item container sm={1} />
        </Grid>
      </form>
    </div>
  );
}
