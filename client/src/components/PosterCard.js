import { StarIcon } from '@heroicons/react/solid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PosterCard = ({ show }) => {
	const image_url = `https://image.tmdb.org/t/p/w500${show.poster_path}`;
	const [details, setDetails] = useState(false);

	const myStyle = {
		backgroundImage: `url(${image_url})`,
		height: '18rem',
		backgroundSize: 'cover',
		backgroundPosition: 'center'
	}

	const bgStyled = {
		backgroundImage: `linear-gradient(to right,
			rgba(0, 0, 0, 0.401) 0%, rgba(0, 0, 0, 0.401) ),
			url(${image_url})`,
		height: '18rem',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	}

	const setBgStyle = (e) => {
		setDetails(false)
	}

	const setStyle = (e) => {
		setDetails(true)
	}


	return (
		<div className="p-2">
			<div className="border-gray-200 rounded border-4 hover:border-blue-400">
				{/* TODO: Change Link to movie details path */}
				<Link to={image_url} >
					<div style={!details ? myStyle : bgStyled} onMouseEnter={setStyle} onMouseLeave={setBgStyle}>
						{details ?
							<div className="pt-8 text-center">
								<span className="text-xl flex items-center justify-center font-bold text-white tracking-wider leading-relaxed font-sans">{show.vote_average}<StarIcon className="h-4 w-4 text-yellow-500" /> </span>

								<button className="text-center rounded-lg p-2 bg-blue-400 text-white mt-32 text-md">Details</button>
							</div> :
							''
						}

					</div>
				</Link>
			</div>

			<p>{show.title}</p>
		</div>
	)
}

export default PosterCard
