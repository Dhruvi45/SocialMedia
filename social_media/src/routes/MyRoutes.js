import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/home/Home";
import MyProfile from "../pages/profile/MyProfile";
export default function MyRoutes() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </Layout>
  );
}
