import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import LeftSideBar from "../sidebar/LeftSideBar";
import RightSideBar from "../sidebar/RightSideBar";
import { Container } from "react-bootstrap";
import "./Layout.css";
import { useLocation, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { axiosGet } from "../../utils/Helper";
import { Loader } from "rsuite";

export const UserContext = React.createContext({});

export default function Layout(props) {
  const location = useLocation();
  const nevigate = useNavigate();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const getUserDetails = () => {
    const decodeToken = jwt_decode(token, process.env.REACT_APP_JWT_SECRET);
    axiosGet(`/api/users/${decodeToken.id}`)
      .then((res) => {
        setUser(res.data.user);
        setLoading(false)
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <Container fluid className="p-0">
        <UserContext.Provider value={{ user, setUser }}>
          {location.pathname === "/login" || location.pathname === "/" || location.pathname === "/signUp" ? (
            <div>{props.children}</div>
          ) : loading ? (
            <Loader />
          ) : (
            <>
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
            </>
          )}
        </UserContext.Provider>
      </Container>
    </>
  );
}
