import React from 'react';
import { Link } from 'react-router-dom';

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => (
        <div
          key={comment?._id}
          className="bg-white border-1 bg-gray-100 border-white mb-1 rounded-lg shadow content-center p-2 text-md text-gray-700 flex flex-row flex-wrap"
        >
          <div>
            <Link
              to={`/user/${comment.author._id}`}
              className="hover:bg-gray-200 p-2 items-center flex rounded-full justify-center"
            >
              <img
                className="h-8 w-8 rounded-full"
                src={comment?.author?.avatarUrl}
                alt=""
              />
            </Link>
          </div>
          <div>
            <Link
              to={`/user/${comment.author._id}`}
              className="flex items-center justify-between w-full rounded ml-4 hover:underline"
            >
              <h6 className="text-sm overflow-hidden">
                {comment?.author?.name}
              </h6>
            </Link>
            <p className="text-md ml-4">{comment?.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
