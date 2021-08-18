import React, { useEffect, useState } from 'react'
import Post from './Post'
import Status from './Status'
import API from '../api';
import { useAuth0 } from '@auth0/auth0-react';


const Feed = () => {
	const [posts, setPosts] = useState([]);
	const { getAccessTokenSilently } = useAuth0();

	const getUserFeed = async () => {
		const token = await getAccessTokenSilently();
		const api = new API(token);
		const res = await api.getUserFeed();
		setPosts(res.posts);
	};

	const onPostComplete = async (type, content, mediaId, rating = null) => {
		console.log(type, content, mediaId, rating);
		const token = await getAccessTokenSilently();
		const api = new API(token);
		await api.createPost(type, content, mediaId, rating);
		alert('Post created');
	};

	const addComment = async (id, content) => {
		if (!content) {
			alert('You must write something');
			return;
		}
		const token = await getAccessTokenSilently();
		const api = new API(token);
		await api.addPostComment(id, content);
		await getUserFeed();
	}

	useEffect(() => {
		getUserFeed();
	}, []);

	return (
		<div>
			<div className="w-full flex flex-row flex-wrap">
				<div className="w-full bg-white-100 h-screen flex flex-row flex-wrap justify-center ">
  					<div className="w-full sm:w-3/4 md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full antialiased"> 
    					<div className="bg-white w-full shadow-lg border-2 border-gray-100 rounded-lg p-5">
								<Post onPostComplete={onPostComplete} />
    					</div>
							{posts.map(post => (
								<div key={post._id} >
									<Status post={post} addComment={addComment} />
								</div>
							))}		       						
      				</div>
      			</div>
    		</div>
  		</div>
	)
}

export default Feed
