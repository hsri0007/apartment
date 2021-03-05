import React from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import { sellingFlatAction } from "../../../redux/sellingFlat/sellingAction";
import { useDispatch } from "react-redux";
import Axios from "../../../api/axios";

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

export default function Sellingflat() {
  const [aadhar_number, setAadhar_number] = React.useState("");
  const [contact_number, setContact_number] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pan_number, setPan_number] = React.useState("");
  const [refered_by, setRefered_by] = React.useState("");
  const [saleDate, setsaleDate] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [upload_doc_path, Set_upload_doc_path] = React.useState("");
  const [upload_photo_path, Set_upload_photo_path] = React.useState("");

  const classes = useStyles();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      aadhar_number,
      contact_number,
      email,
      name: userName,
      pan_number,
      refered_by,
      saleDate,
      upload_doc_path,
      upload_photo_path,
    };
    dispatch(sellingFlatAction(data));
  };

  const uploadImage1 = async (e) => {
    let selected = e.target.files[0];
    if (selected) {
      const fd = new FormData();
      fd.append("file", selected, selected.name);
      await Axios.post("/api/user/upload-images", fd).then((res) =>
        Set_upload_doc_path(res.data.data)
      );
    } else {
      alert("only image files are allowed");
    }
  };
  const uploadImage2 = async (e) => {
    // let selected = e.target.files[0];
    // if (selected) {
    //   const fd = new FormData();
    //   fd.append("file", selected, selected.name);
    //   await Axios.post("/api/user/upload-images", fd).then((res) =>
    //     Set_upload_photo_path(res.data.data)
    //   );
    // } else {
    //   alert("only image files are allowed");
    // }
  };

  return (
    <div style={{ marginTop: "43px" }}>
      <Grid container>
        <Grid item container>
          <Grid item container sm={1} />
          <Typography variant="h3" sm={1} gutterBottom color="primary">
            Selling Flat
          </Typography>
          <Grid item container sm={1} />
        </Grid>
      </Grid>
      <form onSubmit={handleSubmit}>
        <Grid container className={classes.root}>
          <Grid item container sm={1} />
          <Grid item container xs={12} sm={10} spacing={2}>
            <Grid item container sm={12} spacing={1}>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Name"
                  name="userName"
                  value={userName}
                  variant="outlined"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  type="number"
                  id="outlined-basic"
                  name="contact_number"
                  label="Contact Number"
                  value={contact_number}
                  variant="outlined"
                  onChange={(e) => setContact_number(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  type="email"
                  id="outlined-basic"
                  name="email"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="PAN Number"
                  name="pan_number"
                  value={pan_number}
                  variant="outlined"
                  onChange={(e) => setPan_number(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="AADHAR Number"
                  variant="outlined"
                  name="aadhar_number"
                  value={aadhar_number}
                  onChange={(e) => setAadhar_number(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  type="datetime-local"
                  variant="outlined"
                  onChange={(e) => setsaleDate(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Refered By"
                  variant="outlined"
                  name="refered_by"
                  value={refered_by}
                  onChange={(e) => setRefered_by(e.target.value)}
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
                  <input type="file" onChange={uploadImage1} hidden />
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Button
                  variant="contained"
                  component="label"
                  color="primary"
                  style={{ width: "100%", height: "100%" }}
                  sm={4}>
                  <CloudUploadOutlinedIcon />
                  Upload Documents
                  <input type="file" hidden onChange={uploadImage2} />
                </Button>
              </Grid>
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
