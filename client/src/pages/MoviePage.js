import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StarIcon } from '@heroicons/react/outline';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';

const MoviePage = ({ match }) => {
	const [movieDetails, setMovieDetails] = useState();

	const key = process.env.REACT_APP_TMDB_KEY;

	useEffect(() => {
		const getMovieDetails = async () => {
			const movieId = match.params.id
			const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`;
			const res = await axios.get(movieUrl);
			setMovieDetails(res.data);
		}

		getMovieDetails()

		// eslint-disable-next-line
	}, [])

	console.log(movieDetails);

	return (
		<div>
			<div className="fixed max-w-full inset-x-0 z-20">
				<Navbar />
			</div>
			{!movieDetails ?
				<div>
					<Loading />
				</div> :

				<div className="py-24">
					<div className="flex mt-1 justify-between p-5">
						<div className="w-full lg:w-1/3 lg:rounded-r max-w-screen max-h-screen object-cover">
							<img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} className="" alt={movieDetails.title} />
						</div>

						<div className="pl-2 w-full lg:w-2/3">
							<h3 className="font-bold text-lg text-left md:text-md">{movieDetails.title}</h3>
							<h5 className="text-xs text-left mb-4">{movieDetails.release_date}</h5>
							<div className="">
								<p className='text-sm flex items-center'>Rating: {movieDetails.vote_average}<StarIcon className="h-4 w-4 text-yellow-500" /> </p>
							</div>
							<p className='text-xs h-auto text-left'>{movieDetails.overview}</p>
						</div>
					</div>
				</div>
			}
		</div>
	)
}

export default MoviePage
