import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";
import Home from "../pages/Home";
import AuthPage from "../pages/auth/AuthPage";
import NotFound from "../pages/404";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PrivateRoute
            exact
            path={"/"}
            render={() => {
              return <Home />;
            }}
          />

          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

const isLogin = () => true; //!!localStorage.getItem("x-auth-token");
const isAdmin = () => !!localStorage.getItem("x-auth-token");

const AuthRoute = ({ component, props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (isLogin()) return <Redirect to={"/"} />;
        else {
          return React.createElement(component, props);
        }
      }}
    />
  );
};

const PrivateRoute = ({ render, props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (isLogin()) return render(props);
        else {
          return <Redirect to={"/login"} />;
        }
      }}
    />
  );
};

const PrivateRouteAdmin = ({ render, props }) => {
  return (
    <Route
      {...props}
      render={(props) => {
        if (isLogin()) {
          if (isAdmin()) return render(props);
          else return <Redirect to={"/"} />;
        } else {
          return <Redirect to={"/login"} />;
        }
      }}
    />
  );
};

export default App;
