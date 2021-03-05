import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import ListSubheader from "@material-ui/core/ListSubheader";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import purple from "@material-ui/core/colors/purple";
import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";
import { logout } from "../../redux/user/userAction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    cursor: "pointer",
  },
  list: {
    width: 220,
  },
  fullList: {
    width: "auto",
  },
  grow: {
    flexGrow: 1,
  },
  btn: {
    color: "#ffffff",
  },
}));

const ButtonAppBar = ({ history }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const userDetails = useSelector((state) => state.user);
  const { userInfo } = userDetails;

  const dispatch = useDispatch();

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation">
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            style={{ backgroundColor: "white" }}>
            SmartCivitas
          </ListSubheader>
        }
        className={classes.root}>
        <div
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}>
          <ListItem button onClick={() => history.push("/Registration")}>
            <ListItemText primary={"Registration"} />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => history.push("/Roles")}>
            <ListItemText primary={"Roles & Groups"} />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => history.push("/Complaints")}>
            <Badge badgeContent={11} color="primary">
              <ListItemText primary={"Complaints"} />
            </Badge>
          </ListItem>
          <Divider />
          <ListItem button onClick={() => history.push("/Securitycheck")}>
            <ListItemText primary={"Security Check"} />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => history.push("/Activitiescheck")}>
            <ListItemText primary={"Activities Check"} />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => history.push("/Attendance")}>
            <ListItemText primary={"Attendance"} />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => history.push("/Workersattendance")}>
            <ListItemText primary={"Workers attendance"} />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => history.push("/Opinionpool")}>
            <ListItemText primary={"Opinion Pool"} />
          </ListItem>
        </div>
        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Notifications" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          in={open}
          timeout="auto"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Information notifications" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Remainder notifications" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Sales Messages" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <div
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}>
          <ListItem button onClick={() => history.push("/Gallery")}>
            <ListItemText primary={"Gallery"} />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => history.push("/Contact")}>
            <ListItemText primary={"Contact"} />
          </ListItem>
        </div>
      </List>
    </div>
  );

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <AccountCircle />
        </IconButton>
        <p>{userInfo ? userInfo.username : null}</p>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit">
          <ExitToAppIcon />
        </IconButton>
        <p onClick={() => dispatch(logout())}>LogOut</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={toggleDrawer("left", true)}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}>
            {list("left")}
          </Drawer>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => history.push("/")}>
            SmartCivitas
          </Typography>
          <div className={classes.grow} />
          <div>
            {userInfo ? (
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit">
                <AccountCircleIcon />
              </IconButton>
            ) : (
              <Button
                onClick={() => history.push("/Login")}
                color="secondary"
                className={classes.btn}>
                Login
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default withRouter(ButtonAppBar);
