import { XCircleIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PosterCard = ({ show, fromUserPage, handleWatchListRemove }) => {
  const image_url = `https://image.tmdb.org/t/p/w500${show.poster_path}`;
  const [details, setDetails] = useState(false);

  const myStyle = {
    backgroundImage: `url(${image_url})`,
    height: '18rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const bgStyled = {
    backgroundImage: `linear-gradient(to right,
			rgba(0, 0, 0, 0.401) 0%, rgba(0, 0, 0, 0.401) ),
			url(${image_url})`,
    height: '18rem',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const setBgStyle = () => {
    setDetails(false);
  };

  const setStyle = () => {
    setDetails(true);
  };

  //TODO: remove movie logic
  const removeMovie = () => {
    handleWatchListRemove(show.id);
  };

  return (
    <div className="p-2">
      <div className="border-gray-200 rounded border-4 hover:border-blue-400">
        <div
          style={!details ? myStyle : bgStyled}
          onMouseEnter={setStyle}
          onMouseLeave={setBgStyle}
        >
          {details ? (
            <div className="pt-8 text-center relative">
              <button className="has-tooltip" onClick={removeMovie}>
                <span className="tooltip rounded shadow-lg text-white text-xs -mt-4 bg-gray-900 p-2 ml-12">
                  Remove
                </span>
                {!fromUserPage ? (
                  <XCircleIcon className="w-8 h-8 text-red-400 absolute top-0 right-0 absolute" />
                ) : null}
              </button>
              <span className="text-xl flex items-center justify-center font-bold text-white tracking-wider leading-relaxed font-sans">
                {show.vote_average}
                <StarIcon className="h-4 w-4 text-yellow-500" />{' '}
              </span>

              <Link to={`/movie/${show.id}`}>
                <button className="text-center rounded-lg px-4 p-2 bg-blue-400 text-white mt-32 text-md">
                  Details
                </button>
              </Link>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      <p>{show.title}</p>
    </div>
  );
};

export default PosterCard;
