import React, { useState, useContext, useEffect } from "react";
import PostCard from "../../components/PostCard/PostCard";
import AddPost from "../posts/AddPost";
import { UserContext } from "../../components/layout/Layout";
import { axiosGet } from "../../utils/Helper";
import "./MyProfile.css";
import UserDeatil from "./UserDeatil";

export default function MyProfile() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  const getUserPost = async () => {
    await axiosGet(`/api/posts/user/${user.username}`)
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((error) => {
        console.log("error", error);
        // toast.error(error)
      });
  };
  useEffect(() => {
    getUserPost();
  }, []);

  return (
    <>
      <div className="profileTitle">My Details</div>
      <div>
        <UserDeatil />
      </div>
      <div className="profileTitle">My Posts</div>
      <div>
        <AddPost setPosts={setPosts} />
        {posts.map((post, index) => {
          return (
            <>
              <PostCard post={post} setPosts={setPosts} />
            </>
          );
        })}
      </div>
    </>
  );
}
