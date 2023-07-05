import React, { useContext, useEffect, useState } from 'react'
import { axiosGet } from '../../utils/Helper';
import { UserContext } from '../../components/layout/Layout';
import PostCard from '../../components/PostCard/PostCard';
import { Loader } from 'rsuite';

export default function MyBookmarks() {
  const { user } = useContext(UserContext)
  const [bookmarkPosts, setBookmarkPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const getBookmarkPost = async () => {
    await axiosGet(`/api/users/bookmark`, token)
      .then((res) => {
        console.log('res.data', res.data)
        setBookmarkPosts(res.data.bookmarks);
      })
      .catch((error) => {
        console.log("error", error);
        // toast.error(error)
      });
    setLoading(false)
  };
  useEffect(() => {
    setLoading(true)
    getBookmarkPost()
  }, [])
  return (
    <>
      {loading && bookmarkPosts.length === 0 ? (
        <Loader size="lg" />
      ) : (
        <div>
          {bookmarkPosts.length > 0 ? bookmarkPosts.map((post, index) => {
            return (
              <>
                <PostCard post={post} setPosts={setBookmarkPosts} />
              </>
            );
          }):<div>No data available </div>}
        </div>
      )}

    </>
  )
}
