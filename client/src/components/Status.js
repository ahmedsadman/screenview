import { ChatIcon } from '@heroicons/react/outline';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Comments from './Comments';
import MovieShow from './MovieShow';
import API from '../api';


const Status = ({ post, addComment }) => {
	const [commentArea, setCommentArea] = useState(false);
	const [commentContent, setCommentContent] = useState('');
	const [visibleComment, setVisibleComment] = useState(post?.comments);
	const [allCommentsShow, setAllCommentsShow] = useState(false);
	const [media, setMedia] = useState({});

	let commentVisibility = false;

	const getMedia = async () => {
		const api = new API();
		const res = await api.getMediaDetails(post.mediaId);
		setMedia(res);
	}

	const handleCommentSubmit = (e) => {
		e.preventDefault();
		addComment(post._id, commentContent);
		setCommentContent('');
	}

	useEffect(() => {
		const commentModification = () => {
			if(post.comments){
				if(post.comments.length > 2){
					setVisibleComment(post.comments?.slice(0, 2))
				} else {
					setVisibleComment(post?.comments)
				}
			}
		}

		commentModification();
		// eslint-disable-next-line
	}, [post.comments]);

	useEffect(() => {
		getMedia();
		// eslint-disable-next-line
	}, []);
	
	
	if(post.comments && post.comments.length !== 0){
		commentVisibility = true
	}
	
	// TODO: The comment handling logic needs improvement. It should be more simpler
	const showAllComment = () => {
		setAllCommentsShow(!allCommentsShow)
		if(!allCommentsShow){
			setVisibleComment(post?.comments)
		} else {
			setVisibleComment(post?.comments?.slice(0, 2))
		}
	}

	const makeComment = () => {
		setCommentArea(!commentArea)
	}

	console.log('post comments are', post.comments);
	return (
	<div>
		<div className="mt-3 flex flex-col">
			<div className="bg-white mt-3 border rounded-t-lg shadow-lg">
				<div className="bg-white w-full shadow-lg border-2 border-gray-100 rounded-lg p-5">
					<div className="flex items-center">
						<img className="h-10 w-10 mr-4 rounded-full"
							src={post?.author?.avatarUrl}
							alt=""
						/>
						<div>
							<h4 className="text-lg text-gray-700">{post.author.name}</h4>
							<p className="text-sm mt-1 text-gray-400">{post.postDate}</p>
						</div>
					</div>
					<div>
						{post.type === 'watch' ? <p className='text-md text-gray-600 mt-2 mb-2'>Is Watching...</p> : 
							<p className='text-md text-gray-600 mt-2 mb-2'>Posted a Review on</p>}
						
						<Link to='#' className="bg-white p-1 rounded-md inline-flex justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
							<MovieShow show={media} key={post.id} />
						</Link>
					</div>
					
					<div className='flex justify-center'>
						<div className="bg-white w-full mb-4 mt-2 flex flex-row flex-wrap justify-center">
							<button className="w-full p-2 hover:bg-gray-100 hover:text-gray-800 flex justify-center rounded-md items-center text-xl text-gray-500 font-semibold" onClick={makeComment}>
								<ChatIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
					</div>

					{commentArea ? 
						<div className="rounded-lg bg-gray-50 mb-2 shadow">
							<form action="#" method="post">
								<textarea className="bg-gray-100 w-full rounded-t-lg border" rows="3" placeholder="What are your thoughts? " value={commentContent} onChange={(e) => setCommentContent(e.target.value)}></textarea>
								<div className="text-center pb-2">
									<button
										type="submit"
										onClick={handleCommentSubmit}
										className="inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
									>
										Comment
									</button>
								</div>
							</form>
						</div> : ''}

					{commentVisibility ? 
						<div className="w-full">
							<Comments comments={visibleComment} />
							{allCommentsShow ?
								<button className="text-xs mt-2 text-gray-400 hover:underline hover:text-gray-500" onClick={showAllComment}>Collapse</button>
								:
								<button className="text-xs mt-2 text-gray-400 hover:underline hover:text-gray-500" onClick={showAllComment}>View All Comments</button>
							}
						</div>
						: <p className="text-xs mt-2 text-gray-400" onClick={showAllComment}>Wow Such Empty. Be the first to comment</p>}
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
