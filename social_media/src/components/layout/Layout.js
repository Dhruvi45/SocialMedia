import React from "react";
import Header from "../header/Header";
import LeftSideBar from "../sidebar/LeftSideBar";
import RightSideBar from "../sidebar/RightSideBar"
import { Row, Col, Container } from "react-bootstrap";
import "./Layout.css"
export default function Layout(props) {
  return (
    <>
      <Container fluid className="p-0">
        <Header />
        <div className="me-0 d-flex">
          <div>
            <LeftSideBar />
          </div>
          <div className="component"> {props.children}</div>
          <div>
            <RightSideBar />
          </div>
        </div>
      </Container>
    </>
  );
}
