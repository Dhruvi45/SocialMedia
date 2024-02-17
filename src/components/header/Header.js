import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { UserContext } from "../layout/Layout";
import { FaUser } from "react-icons/fa";
import { Avatar, Dropdown, SelectPicker, Menu } from "rsuite";

import "./Header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Navbar className="custom-navbar" variant="light">
      <Container fluid>
        <Navbar.Brand href="#home" className="mr-auto">
          {" "}
          <span className="headerTitle">Friendify</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/home")}>Home</Nav.Link>
        </Nav>
        {user !== undefined && (
          <>
            <NavDropdown
              
              id="navbarScrollingDropdown"
              title={
                <>
                  <Avatar circle src={user.avatar} />
                  <span className="userName">
                    {user.firstName} {user.lastName}
                  </span>
                </>
              }
            >
              <NavDropdown.Item onClick={() => navigate("/MyProfile")}>
                My profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => logout()}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </>
        )}
      </Container>
    </Navbar>
  );
}
