import React, { useContext } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { UserContext } from "../layout/Layout";
import { FaUser } from "react-icons/fa";

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
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">
          {" "}
          <span className="headerTitle">Friendify</span>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        {user !== undefined && (
          <>
            <div className="me-2">
              <FaUser className="me-2" size={25} />
              {user.firstName} {user.lastName}
            </div>
            <NavDropdown id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My profile</NavDropdown.Item>
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
