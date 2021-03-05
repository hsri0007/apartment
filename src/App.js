import React, { Suspense, lazy } from "react";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.page";
import Spinner from "./components/spinner/spinner";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
const SuperAdmin = lazy(() => import("./pages/SuperAdmin/admin.page"));
const Registration = lazy(() => import("./pages/Registration/Registration"));
const Login = lazy(() => import("./pages/Login/login.page"));
const Contact = lazy(() => import("./pages/Contact/contact"));
const Activities = lazy(() => import("./pages/Activities/Activities.page"));
const Attendance = lazy(() => import("./pages/Attendance/Attendance.page"));
const Complaints = lazy(() => import("./pages/Complaints/Complaints.page"));
const Security = lazy(() => import("./pages/SecurityCheck/Security.page"));
const Roles = lazy(() => import("./pages/RolesAndGroups/Roles.page"));
const Work = lazy(() => import("./pages/WorkersAttendance/workers.page"));
const Sms = lazy(() => import("./pages/Sms/Sms"));
const Notifications = lazy(() =>
  import("./pages/Notifications/Notifications.page")
);
const Email = lazy(() => import("./pages/Emails/Emails"));
const Opinion = lazy(() => import("./pages/OpinionPool/Opinion.page"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery.page"));
const LandOwner = lazy(() =>
  import("./pages/LandOwnersAndBuilders/LandOwners.page")
);
const FlatOwner = lazy(() => import("./pages/flatOwners/admin.page"));
const Tenant = lazy(() => import("./pages/Tenant/admin.page"));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1d4354",
    },
    secondary: {
      main: "#0097a7",
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Suspense fallback={<Spinner />}>
            <Header />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/:AId/Register" component={Registration} />
              <Route exact path="/Activitiescheck" component={Activities} />
              <Route exact path="/Attendance" component={Attendance} />
              <Route exact path="/Complaints" component={Complaints} />
              <Route exact path="/Notifications" component={Notifications} />
              <Route exact path="/Securitycheck" component={Security} />
              <Route exact path="/Roles" component={Roles} />
              <Route exact path="/Workersattendance" component={Work} />
              <Route exact path="/Opinionpool" component={Opinion} />
              <Route exact path="/Gallery" component={Gallery} />
              <Route exact path="/Emails" component={Email} />
              <Route exact path="/Sms" component={Sms} />
              <Route
                exact
                path="/:id/APARTMENT_MANAGER"
                component={LandOwner}
              />
              <Route exact path="/:id/FLAT_OWNER" component={FlatOwner} />
              <Route exact path="/SUPER_ADMIN" component={SuperAdmin} />
              <Route exact path="/TENANT" component={Tenant} />
            </Switch>
          </Suspense>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
