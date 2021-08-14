import React, { useState } from 'react'
import HoverRating from './HoverRating'
import SearchBar from './SearchBar'

const Post = () => {

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
			<div>
				<div>
					<div className="flex items-center">
						<img className="h-10 w-10 mr-4 rounded-full"
							src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
						/>
						<h4>What are you feeling....</h4>
						
					</div>
					<div className="flex justify-between items-center mb-4">
						<div className="flex justify-start">
							<SearchBar/>
						</div>
						
						<div className="w-1/3">
          					<select className="w-full p-2 rounded-lg bg-gray-100 shadow border float-left"
							  onChange={postChangeHandler}>
            					<option>Status</option>
            					<option>Review</option>
          					</select>
        				</div>
					</div>
					<div>
						<div>{review}</div>
						<div className="">
						{review ? 
							<div className="w-full flex flex-row flex-wrap mt-3 items-center">
								<div className="w-1/3">
          							<HoverRating/>
        						</div>
        						<div className="w-2/3">
          							<button type="button" className="float-right bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg">Submit</button>
        						</div>
							</div>
      						: 
							<div className="w-2/3 flex justify-start">
          						<button type="button" className="float-right bg-indigo-400 hover:bg-indigo-300 text-white p-2 rounded-lg">Submit</button>
        					</div> }
						</div>
					</div>
					


						
					
						
				</div>
								
			</div>
		</div>
	)
}

export default Post
