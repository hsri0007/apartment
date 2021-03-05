import React from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import Axios from "../../../api/axios";
import { createStructureApartment } from "../../../redux/structureApartment/structureAction";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../components/spinner/spinner";
import { selectStructureData } from "../../../redux/structureApartment/structureSelect";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  typo: {
    marginTop: theme.spacing(3),
  },
}));

export default function Structure() {
  const [Ownerslist1, setOwnerslist1] = React.useState({
    contact_number: "",
    email: "",
    image_url: "",
    aadhar_number: "",
    owner_name: "",
    pan_number: "",
  });
  const [Ownerslist2, setOwnerslist2] = React.useState({
    contact_number: "",
    email: "",
    image_url: "",
    aadhar_number: "",
    owner_name: "",
    pan_number: "",
  });
  const [ownedDate, setDate] = React.useState("");
  const [block_name, setBlock_name] = React.useState("");
  const [flat_number, setFlat_number] = React.useState("");
  const [upload1, setUpload1] = React.useState("");
  const [upload2, setUpload2] = React.useState("");
  const apartmentData = useSelector(selectStructureData);

  const { loading } = apartmentData;

  const dispatch = useDispatch();

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      block_name,
      flat_number,
      ownedDate: ownedDate,
      Ownerslist: [
        { ...Ownerslist1, image_url: upload1 },
        { ...Ownerslist2, image_url: upload2 },
      ],
    };

    dispatch(createStructureApartment(data));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOwnerslist1({ ...Ownerslist1, [name]: value });
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setOwnerslist2({ ...Ownerslist2, [name]: value });
  };

  const uploadImage1 = async (e) => {
    let selected = e.target.files[0];
    if (selected) {
      const fd = new FormData();
      fd.append("file", selected, selected.name);

      await Axios.post("/api/user/upload-images", fd).then((res) =>
        setUpload1(res.data.data, "uploaded data")
      );
    } else {
      alert("only image files are allowed");
    }
  };
  const uploadImage2 = async (e) => {
    let selected = e.target.files[0];
    if (selected) {
      const fd = new FormData();
      fd.append("file", selected, selected.name);

      await Axios.post("/api/user/upload-images", fd).then((res) =>
        setUpload2(res.data.data, "uploaded data")
      );
    } else {
      alert("only image files are allowed");
    }
  };
  return (
    <div style={{ marginTop: "43px" }}>
      <Grid container>
        <Grid item container>
          <Grid item container sm={1} />
          <Typography variant="h3" color="primary" sm={1} gutterBottom>
            Structure the Apartment
          </Typography>
          <Grid item container sm={1} />
        </Grid>
      </Grid>
      {loading && <Spinner />}
      {!loading && (
        <form onSubmit={handleSubmit}>
          <Grid container className={classes.root}>
            <Grid item container sm={1} />
            <Grid item container xs={12} sm={10} spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Block Name"
                  variant="outlined"
                  onChange={(e) => setBlock_name(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Flat Number"
                  type="number"
                  variant="outlined"
                  onChange={(e) => setFlat_number(e.target.value)}
                />
              </Grid>
              <Typography
                variant="h6"
                component="h2"
                style={{ marginLeft: "7px" }}
                className={classes.typo}
                color="primary">
                Owner#1
              </Typography>
              <Grid item container sm={12} spacing={1}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name="owner_name"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    type="number"
                    id="outlined-basic"
                    label="Contact Number"
                    variant="outlined"
                    name="contact_number"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    type="email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    name="email"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="PAN Number"
                    variant="outlined"
                    name="pan_number"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="AADHAR Number"
                    variant="outlined"
                    name="aadhar_number"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    variant="contained"
                    component="label"
                    color="primary"
                    style={{ width: "100%", height: "100%" }}
                    sm={4}>
                    <CloudUploadOutlinedIcon />
                    Upload Photo
                    <input type="file" hidden onChange={uploadImage1} />
                  </Button>
                </Grid>
              </Grid>
              <Typography
                variant="h6"
                component="h2"
                style={{ marginLeft: "7px" }}
                className={classes.typo}
                color="primary">
                Owner#2
              </Typography>
              <Grid item container sm={12} spacing={1}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name="owner_name"
                    onChange={handleChange2}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    type="number"
                    id="outlined-basic"
                    label="Contact Number"
                    variant="outlined"
                    name="contact_number"
                    onChange={handleChange2}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    type="email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    name="email"
                    onChange={handleChange2}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="PAN Number"
                    variant="outlined"
                    name="pan_number"
                    onChange={handleChange2}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="AADHAR Number"
                    variant="outlined"
                    name="aadhar_number"
                    onChange={handleChange2}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Button
                    variant="contained"
                    component="label"
                    color="primary"
                    style={{ width: "100%", height: "100%" }}
                    sm={4}>
                    <CloudUploadOutlinedIcon />
                    Upload Photo
                    <input type="file" hidden onChange={uploadImage2} />
                  </Button>
                </Grid>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography variant="h6" component="h2" color="primary">
                  Owned Date
                </Typography>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  type="datetime-local"
                  variant="outlined"
                  onChange={(e) => setDate(e.target.value)}
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
      )}
    </div>
  );
}
