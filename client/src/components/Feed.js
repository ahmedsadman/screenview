import React from 'react'
import Post from './Post'

const Feed = () => {
	return (
		<div>
			
			<div className="w-full flex flex-row flex-wrap">
				
				<div className="w-full bg-white-100 h-screen flex flex-row flex-wrap justify-center ">
					
  					<div className="w-full sm:w-3/4 md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full antialiased">
						  
    					<div className="bg-white w-full shadow-lg border-2 border-gray-100 rounded-lg p-5">
							<Post/>
    					</div>
    
    					<div className="mt-3 flex flex-col">
      						<div className="bg-white mt-3">
        						<img className="border rounded-t-lg shadow-lg" alt="" src="https://images.unsplash.com/photo-1572817519612-d8fadd929b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/>
        						<div className="bg-white border shadow p-5 text-xl text-gray-700 font-semibold">
          							A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
        						</div>
        						<div className="bg-white p-1 border shadow flex flex-row flex-wrap">
          							<div className="w-1/3 hover:bg-gray-200 text-center text-xl text-gray-700 font-semibold">Like</div>
          							<div className="w-1/3 hover:bg-gray-200 border-l-4 border-r- text-center text-xl text-gray-700 font-semibold">Share</div>
          							<div className="w-1/3 hover:bg-gray-200 border-l-4 text-center text-xl text-gray-700 font-semibold">Comment</div>
        						</div>
        
        						<div className="bg-white border-4 bg-gray-300 border-white rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
         							<div className="w-full">
            							<div className="w-full text-left text-xl text-gray-600">
              								@Some Person
            							</div>
            							A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
            							A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
          							</div>
        						</div>
      						</div>
      					</div>
    				</div>
  				</div>
			</div>
		</div>
	)
}

export default Feed
