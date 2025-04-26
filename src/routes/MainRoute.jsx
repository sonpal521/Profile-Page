import { Routes, Route, Navigate } from "react-router-dom";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Error from "../pages/Error";

const MainRoute = () => {
  const auth = JSON.parse(localStorage.getItem("loggedin"));

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      {/* Profile only accessible if user exists, else redirect to login */}
      <Route
        path="/profile"
        element={auth ? <Profile /> : <Navigate to="/login" />}
      />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default MainRoute;
