import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import WriteComplaint from "./writecomplaint/writeComplaint";
import ReadComplaints from "./readcomplaints/readComplaints";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 180,
  },
});

export default function MediaCard() {
  const [data, setData] = React.useState("land");
  const classes = useStyles();

  return (
    <div>
      {data === "land" && (
        <Grid container spacing={2}>
          <Grid item>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1522881451255-f59ad836fdfb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1438&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Write Complaint
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  color="secondary"
                  onClick={() => setData("write")}
                  style={{ marginLeft: "8px" }}>
                  Click Here
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1544716278-e513176f20b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Read Complaints
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  variant="outlined"
                  color="secondary"
                  onClick={() => setData("read")}
                  style={{ marginLeft: "8px", color: "main" }}>
                  Click Here
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      )}
      {data === "write" && (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setData("land")}>
            Back
          </Button>
          <WriteComplaint />
        </div>
      )}
      {data === "read" && (
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setData("land")}>
            Back
          </Button>{" "}
          <ReadComplaints />
        </div>
      )}
    </div>
  );
}
