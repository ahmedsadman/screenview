import React, { useState } from 'react'
import HoverRating from './HoverRating'
import SearchBar from './SearchBar'
import PostSearchBar from './PostSearchBar'
import { useAuth0 } from '@auth0/auth0-react'

const Post = () => {

	const { user } = useAuth0()

	const [selectedPostType, setSelectedPostType] = useState('')
	const postChangeHandler = (e) => {
		setSelectedPostType(e.target.value)
	}
	 let review
	 if(selectedPostType === 'Review') {
		review = <textarea className="bg-gray-100 w-full rounded-lg shadow border p-2" rows="5" placeholder="Speak your mind"></textarea>
					
	 } else {
		review = ''
	 }

	return (
		<div>
			<div className="flex items-center">
				<img className="h-10 w-10 mr-4 rounded-full"
					src={user.picture}
					alt=""
				/>
				<h4>What are you feeling....</h4>
						
			</div>
			<div className="flex justify-between mt-2 items-center mb-4">
				<div className="flex justify-start relative z-10">
					<PostSearchBar/>
				</div>
						
				<div className="w-1/3">
          			<select className="w-full p-2 rounded-lg bg-gray-100 shadow border float-left"
						onChange={postChangeHandler}>
            			<option>Status</option>
            			<option>Review</option>
          			</select>
        		</div>
			</div>
			
			<div className="">
				<form action="#" method="POST">
					{review ? 
						<div>	
							<div>{review}</div>
							<div className="w-full flex flex-row flex-wrap mt-3 items-center">
								<div className="w-1/3">
									<HoverRating/>
								</div>
								<div className="w-2/3">
									<button type="button" className="float-right bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg">Submit</button>
								</div>
							</div>
						</div>	
						: 
						<div className="w-full flex flex-row flex-wrap mt-3 items-center">
							<div className="w-full">
								<textarea className="bg-gray-100 w-full rounded-lg shadow border p-2" rows="1" placeholder="Express Yourself"></textarea>
							</div>
							<div className="w-1/3 flex">
								<button type="button" className="float-right bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg">Submit</button>
							</div>
						</div>
					}
				</form>	
			</div>					
		</div>	
	)
}

export default Post
