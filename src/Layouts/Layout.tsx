import React from "react";
import Navbar from "../components/Navbar";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SubPage from "../pages/SubPage";
import MainPage from "../pages/MainPage";
import TopPage from "../pages/TopPage";

const Layout: React.FC<any> = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
