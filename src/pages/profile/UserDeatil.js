import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Card, Col, Row, Form } from "react-bootstrap";
import { UserContext } from "../../components/layout/Layout";
import { axiosPost } from "../../utils/Helper";
// import { Avatar } from "rsuite";
import { avatars } from "../../utils/CommonData";
import "./UserDetail.css";
import { Avatar, Dropdown, SelectPicker, Menu } from "rsuite";
export default function UserDeatil() {
  const { user, setUser } = useContext(UserContext);

  const [isEdit, setIsEdit] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(user.avatar);
  const token = localStorage.getItem("token");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.avatar = selectedAvatar
    if (isEdit) {
      axiosPost("/api/users/edit", data, token)
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((error) => {
          console.log("error", error);
          // toast.error(error)
        });
    }
    setIsEdit(!isEdit);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="m-3 custom-card">
          <Card.Body>
            <Row>
              <Col>
                <div className="form-group d-flex">
                  <label className="mt-2 me-2 userDetailLabel">
                    FirstName:
                  </label>
                  {isEdit ? (
                    <>
                      <input
                        type="text"
                        className={`form-control mt-1 ${
                          errors.firstName ? "border border-danger" : ""
                        }`}
                        defaultValue={user.firstName}
                        placeholder="Enter firstName"
                        {...register("firstName", { required: true })}
                      />
                      {errors.firstName && (
                        <p className="text-danger">
                          Please enter number for firstName.
                        </p>
                      )}
                    </>
                  ) : (
                    <span className="mt-2">{user.firstName}</span>
                  )}
                </div>
              </Col>
              <Col>
                <div className="form-group d-flex">
                  <label className="mt-2 me-2 userDetailLabel">LastName:</label>
                  {isEdit ? (
                    <>
                      <input
                        type="text"
                        className={`form-control mt-1 ${
                          errors.lastName ? "border border-danger" : ""
                        }`}
                        defaultValue={user.lastName}
                        placeholder="Enter lastName"
                        {...register("lastName", { required: true })}
                      />
                      {errors.lastName && (
                        <p className="text-danger">
                          Please enter number for lastName.
                        </p>
                      )}
                    </>
                  ) : (
                    <span className="mt-2">{user.lastName}</span>
                  )}
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <div className="form-group d-flex">
                  <label className="mt-2 me-2 userDetailLabel">UserName:</label>
                  {isEdit ? (
                    <>
                      <input
                        type="text"
                        className={`form-control mt-1 ${
                          errors.username ? "border border-danger" : ""
                        }`}
                        defaultValue={user.username}
                        placeholder="Enter username"
                        {...register("username", { required: true })}
                      />
                      {errors.username && (
                        <p className="text-danger">
                          Please enter number for username.
                        </p>
                      )}
                    </>
                  ) : (
                    <span className="mt-2">{user.username}</span>
                  )}
                </div>
              </Col>
              <Col>
                <div className="form-group d-flex">
                  <label className="mt-2 me-2 userDetailLabel">Password:</label>
                  {isEdit ? (
                    <>
                      <input
                        type="password"
                        className={`form-control mt-1 ${
                          errors.password ? "border border-danger" : ""
                        }`}
                        defaultValue={user.password}
                        placeholder="Enter password"
                        {...register("password", { required: true })}
                      />

                      {errors.password && (
                        <p className="text-danger">
                          Please enter number for password.
                        </p>
                      )}
                    </>
                  ) : (
                    <span className="mt-2">{user.password}</span>
                  )}
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <div className="form-group d-flex">
                <label className="mt-2 me-2 userDetailLabel">Avatar:</label>

                {isEdit ? (
                  <Dropdown
                    title={
                      <Avatar
                        circle
                        src={selectedAvatar}
                        style={{ marginRight: 10 }}
                      />
                    }
                    onSelect={(eventKey) => setSelectedAvatar(eventKey)}
                  >
                    {avatars.map((avatar, index) => (
                      <Dropdown.Item key={index} eventKey={avatar.value}>
                        <Avatar
                          circle
                          src={avatar.value}
                          style={{ marginRight: 10 }}
                        />{" "}
                        {avatar.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown>
                ) : (
                  <span className="mt-2">
                    <Avatar circle src={user.avatar} alt={user.username} />
                  </span>
                )}
              </div>
            </Row>
          </Card.Body>
          <Card.Footer>
            <Button
              className="CreatePost-btn custom-btn"
              type="submit"
            >
              {" "}
              {!isEdit ? "Edit Details" : "update"}
            </Button>
          </Card.Footer>
        </Card>
      </form>
    </>
  );
}
