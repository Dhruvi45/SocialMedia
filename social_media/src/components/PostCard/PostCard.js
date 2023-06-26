import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsSuitHeart } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FiEdit2 } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import moment from "moment";
import "./PostCard.css";
export default function PostCard({ post }) {
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
            {post.content}
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
        <BsSuitHeart size={25} className="border-icon-heart" />
        <span>{post.likes.likeCount}</span>
        <CiBookmark size={25} className="border-icon-save" />
        <FaRegComment size={25} className="border-icon-comment" />
        <FiEdit2 size={25} className="border-icon-edit" />
        <RiDeleteBinLine size={25} className="border-icon-delete" />
      </Card.Footer>
    </Card>
  );
}
