import React from "react";
import MainRoute from "./routes/MainRoute";
import "./index.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-gray-400">
      <ToastContainer />
      <MainRoute />
    </div>
  );
}

export default App;
