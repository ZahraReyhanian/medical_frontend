import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens"))
      : null
  );
  let [loading, setLoading] = useState(true);

  const history = useHistory();
  const location = useLocation();

  const validateLogin = (userInfo) => {
    if (!userInfo.username) return "نام کاربری را وارد کنید";
    if (!userInfo.password) return "رمز عبور را وارد کنید";
  };

  let loginUser = async (e) => {
    e.preventDefault();

    const userInfo = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    const error = validateLogin(userInfo);
    if (error) return toast.warn(error);

    let response = await fetch("http://86.106.142.102/api/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    let data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
      toast.success("خوش آمدید");

      history.push(location.state == null ? "/" : location.state.from);
    } else if (response.status === 401) {
      toast.error("کاربری با این مشخصات یافت نشد");
    } else {
      toast.warn("Something went wrong!");
      console.log(response);
    }
  };

  let logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    history.push("/login");
  };

  let contextData = {
    user: user,
    authTokens: authTokens,
    setAuthTokens: setAuthTokens,
    setUser: setUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access));
    }
    setLoading(false);
  }, [authTokens, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
