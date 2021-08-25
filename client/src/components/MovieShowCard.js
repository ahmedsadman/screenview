import React from "react";
import { StarIcon } from "@heroicons/react/solid";

const MovieShowCard = ({ show, fromSearch, fromStatus }) => {
  const image_url = `https://image.tmdb.org/t/p/w500${show.poster_path}`;

  let posterClassName;
  let overViewDivClassName;

  if (fromStatus) {
    posterClassName =
      "w-1/6 xs:w-1/3 lg:rounded-r max-w-screen max-h-screen object-cover";
    overViewDivClassName = "pl-2 w-5/6 xs:w-2/3";
  } else {
    posterClassName =
      "w-full lg:w-1/3 lg:rounded-r max-w-screen max-h-screen object-cover";
    overViewDivClassName = "pl-2 w-full lg:w-2/3";
  }

  return (
    <div>
      <div className="flex mt-1 justify-between">
        <div className={posterClassName}>
          <img src={image_url} className="" alt={show.title} />
        </div>

        <div className={overViewDivClassName}>
          <h3 className="font-bold text-lg text-left md:text-md">
            {show.title}
          </h3>
          <h5 className="text-xs text-left mb-4">{show.release_date}</h5>
          <div className="">
            <p className="text-sm flex items-center">
              Rating: {show.vote_average}
              <StarIcon className="h-4 w-4 text-yellow-500" />{" "}
            </p>
          </div>
          {fromSearch ? (
            ""
          ) : (
            <p className="text-xs h-auto text-left">{show.overview}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieShowCard;
