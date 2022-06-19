import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./utils/PrivateRoute";

import Home from "../pages/Home";
import AuthPage from "../pages/auth/AuthPage";
import NotFound from "../pages/404";
import Layout from "./layout/layout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <Switch>
              <AuthRoute path={"/login"} component={AuthPage} />
              {/* <AuthRoute path={"/reset/:token"} component={Reset} /> */}

              {/* <PrivateRoute component={Logout} path="/logout" /> */}
              <Route component={Home} path="/" exact />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </AuthProvider>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

const isLogin = () => !!localStorage.getItem("authTokens");

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

export default App;
