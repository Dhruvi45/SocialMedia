import React, { useState,useContext } from "react";
import { Button, Card, Col, Row, Form } from "react-bootstrap";
import { axiosPost } from "../../utils/Helper";
import "./AddPost.css";
import { Avatar} from "rsuite";
import { UserContext } from "../../components/layout/Layout";

export default function AddPost(props) {
  const { setPosts } = props;
  const { user } = useContext(UserContext);
  const [newPost, setNewPost] = useState();
  const token = localStorage.getItem("token");

  const onCreate = () => {
    axiosPost("/api/posts", { content: newPost, avatar: user.avatar },token)
      .then((res) => {
        setPosts(res.data.posts);
        setNewPost('')
      })
      .catch((error) => {
        console.log("error", error);
        // toast.error(error)
      });
  };
  
  return (
    <Card className="m-3 custom-card">
      <Card.Body>
        <Card.Title>
          <Row>
            <Col md={1}>
              {/* <img
                className="profileImg"
                src={require("../../assets/images/profile1.jpg")}
                alt="profile"
              /> */}
              <Avatar circle src={user.avatar} />

            </Col>
            <Col md={11} className="ps-0">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Create new posts....."
                className="createPost"
                value={newPost}
                onChange={(e) => {
                  setNewPost(e.target.value);
                }}
              />
            </Col>
          </Row>
        </Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button className="CreatePost-btn custom-btn" onClick={() => onCreate()}>
          {" "}
          Create new post
        </Button>
      </Card.Footer>
    </Card>
  );
}
