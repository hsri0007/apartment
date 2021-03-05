import React from "react";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import CloudUploadOutlinedIcon from "@material-ui/icons/CloudUploadOutlined";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { complaintsAction } from "../../../../redux/complaints/complaintsAction";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@material-ui/lab/Alert";
import Spinner from "../../../../components/spinner/spinner";
import Axios from "../../../../api/axios";

const WriteComplaint = () => {
  const [category, setCategory] = React.useState("");
  const [comment, setComment] = React.useState("");
  const [upload1, setUpload1] = React.useState("");
  const [phone_number, setPhoneNumber] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [sub_category, setSubject] = React.useState("");
  const complaintsList = useSelector((state) => state.complaints);
  const { loading, error, complaints } = complaintsList;
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const datas = {
      category,
      comment,
      phone_number,
      status,
      sub_category,
      upload_attachement_path: "",
    };

    console.log(datas);

    dispatch(complaintsAction(datas));
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
  return (
    <div>
      {loading && <Spinner />}
      {!loading && (
        <form onSubmit={handleSubmit}>
          <Typography
            variant="h6"
            style={{ marginTop: "50px", marginBottom: "20px" }}>
            Write Complaint
            {error && (
              <Alert severity="error">Error While Sending Complaint</Alert>
            )}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Complaint Type
                </InputLabel>
                <Select
                  native
                  onChange={(e) => setCategory(e.target.value)}
                  label="Complaint Type"
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple",
                  }}>
                  <option aria-label="None" value="" />
                  <option value="Plumber">Plumber</option>
                  <option value="Electrician">Electrician</option>
                  <option value="Water">Water</option>
                  <option value="Others">Others</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Priority
                </InputLabel>
                <Select
                  native
                  onChange={(e) => setStatus(e.target.value)}
                  label="Priority"
                  inputProps={{
                    name: "age",
                    id: "outlined-age-native-simple",
                  }}>
                  <option aria-label="None" value="" />
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Subject"
                variant="outlined"
                onChange={(e) => setSubject(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="PhoneNumber"
                variant="outlined"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                component="label"
                style={{ width: "100%", height: "100%" }}
                sm={6}>
                <CloudUploadOutlinedIcon />
                Upload Attachments
                <input type="file" hidden onChange={uploadImage1} />
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextareaAutosize
                onChange={(e) => setComment(e.target.value)}
                aria-label="minimum height"
                rowsMin={3}
                style={{ width: "100%" }}
                placeholder="Description"
                id="outlined-basic"
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ marginTop: "50px" }}>
            Submit
          </Button>
        </form>
      )}
    </div>
  );
};

export default WriteComplaint;
