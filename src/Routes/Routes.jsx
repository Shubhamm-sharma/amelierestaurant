import React from "react";
import { useRoutes } from "react-router-dom";
import Homepage from "../Pages/Homepage/Homepage";
import SpecificRestraunt from "../Pages/SpecificRestrauntsPage/SpecificRestraunt";

const Routes = () => {
  const element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "/:name", element: <SpecificRestraunt /> },
  ]);
  return element;
};

export default Routes;
