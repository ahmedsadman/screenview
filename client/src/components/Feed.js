import React from 'react'
import Post from './Post'
import Review from './Review'

const Feed = () => {
	return (
		<div>
			
			<div className="w-full flex flex-row flex-wrap">
				
				<div className="w-full bg-white-100 h-screen flex flex-row flex-wrap justify-center ">
					
  					<div className="w-full sm:w-3/4 md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full antialiased">
						  
    					<div className="bg-white w-full shadow-lg border-2 border-gray-100 rounded-lg p-5">
							<Post/>
    					</div>
    
        				<Review/>		       						
      						</div>
      					</div>
    				</div>
  				</div>
	)
}

export default Feed
