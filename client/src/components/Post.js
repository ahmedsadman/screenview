import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { XIcon } from "@heroicons/react/outline";
import HoverRating from "./HoverRating";
import PostSearchBar from "./PostSearchBar";
import MovieShowCard from "./MovieShowCard";

const Post = ({ onPostComplete }) => {
  const { user } = useAuth0();

  const [selectedPostType, setSelectedPostType] = useState("watch");
  const [selectedShow, setSelectedShow] = useState(null);
  const [fromPost, setFromPost] = useState(true);

  const [mediaId, setMediaId] = useState(null);
  const [content, setContent] = useState("");
  const [rating, setRating] = useState(null);

  const postChangeHandler = (e) => {
    if (e.target.value === "watch") {
      setRating(null);
    }
    setSelectedPostType(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!mediaId || !content) {
      alert("Please fill up all the fields");
      return;
    }
    onPostComplete(selectedPostType, content, mediaId, rating);
    setMediaId(null);
    setContent("");
    setSelectedShow(null);
  };

  // Select Movie for posting purpose
  const selectShowHandler = (show) => {
    setSelectedShow(show);
    setMediaId(show.id);
  };

  const showSelectHandler = () => {
    setSelectedShow("");
  };

  const isReview = selectedPostType === "review";

  return (
    <div>
      <div className="flex items-center">
        <img
          className="h-10 w-10 mr-4 rounded-full"
          src={user.picture}
          alt=""
        />
        <h4>What are you feeling....</h4>
      </div>
      <div className="flex justify-between mt-2 items-center mb-4">
        <div className="flex justify-start relative z-10">
          <PostSearchBar
            fromPost={fromPost}
            selectHandler={selectShowHandler}
          />
        </div>

        <div className="w-1/3">
          <select
            className="w-full p-2 rounded-lg bg-gray-100 shadow border float-left"
            onChange={postChangeHandler}
          >
            <option value="watch">Watch</option>
            <option value="review">Review</option>
          </select>
        </div>
      </div>

      <div className="">
        <form>
          {selectedShow ? (
            <div className="flex">
              <MovieShowCard show={selectedShow} />
              <button
                className="flex h-10 justify-start bg-white rounded-md p-2 text-gray-400 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={showSelectHandler}
              >
                <XIcon
                  className="h-6 w-6 flex text-right"
                  aria-hidden="true"
                  onClick={() => setMediaId(null)}
                />
              </button>
            </div>
          ) : (
            ""
          )}
          <div className="w-full flex flex-row flex-wrap mt-3 items-center">
            <div className="w-full">
              <textarea
                className="bg-gray-100 w-full rounded-lg shadow border p-2"
                rows="5"
                placeholder="Express Yourself"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            {isReview && (
              <div className="w-1/3">
                <HoverRating
                  value={rating || 2}
                  onRatingChange={(val) => setRating(val)}
                />
              </div>
            )}
            <div className={isReview ? "w-2/3" : "w-3/3"}>
              <button
                type="button"
                className="float-right bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg"
                onClick={onSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Post;
