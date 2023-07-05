import React, { useContext, useState } from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import { BsSuitHeart, BsSuitHeartFill } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { RxBookmark, RxBookmarkFilled } from "react-icons/rx";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import moment from "moment";
import "./PostCard.css";
import { UserContext } from "../layout/Layout";
import { axiosPost, axiosDelete } from "../../utils/Helper";
import Swal from "sweetalert2";

export default function PostCard({ post, setPosts }) {
  const { user, setUser } = useContext(UserContext);
  const token = localStorage.getItem("token");
  const [isEdit, setIsEdit] = useState(false);
  const [editPost, setEditPost] = useState();
console.log('post.likes.likedBy', post.likes.likedBy)
  const likePost = () => {
    axiosPost(`/api/posts/like/${post._id}`, {}, token)
      .then((res) => {
        console.log('res.data.posts', res.data.posts)
        setPosts(res.data.posts);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const bookmarkPost = () => {
    axiosPost(`/api/users/bookmark/${post._id}`, {}, token)
      .then((res) => {
        setUser((data) => {
          return {
            ...data,
            bookmarks:res.data.bookmarks
          }
        }
        )
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const RemoveBookmarkPost = () => {
    axiosPost(`/api/users/remove-bookmark/${post._id}`, {}, token)
      .then((res) => {
        setUser((data) => {
          return {
            ...data,
            bookmarks:res.data.bookmarks
          }
        }
        )
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const dislikePost = () => {
    axiosPost(`/api/posts/dislike/${post._id}`, {}, token)
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const deletePost = () => {
    axiosDelete(`/api/posts/${post._id}`, token)
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const updatePost = () => {
    axiosPost(`/api/posts/edit/${post._id}`, { content: editPost }, token)
      .then((res) => {
        setPosts(res.data.posts);
        setIsEdit(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <Card className="m-3">
      <Card.Body>
        <Card.Title>
          <Row>
            <Col md={1}>
              <img
                className="profileImg"
                src={require("../../assets/images/profile1.jpg")}
                alt="profile"
              />
            </Col>
            <Col md={11} className="ps-0">
              <Row>
                <div className="d-flex">
                  <span className="title">{post.name}</span>
                  <span className="postDate">
                    {moment(new Date(post.createdAt))
                      .subtract(1, "days")
                      .calendar()}
                  </span>
                </div>
              </Row>
              <Row>
                <span className="username">@{post.username}</span>
              </Row>
            </Col>
          </Row>
        </Card.Title>
        <Card.Text>
          <div className="descreption" title={post.content}>
            {isEdit ? (
              <>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Create new posts....."
                  className="createPost"
                  value={editPost}
                  onChange={(e) => {
                    setEditPost(e.target.value);
                  }}
                />
                <Button className="CreatePost-btn" onClick={() => updatePost()}>
                  {" "}
                  Update post
                </Button>
              </>
            ) : (
              post.content
            )}
          </div>
          {post.image && (
            <div className="postImage">
              <img
                src={require(`../../assets/images/${post.image}.jpg`)}
                alt={post.image}
              />
            </div>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="iconRows">
        {post.likes.likedBy.length> 0 && post.likes.likedBy.some((likeby) => likeby._id === user._id) ? (
          <BsSuitHeartFill
            size={25}
            className="border-icon-heart me-2"
            onClick={() => dislikePost()}
          />
        ) : (
          <BsSuitHeart
            size={25}
            className="border-icon-heart me-2"
            onClick={() => likePost()}
          />
        )}

        <span className="me-5">{post.likes.likeCount}</span>
        {user.bookmarks.some((bookmark) => bookmark._id === post._id) ? (
          <RxBookmarkFilled
            size={25}
            className="border-icon-save me-5"
            onClick={() => RemoveBookmarkPost()}
          />
        ) : (
          <RxBookmark
            size={25}
            className="border-icon-save me-5"
            onClick={() => bookmarkPost()}
          />
        )}

        {user.username === post.username && (
          <>
            <FiEdit2
              size={25}
              className="border-icon-edit me-5"
              onClick={() => {
                setEditPost(post.content);
                setIsEdit(!isEdit);
              }}
            />
            <RiDeleteBinLine
              size={25}
              className="border-icon-delete"
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to delete this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    deletePost();
                  }
                });
              }}
            />
          </>
        )}
      </Card.Footer>
    </Card>
  );
}
