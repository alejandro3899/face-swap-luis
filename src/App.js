import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header/Header";
import Home from "./components/Home/Home";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Notfound from "./components/Notfound/Notfound";
import Login from "./components/Login/Login/Login";
import Register from "./components/Login/Login/Register/Register";
import Authprovider from "./Context/Authprovider";
import Guide from "./components/Guide/Guide";
import Services from "./components/Services/Services";
import Doctors from "./components/Services/Doctors/Doctors";
import Appointment from "./components/Services/Appointment/Appointment";
import ServiceDetails from "./components/Services/ServiceDetails/ServiceDetails";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

// custom style for this application
export const myTheme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#000",
    },
    alternate: {
      main: "#000",
    },
    text: {
      secondary: "#212121",
    },
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});

function App() {
  return (
    <>
      <Authprovider>
        <ThemeProvider theme={myTheme}>
          <BrowserRouter>
            <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/guide">
                <Guide />
              </Route>
              <PrivetRoute path="/doctors">
                <Doctors></Doctors>
              </PrivetRoute>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/register">
                <Register></Register>
              </Route>
              <Route path="/profile">
                <Login></Login>
              </Route>
              <PrivetRoute path="/appointment">
                <Appointment></Appointment>
              </PrivetRoute>
              <Route exact path="/services">
                <Services></Services>
              </Route>
              <PrivetRoute exact path="/services/details/:servId">
                <ServiceDetails></ServiceDetails>
              </PrivetRoute>
              <Route path="*">
                <Notfound></Notfound>
              </Route>
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </Authprovider>
    </>
  );
}

export default App;
