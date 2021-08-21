import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StarIcon } from '@heroicons/react/solid';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import ReactPlayer from 'react-player';

const MoviePage = ({ match }) => {
	const [movieDetails, setMovieDetails] = useState();
	const [movieVideos, setMovieVideos] = useState();

	const key = process.env.REACT_APP_TMDB_KEY;

	useEffect(() => {
		const getMovieDetails = async () => {
			const movieId = match.params.id;
			const movieUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-US`;
			const movieVideosUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`;
			const resDetails = await axios.get(movieUrl);
			const resVideos = await axios.get(movieVideosUrl);
			setMovieDetails(resDetails.data);
			setMovieVideos(resVideos.data.results.slice(0, 3));
		}



		getMovieDetails()

		// eslint-disable-next-line
	}, [])

	// console.log(movieVideos);

	return (
		<div>
			<div className="fixed max-w-full inset-x-0 z-20">
				<Navbar />
			</div>
			{!movieDetails ?
				<div>
					<Loading />
				</div> :

				<div className="py-24 flex justify-center">
					<div className='items-center max-w-3/4 flex justify-center flex-col'>
						<div className="max-w-1/2 items-center text-center">
							<div className="flex mt-1 justify-center p-5 max-w-1/2">
								<div className="w-full lg:w-1/5 lg:rounded-r max-w-screen max-h-screen object-cover">
									<img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} className="" alt={movieDetails.title} />
								</div>

								<div className="pl-3 w-full lg:w-4/5">
									<h3 className="font-bold text-lg text-left md:text-md">{movieDetails.title}</h3>
									<h5 className="text-xs text-left mb-4">{movieDetails.release_date}</h5>
									<div className="">
										<p className='text-sm flex items-center'>Rating: {movieDetails.vote_average}<StarIcon className="h-4 w-4 text-yellow-500" /> </p>
									</div>
									<p className='h-auto text-left text-sm'>{movieDetails.overview}</p>

									<div className="flex text-xs mt-4"><p className="text-xs underline">Genres:</p>
										{movieDetails.genres.map(genre => (
											<p className='text-xs ml-4 no-underline' key={genre.id}>{genre.name};</p>
										))}
									</div>


								</div>
							</div>
						</div>

						<div>
							{!movieVideos ? <Loading /> :
								<div className="lg:rounded-r max-w-screen mx-2 max-h-screen object-cover flex justify-center">
									{movieVideos.map(video => (
										<div className="p-2" key={video.key}>
											<ReactPlayer width='426px' height='240px' controls url={`https://www.youtube.com/watch?v=${video.key}`} />
										</div>

									))}
									{/* <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} className="w-1/4" alt={movieDetails.title} /> */}
								</div>
							}

						</div>
					</div>
				</div>
			}
		</div>
	)
}

export default MoviePage
