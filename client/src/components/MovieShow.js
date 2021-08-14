import React from 'react'
import { Link } from 'react-router-dom'



const MovieShow = ({ show }) => {
	return (
		<div className="flex mt-1 justify-between">
			
			
					<div className="w-full lg:w-1/3 lg:rounded-r max-w-screen max-h-screen object-cover">
						<img src={show.image} alt={show.title} />
					</div>
				
					<div className="p-2 w-full lg:w-2/3">
						<h3 className="font-bold text-lg">{show.title}</h3>
						<h5 className="text-sm mb-4">{show.date}</h5>
						<div className="grid grid-cols-2 gap-y-4 gap-x-8 flex justify-between">
								<p>Reviews: {show.reviewCount}</p>
								<p>Seen By: {show.watchedCount}</p>
						</div>
					</div>
                
            
		
            
        </div>
	)
}

export default MovieShow



