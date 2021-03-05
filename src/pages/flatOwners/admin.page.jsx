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
import Structure from "../LandOwnersAndBuilders/StructureTheapartment/Structure";
import Complaints from "../LandOwnersAndBuilders/Complaints/Complaints";
import Flatowners from "../LandOwnersAndBuilders/FlatAndOwners/Flat";
import Messages from "../LandOwnersAndBuilders/Messages/Messages";
import Badge from "@material-ui/core/Badge";
import CreateUser from "../LandOwnersAndBuilders/CreateUser/createUser";

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
    height: "100vh",
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

export default function Landowners({ history }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [state, setState] = React.useState({
    left: false,
  });
  const [open, setOpen] = React.useState(true);

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
            <Tab label="MyFlat" {...a11yProps(0)} />
            <Tab label="Documents" {...a11yProps(1)} />
            <Tab
              label={
                <Badge badgeContent={11} color="secondary">
                  Complaint
                </Badge>
              }
              {...a11yProps(2)}
            />
            <Tab label="MyVisitors" {...a11yProps(3)} />
            <Tab label="Transactions" {...a11yProps(4)} />
          </Tabs>
        </div>
      </List>
    </div>
  );

  const MyFlat = () => {
    return <div>MyFlat</div>;
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example">
        <Tab label="MyFlat" {...a11yProps(0)} />
        <Tab label="Documents" {...a11yProps(1)} />
        <Tab
          label={
            <Badge badgeContent={11} color="secondary">
              Complaint
            </Badge>
          }
          {...a11yProps(2)}
        />
        <Tab label="MyVisitors" {...a11yProps(3)} />
        <Tab label="Transactions" {...a11yProps(4)} />
      </Tabs>
      <div className={classes.flee}>
        <IconButton
          edge="start"
          onClick={toggleDrawer("left", true)}
          className={classes.menuButton}
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
          <MyFlat />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Documents
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Complaints />
        </TabPanel>
        <TabPanel value={value} index={3}>
          MyVisitors
        </TabPanel>
        <TabPanel value={value} index={4}>
          Transactions
        </TabPanel>
      </div>
    </div>
  );
}
