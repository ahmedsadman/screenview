import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { ShieldCheckIcon, ShieldExclamationIcon } from "@heroicons/react/solid";
import Post from "./Post";
import Status from "./Status";
import API from "../api";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [feedLoading, setFeedLoading] = useState(true);
  const { getAccessTokenSilently } = useAuth0();

  const getUserFeed = async () => {
    const token = await getAccessTokenSilently();
    const api = new API(token);
    const res = await api.getUserFeed();
    setPosts(res.posts);
    setFeedLoading(false);
  };

  const onPostComplete = async (type, content, mediaId, rating = null) => {
    console.log(type, content, mediaId, rating);
    const token = await getAccessTokenSilently();
    const api = new API(token);
    await api.createPost(type, content, mediaId, rating);
    alert("Post created");
  };

  const addComment = async (id, content) => {
    if (!content) {
      alert("You must write something");
      return;
    }
    const token = await getAccessTokenSilently();
    const api = new API(token);
    await api.addPostComment(id, content);
    await getUserFeed();
  };

  const ConnectionHint = () => (
    <div
      className="bg-green-100 border-t-4 border-green-500 rounded-b text-green-900 px-4 py-3 shadow-md mb-2"
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          <svg
            className="fill-current h-6 w-6 text-teal-500 mr-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p className="font-bold">Your feed seems to be empty </p>
          <p className="text-sm">
            Make sure to follow others from the{" "}
            <Link
              to="/connections"
              className="text-green-500 font-bold italic hover:underline hover:text-green-700"
            >
              Connection Page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    getUserFeed();
  }, []);

  return (
    <div>
      <div className="w-full flex flex-row flex-wrap">
        <div className="w-full bg-white-100 h-screen flex flex-row flex-wrap justify-center ">
          <div className="w-full sm:w-3/4 md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full antialiased">
            {!feedLoading && posts.length === 0 ? <ConnectionHint /> : null}
            <div className="bg-white w-full shadow-lg border-2 border-gray-100 rounded-lg p-5">
              <Post onPostComplete={onPostComplete} />
            </div>
            {feedLoading && <div className="mt-4 mb-4">Loading feed...</div>}
            {posts.map((post) => (
              <div key={post._id}>
                <Status post={post} addComment={addComment} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
