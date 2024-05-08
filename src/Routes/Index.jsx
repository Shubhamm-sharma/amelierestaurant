import React from "react";
import Routes from "./Routes.jsx";
import { Router } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar.jsx";
const Index = () => {
  return (
    <>
      <Navbar />
      <Routes />
    </>
  );
};

export default Index;
