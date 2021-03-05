import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import Complaints from "../LandOwnersAndBuilders/Complaints/Complaints";
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}>
      {value === index && (
        <Box p={3}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  menuButton: {
    marginLeft: theme.spacing(1),
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  list: {
    width: 220,
  },
  fullList: {
    width: "auto",
  },
  flee: {
    width: "80vw",
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
    },
  },
}));

export default function VerticalTabs({ history }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [state, setState] = React.useState({
    left: false,
  });
  const [open, setOpen] = React.useState(true);
  const userState = useSelector((states) => states.user);
  const { userInfo } = userState;

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
  const handleClick = () => {
    setOpen(!open);
  };

  const apartmentId = userInfo ? userInfo.apartmentId : 0;

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation">
      <List component="nav" aria-labelledby="nested-list-subheader">
        <div
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}>
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example">
            <Tab label="Complaints" {...a11yProps(0)} />
            <Tab label="Logged in History" {...a11yProps(1)} />
            <Tab label="Intra Messages" {...a11yProps(2)} />
          </Tabs>
        </div>
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}>
        <Tab label="Complaints" {...a11yProps(0)} />
        <Tab label="Logged in History" {...a11yProps(1)} />
        <Tab label="Intra Messages" {...a11yProps(2)} />
      </Tabs>
      <div className={classes.flee}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          onClick={toggleDrawer("left", true)}
          color="inherit"
          aria-label="menu">
          <ArrowBackOutlinedIcon />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}>
          {list("left")}
        </Drawer>

        <TabPanel value={value} index={0}>
          <Complaints />
        </TabPanel>
        <TabPanel value={value} index={1}>
          HIstory
        </TabPanel>
        <TabPanel value={value} index={2}>
          Intra Messages
        </TabPanel>
      </div>
    </div>
  );
}
