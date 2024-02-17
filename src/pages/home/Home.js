import React, { useState } from "react";
import { useEffect } from "react";
import { axiosGet } from "../../utils/Helper";
import { Loader } from "rsuite";
import PostCard from "../../components/PostCard/PostCard";
import AddPost from "../posts/AddPost";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPost = async () => {
    await axiosGet(`/api/posts`)
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((error) => {
        console.log("error", error);
        // toast.error(error)
      });
    setLoading(false);
  };

 const manageUserPost = () => {
    userPosts.every((userPost) => {
      posts.every((post) => {
        if (userPost._id === post._id) {
          post.isMyPost = true;
        } else {
          post.isMyPost = false;
        }
      });
    });
  };
  useEffect(() => {
    setLoading(true);
    getPost();
    // manageUserPost()
  }, []);

  return (
    <>
      {loading && posts.length === 0 ? (
        <Loader size="lg" />
      ) : (
        <div>
          <AddPost setPosts={setPosts} />
          {posts.map((post, index) => {
            return (
              <>
                <PostCard key={index} post={post} setPosts={setPosts} calledFrom={"home"} />
              </>
            );
          })}
        </div>
      )}
    </>
  );
}
