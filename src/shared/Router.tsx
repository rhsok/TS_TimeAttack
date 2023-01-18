import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Detail from "../pages/Detail";
import Main from "../pages/Main";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/123" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
