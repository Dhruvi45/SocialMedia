import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "./SideBar.css";
import "./RightSideBar.css"
export default function RightSideBar() {
  return (
    <Sidebar>
      <Menu>
        <MenuItem className="rightMenu"> Pie charts </MenuItem>
        <MenuItem className="rightMenu"> Line charts </MenuItem>
        <MenuItem className="rightMenu"> Documentation </MenuItem>
        <MenuItem className="rightMenu"> Calendar </MenuItem>
      </Menu>
    </Sidebar>
  );
}
