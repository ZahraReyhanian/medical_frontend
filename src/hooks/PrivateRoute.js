import { Route, Redirect, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../components/context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  let { user } = useContext(AuthContext);
  const location = useLocation();

  return (
    <Route {...rest}>
      {!user ? (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
      ) : (
        children
      )}
    </Route>
  );
};

export default PrivateRoute;
