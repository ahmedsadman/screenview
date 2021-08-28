import React, { useState } from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import { Link } from 'react-router-dom';

const People = ({ user, actionHandler }) => {
  const [isLink, setIsLink] = useState(true);
  const [hoveredId, setHoveredId] = useState(null);

  const onButtonClick = () => {
    if (user.isFollowing) {
      actionHandler('unfollow', user._id);
      console.log('should unfollow');
    } else {
      actionHandler('follow', user._id);
      console.log('should follow');
    }
  };

  const handleMouseIn = () => {
    setIsLink(false);
  };

  const handleMouseOut = () => {
    setIsLink(true);
  };

  const selectClass = () => {
    let linkStyle =
      'flex mt-2 shadow-md border rounded-lg items-center justify-between w-full';
    if (isLink && hoveredId) {
      linkStyle =
        'flex mt-2 shadow-md border rounded-lg items-center justify-between w-full bg-gray-100';
    }

    return linkStyle;
  };

  return (
    <div>
      <div className={selectClass()}>
        <Link
          to={`/user/${user._id}`}
          className="flex items-center justify-between w-full hover:bg-gray-100"
        >
          <div className="w-1/2 h-18 p-4 items-center flex justify-center dark:bg-gray-800">
            <img
              src={user.avatarUrl}
              className="h-10 w-10 rounded-full"
              alt={user.name}
            />
          </div>
          <div className="w-1/2 h-18 justify-center dark:bg-gray-800">
            <h3 className="font-bold text-lg md:text-md">{user.name}</h3>
          </div>
        </Link>
        <div className="w-full w-1/4 h-18 flex justify-center dark:bg-gray-800">
          <button
            onClick={onButtonClick}
            onMouseEnter={() => handleMouseIn()}
            onMouseLeave={() => handleMouseOut()}
          >
            {!user.isFollowing ? (
              <PersonAddIcon
                fontSize="medium"
                className="text-blue-300 hover:text-blue-500"
              />
            ) : (
              <PersonAddDisabledIcon
                fontSize="medium"
                className="text-red-300 hover:text-red-500"
              />
            )}{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default People;
