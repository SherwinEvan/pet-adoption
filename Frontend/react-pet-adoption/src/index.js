import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "./index.css";
import theme from "./service/theme";
import { ThemeProvider } from '@mui/material/styles';
import HomePage from "./pages/home";
import SignUp from "./pages/authentication/signup";
import Login from "./pages/authentication/login";
import ForgotPassword from "./pages/authentication/forgotPassword";
import MyAccount from "./pages/authentication/myAccount";


axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.withCredentials = true;

export default function RouteApp() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/account" element={<MyAccount />} />
        </Routes>
      </Router>
      <ToastContainer />
    </ThemeProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouteApp />);
