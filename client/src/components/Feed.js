import React from 'react'
import Post from './Post'
import Status from './Status'


const Feed = () => {


	const posts =[{
			id: 1,
			userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			userNickname: 'gay',
			postDate: '10/10/2021',
			title: 'Black Widow',
			type: 'review',
			date: '5h ago',
			description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
			image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2No8qXpkdu4yfaWGtTqh02qo1Dq.jpg',
			reviewCount: 5,
			watchedCount: 2,
			rating: 4,
			reviewText: 'A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.',
			expression: 'Excited',
			comment: [{
				text: 'ur mom gae',
				userNickname: 'fucker',
				userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				text: 'no u',
				userNickname: 'fucker',
				userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},]
			
			
		},
		{
			id: 2,
			userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			userNickname: 'gay',
			postDate: '10/10/2021',
			title: 'Black Widow',
			type: 'status',
			date: '5h ago',
			description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
			image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2No8qXpkdu4yfaWGtTqh02qo1Dq.jpg',
			reviewCount: 5,
			watchedCount: 2,
			rating: 4,
			reviewText: 'A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.',
			comment: [{
				text: 'ur mom gae',
				userNickname: 'fucker',
				userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},
			{
				text: 'no u',
				userNickname: 'fucker',
				userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			},]
		},
	
	
		{
			id: 5,
			title: 'Rick & Morty',
			type: 'review',
			date: '5h ago',
			description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
			image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg',
			reviewCount: 5,
			watchedCount: 2,
			rating: 4,
			expression: 'Excited',
		},
		{
			id: 6,
			title: 'Black Widow',
			type: 'status',
			date: '5h ago',
			description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
			image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2No8qXpkdu4yfaWGtTqh02qo1Dq.jpg',
			reviewCount: 5,
			watchedCount: 2,
			rating: 4,
			expression: 'Afraid',
			
		},]

	return (
		<div>
			<div className="w-full flex flex-row flex-wrap">
				<div className="w-full bg-white-100 h-screen flex flex-row flex-wrap justify-center ">
  					<div className="w-full sm:w-3/4 md:w-3/4 lg:w-4/5 p-5 md:px-12 lg:24 h-full antialiased"> 
    					<div className="bg-white w-full shadow-lg border-2 border-gray-100 rounded-lg p-5">
							<Post/>
    					</div>
        				{posts.map(post => (
							<div key={post.id} >
								<Status post={post} />
							</div>))}		       						
      				</div>
      			</div>
    		</div>
  		</div>
	)
}

export default Feed
