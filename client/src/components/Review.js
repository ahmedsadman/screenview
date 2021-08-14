import { HeartIcon, ChatIcon, ShareIcon } from '@heroicons/react/outline'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Comments from './Comments'
import MovieShow from './MovieShow'

const Review = ({ post }) => {
	const [visibleComment, setVisibleComment] = useState(false)
	
	const makeCommentsVisible = () => {
		setVisibleComment(!visibleComment)
	}

	return (
		<div>
			<div className="mt-3 flex flex-col">
				<div className="bg-white mt-3 border rounded-t-lg shadow-lg">
					<div className="bg-white w-full shadow-lg border-2 border-gray-100 rounded-lg p-5">
						<div className="flex items-center">
							<img className="h-10 w-10 mr-4 rounded-full"
								src={post.userAvatar}
								alt=""
							/>
							<h4>Posted a Review on </h4>
						</div>
						<div>
							<Link to='#' className="bg-white p-1 rounded-md inline-flex justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
								<MovieShow show={post} key={post.id} />
							</Link>
						</div>
						
						<div className="bg-white p-2 border-b flex flex-row flex-wrap">
							<button className="w-1/3 p-1 hover:bg-gray-100 hover:text-gray-800 flex justify-center rounded-md items-center text-xl text-gray-500 font-semibold"><HeartIcon className="h-6 w-6" aria-hidden="true" /></button>
							<button className="w-1/3 p-1 hover:bg-gray-100 hover:text-gray-800 flex justify-center rounded-md items-center text-xl text-gray-500 font-semibold"><ShareIcon className="h-6 w-6" aria-hidden="true" /></button>
							
							<button className="w-1/3 p-1 hover:bg-gray-100 hover:text-gray-800 flex justify-center rounded-md items-center text-xl text-gray-500 font-semibold" onClick={makeCommentsVisible}>
								<ChatIcon className="h-6 w-6" aria-hidden="true"/>
							</button>
						</div>
						{visibleComment ? <div>
							<div className="w-full">
								{post.comment ? <Comments comments={post.comment}/> : <p className="mt-2 text-center text-gray-400 items-center">Wow Such Empty</p>}
							</div>
						</div> : ''}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Review
