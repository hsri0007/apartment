import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";

import Axios from "../../../../api/axios";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  fonts: {
    fontWeight: "bold",
  },
  inline: {
    display: "inline",
  },
}));

const Comment = () => {
  const [Comments, setComments] = React.useState([]);
  const user = useSelector((state) => state.user);

  const { userInfo } = user;

  React.useEffect(() => {
    const config = {
      headers: {
        sessionid: `${userInfo.sessionId}`,
      },
    };
    Axios.get(
      `/api/user/complaint/fetch-complaintbyapartmentid?apartmentId=${userInfo.apartmentId}`,
      config
    ).then((res) => setComments(res.data.data));
  }, [userInfo]);

  const classes = useStyles();
  return (
    <List className={classes.root}>
      {Comments.map((comment) => {
        console.log("Comment", comment);
        return (
          <React.Fragment key={comment.id}>
            <ListItem key={comment.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="avatar" />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography className={classes.fonts}>
                    {comment.user_name}({comment.apartmentId})
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary">
                      {comment.comment}
                    </Typography>
                    {` - ${comment.role}`}
                  </>
                }
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default Comment;
