import React from "react";
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Pages/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ThemeProvider } from "react-bootstrap";

const App = () => {
  return (
    <>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
