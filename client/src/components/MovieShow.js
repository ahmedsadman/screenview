import { StarIcon } from '@heroicons/react/solid'
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
				<h3 className="font-bold text-lg md:text-md">{show.title}</h3>
				<h5 className="text-xs mb-4">{show.release_date}</h5>
				<div className="">
					<p className='text-sm flex items-center'>Rating: {show.vote_average}<StarIcon className="h-4 w-4 text-yellow-500"/> </p>		
				</div>
				{show.reviewText ? <p>{show.reviewText}</p> : ''}
			</div>            
        </div>
	)
}

export default MovieShow



