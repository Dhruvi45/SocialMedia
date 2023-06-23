import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./SideBar.css";
import "./LeftSideBar.css"
export default function LefftSideBar() {
  return (
    <Sidebar>
      <Menu>
        <MenuItem className="leftMenu"> Pie charts </MenuItem>
        <MenuItem className="leftMenu"> Line charts </MenuItem>
        <MenuItem className="leftMenu"> Documentation </MenuItem>
        <MenuItem className="leftMenu"> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
}
