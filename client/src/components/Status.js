import { HeartIcon, ChatIcon, ShareIcon } from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Comments from './Comments'
import MovieShow from './MovieShow'


const Status = ({ post }) => {
	const [commentArea, setCommentArea] = useState(false)
	const [visibleComment, setVisibleComment] = useState([''])

	let commentVisibility = false
	
	const { comment } = post

	useEffect(() => {
		const commentModification = () => {
			if(comment){
				if(comment.length > 2){
					setVisibleComment(comment.slice(0, 2))
				} else {
					setVisibleComment(comment)
				}
			}
		}

		commentModification()
	})
	
	
	if(comment && comment.length !== 0){
		commentVisibility = true
	}
	
	

	const makeComment = () => {
		setCommentArea(!commentArea)
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
						<div>
							<h4 className="text-lg text-gray-700">{post.userNickname}</h4>
							<p className="text-sm mt-1 text-gray-400">{post.postDate}</p>
						</div>
					</div>
					<div>
						<p className='text-md text-gray-600 mt-2 mb-2'>Is {post.expression} watching</p>
						<Link to='#' className="bg-white p-1 rounded-md inline-flex justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
							<MovieShow show={post} key={post.id} />
						</Link>
					</div>
					
					<div className='flex justify-center'>
						<div className="bg-white w-2/3 shadow mb-4 mt-2 border-b flex flex-row flex-wrap justify-center">
							<button className="w-full p-1 hover:bg-gray-100 hover:text-gray-800 flex justify-center rounded-md items-center text-xl text-gray-500 font-semibold" onClick={makeComment}>
								<ChatIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
					</div>

					{commentArea ? 
						<div className="rounded-lg bg-gray-50 mb-2 shadow">
							<form action="#" method="post">
								<textarea className="bg-gray-100 w-full rounded-t-lg border" rows="3" placeholder="What are your thoughts? "></textarea>
								<div className="text-center pb-2">
									<button
										type="submit"
										className="inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Comment
									</button>
								</div>
							</form>
						</div> : ''}

					{commentVisibility ? 
						<div className="w-full">
							<Comments comments={visibleComment} key={comment}/>
						</div>
						: ''}
					{/* <div className="bg-white border-4 bg-gray-300 border-white rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
						<div className="w-full">
							<div className="w-full text-left text-xl text-gray-600">
								@Some Person
							</div>
							A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
							A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
						</div>
					</div>
					: <p className="mt-2 text-center text-gray-400 items-center">Wow Such Empty</p> */}
				</div>
			</div>
		</div>
	</div>
	)
}

export default Status
