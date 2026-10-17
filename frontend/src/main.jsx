import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import AdminLayout from "./admin/layouts/AdminLayout.jsx";

import GuestLayout from "./public/layouts/PublicLayout.jsx";
import Home from "./public/pages/Home.jsx";

import './assets/css/style.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
