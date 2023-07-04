import React, { useContext, useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { axiosGet, axiosPost } from "../../utils/Helper";
import "./SideBar.css";
import "./RightSideBar.css";
import { Button, Col, Row } from "react-bootstrap";
import { UserContext } from "../layout/Layout";

export default function RightSideBar() {
  const { user, setUser } = useContext(UserContext)
  const [userList, setUserList] = useState([]);
  const token = localStorage.getItem("token");

  const getUserList = async () => {
    await axiosGet(`/api/users`)
      .then((res) => {
        const filteredList = res.data.users.filter((obj) => obj._id !== user._id)
        console.log('filteredList', filteredList)
        setUserList(filteredList);
      })
      .catch((error) => {
        console.log("error", error);
        // toast.error(error)
      });
  };

  const follow = (userId) => {
    axiosPost(`/api/users/follow/${userId}`, {}, token)
      .then((res) => {
        setUser(res.data.user)
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const unFollow = (userId) => {
    axiosPost(`/api/users/unfollow/${userId}`, {}, token)
      .then((res) => {
        setUser(res.data.user)
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  useEffect(() => {
    getUserList();
  }, []);
  return (
    <Sidebar>
      <Menu>
        {userList.length > 0 &&
          userList.map((userFromUserList, index) => {
            return (
              <MenuItem
                className={`rightMenu ${index % 2 === 0 ? "even" : "odd"
                  } pt-2 pb-2`}
              >
                <Row>
                  <Col>
                    <Row className="followName">
                      {" "}
                      {userFromUserList.firstName} {userFromUserList.lastName}{" "}
                    </Row>
                    <Row className="followName">@ {userFromUserList.username} </Row>
                  </Col>
                  <Col className="me-0">
                    <Button
                      className="followBtn mt-1"
                      onClick={() => {
                        if (!user.following.some((obj) => obj._id === userFromUserList._id)) {
                          follow(userFromUserList._id);
                        } else {
                          unFollow(userFromUserList._id);
                        }
                      }}
                    >
                      {!user.following.some((obj) => obj._id === userFromUserList._id) ? "Follow" : "UnFollow"}
                    </Button>
                  </Col>
                </Row>
              </MenuItem>
            );
          })}
      </Menu>
    </Sidebar>
  );
}
