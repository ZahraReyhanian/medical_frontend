import React, { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Redirect } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "../hooks/PrivateRoute";

import Home from "../pages/Home";
import AuthPage from "../pages/auth/AuthPage";
import NotFound from "../pages/404";
import Layout from "./layout/layout";
import BaseQuiz from "../pages/quiz/BaseQuiz";
import ProfilePanel from "../pages/profile/ProfilePanel";
import StartQuiz from "../pages/quiz/StartQuiz";
import AllQuiz from "../pages/quiz/AllQuiz";
import AllArticle from "../pages/articles/AllArticle";
import Diagnosis from "../pages/diseases/Diagnosis";
import SetPassword from "../pages/auth/components/SetPassword";
import Checkout from "../pages/quiz/Checkout";
import PaymentError from "../pages/quiz/PaymentError";
import Article from "../pages/articles/Article";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Layout>
            <Switch>
              <PrivateRoute component={ProfilePanel} path="/profile" />
              <PrivateRoute component={ProfilePanel} path="/setting" />
              <PrivateRoute component={ProfilePanel} path="/saved" />
              <PrivateRoute component={ProfilePanel} path="/paid" />

              <AuthRoute path={"/login"} component={AuthPage} />
              <Route path={"/reset/:uid/:token"} component={SetPassword} />

              <PrivateRoute component={BaseQuiz} path="/tests/:id/questions" />
              <PrivateRoute component={Checkout} path="/tests/:id/checkout" />
              <Route component={StartQuiz} path="/tests/:id" />
              <Route component={AllQuiz} path="/tests" />
              <PrivateRoute component={PaymentError} path="/payment/error" />

              <Route component={Diagnosis} path="/diagnosis" />

              <Route component={Article} path={"/articles/:id"} />
              <Route component={AllArticle} path="/articles" />
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
