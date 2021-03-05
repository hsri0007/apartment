import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { useDispatch, useSelector } from "react-redux";
import { Registers } from "../../../redux/user/userAction";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import Axios from "../../../api/axios";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({ match }) {
  const [userName, setUserName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [contact, setContact] = React.useState("");
  const [role, setRole] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [path, Set_upload_doc_path] = React.useState("");
  const userDetails = useSelector((state) => state.user);
  const { userInfo } = userDetails;

  const user = useSelector((state) => state.register);

  const { loading, userCreated } = user;
  const classes = useStyles();

  const dispatch = useDispatch();

  const apartmentId = userInfo.apartmentId;

  console.log(apartmentId);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      Registers(userName, email, role, apartmentId, contact, address, path)
    );
    setUserName("");
    setEmail("");
    setRole("");
  };

  // React.useEffect(() => {
  //   if (userCreated) {
  //     history.push("/login");
  //   }
  // }, [userCreated]);

  const uploadImage1 = async (e) => {
    let selected = e.target.files[0];
    if (selected) {
      const fd = new FormData();
      fd.append("file", selected, selected.name);
      await Axios.post("/api/user/upload-images", fd).then((res) =>
        // Set_upload_doc_path(res.data.data)
        Set_upload_doc_path("")
      );
    } else {
      alert("only image files are allowed");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Agreement
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="userName"
                variant="outlined"
                value={userName}
                required
                fullWidth
                label="User Name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                name="email"
                value={email}
                required
                fullWidth
                label="Email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                name="contact"
                value={contact}
                required
                fullWidth
                label="Contact Number"
                type="number"
                onChange={(e) => setContact(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Role
                </InputLabel>
                <Select
                  name="role"
                  value={role}
                  labelId="demo-simple-select-outlined-label"
                  label="Role"
                  onChange={(e) => setRole(e.target.value)}>
                  <MenuItem value="">
                    <em>Select</em>
                  </MenuItem>
                  <MenuItem value="FLAT_OWNER">Flat Owner</MenuItem>
                  {/* <MenuItem value="Tenant">Tenant</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                variant="contained"
                component="label"
                color="secondary"
                style={{ width: "100%", height: "100%" }}
                sm={4}>
                <CloudUploadOutlinedIcon />
                Upload Document
                <input type="file" onChange={uploadImage1} hidden />
              </Button>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                name="address"
                value={address}
                required
                fullWidth
                label="Address"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="accept terms and conditions"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}>
            Submit
          </Button>
        </form>
      </div>
      <Box mt={5}>{/* <Copyright /> */}</Box>
    </Container>
  );
}
