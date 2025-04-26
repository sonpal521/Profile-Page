import { Routes, Route, Navigate } from "react-router-dom";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Error from "../pages/Error";
import ProtectedRoute from "./ProtectedRoute";

const MainRoute = () => {
  const auth = JSON.parse(localStorage.getItem("loggedin"));

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/profile" element={<Profile />} />
      </Route>

      <Route path="/*" element={<Error />} />
    </Routes>
  );
};

export default MainRoute;
