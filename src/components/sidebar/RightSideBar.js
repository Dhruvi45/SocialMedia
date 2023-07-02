import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { axiosGet } from "../../utils/Helper";
import "./SideBar.css";
import "./RightSideBar.css";
import { Button, Col, Row } from "react-bootstrap";
export default function RightSideBar() {
  const [userList, setUserList] = useState([]);
  const [isFollow, setIsFollow] = useState(false);

  const getUserList = async () => {
    await axiosGet(`/api/users`)
      .then((res) => {
        setUserList(res.data.users);
      })
      .catch((error) => {
        console.log("error", error);
        // toast.error(error)
      });
  };

  const follow = () => {};

  const unFollow = () => {};

  useEffect(() => {
    getUserList();
  }, []);
  return (
    <Sidebar>
      <Menu>
        {userList.length > 0 &&
          userList.map((user, index) => {
            return (
              <MenuItem
                className={`rightMenu ${
                  index % 2 === 0 ? "even" : "odd"
                } pt-2 pb-2`}
              >
                <Row>
                  <Col>
                    <Row className="followName">
                      {" "}
                      {user.firstName} {user.lastName}{" "}
                    </Row>
                    <Row className="followName">@ {user.username} </Row>
                  </Col>
                  <Col className="me-0">
                    <Button
                      className="followBtn mt-1"
                      onClick={() => {
                        if (isFollow) {
                          follow();
                        } else {
                          unFollow();
                        }
                      }}
                    >
                      {isFollow ? "UnFollow" : "Follow"}
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
