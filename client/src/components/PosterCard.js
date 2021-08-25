import { XCircleIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const PosterCard = ({ show, handleWatchListRemove }) => {
	const image_url = `https://image.tmdb.org/t/p/w500${show.poster_path}`;
	const [details, setDetails] = useState(false);

  const myStyle = {
    backgroundImage: `url(${image_url})`,
    height: "18rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const bgStyled = {
    backgroundImage: `linear-gradient(to right,
			rgba(0, 0, 0, 0.401) 0%, rgba(0, 0, 0, 0.401) ),
			url(${image_url})`,
    height: "18rem",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const setBgStyle = (e) => {
    setDetails(false);
  };

  const setStyle = (e) => {
    setDetails(true);
  };

	//TODO: remove movie logic
	const removeMovie = () => {
		handleWatchListRemove(show.id);
	}

export default PosterCard;
