import { useState } from "react";
import "./App.css";
import Index from "./Routes/Index";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Index />
      </Router>
    </>
  );
}

export default App;
