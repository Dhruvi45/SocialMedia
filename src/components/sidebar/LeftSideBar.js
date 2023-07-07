import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./SideBar.css";
import "./LeftSideBar.css"
import { useNavigate } from "react-router-dom";
export default function LeftSideBar() {
  const navigate = useNavigate()
  return (
    <Sidebar  className="custom-sidebar">
      <Menu>
        <MenuItem
          onClick={() => navigate("/MyBookmark")}
        >
          Bookmarks
        </MenuItem>
      </Menu>
    </Sidebar>
  );
}
