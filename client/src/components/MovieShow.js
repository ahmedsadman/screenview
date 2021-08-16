import React from 'react'



const MovieShow = ({ show }) => {
	console.log(show)
	const image_url = `https://image.tmdb.org/t/p/w500${show.poster_path}`
	return (
		<div className="flex mt-1 justify-between">
			<div className="w-full lg:w-1/3 lg:rounded-r max-w-screen max-h-screen object-cover">
				<img src={image_url} className=""alt={show.title} />
			</div>
		
			<div className="p-2 w-full lg:w-2/3">
				<h3 className="font-bold text-lg">{show.title}</h3>
				<h5 className="text-sm mb-4">{show.date}</h5>
				<div className="grid grid-cols-2 gap-y-4 gap-x-8 flex justify-between">
					<p>Rating: {show.vote_average}</p>
					<p>Seen By: {show.watchedCount}</p>		
				</div>
				{show.reviewText ? <p>{show.reviewText}</p> : ''}
			</div>            
        </div>
	)
}

export default MovieShow



