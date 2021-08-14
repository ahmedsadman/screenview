import { HeartIcon, ChatIcon, ShareIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MovieShow from './MovieShow'


const Review = () => {

	let [posts] = useState({
		review: [
			{
				id: 1,
				userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
				title: 'Black Widow',
				date: '5h ago',
				description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
				image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2No8qXpkdu4yfaWGtTqh02qo1Dq.jpg',
				reviewCount: 5,
				watchedCount: 2,
				rating: 4,
				reviewText: 'A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.',
			},
			{
				id: 2,
				title: 'Black Widow',
				date: '5h ago',
				description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
				image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2No8qXpkdu4yfaWGtTqh02qo1Dq.jpg',
				reviewCount: 5,
				watchedCount: 2,
				rating: 4,
				reviewText: 'A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.',
			},
		],
		watching: [
			{
				id: 1,
				title: 'Rick & Morty',
				date: '5h ago',
				description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
				image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg',
				reviewCount: 5,
				watchedCount: 2,
				rating: 4,
			},
			{
				id: 2,
				title: 'Black Widow',
				date: '5h ago',
				description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
				image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2No8qXpkdu4yfaWGtTqh02qo1Dq.jpg',
				reviewCount: 5,
				watchedCount: 2,
				rating: 4,
			},
		],
	})

	return (
		<div>
			{posts.review.map(post => (
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
							<Link to='#' className="bg-white p-1 rounded-md inline-flex justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
								<MovieShow show={post} key={post.id} />
							</Link>
							<div className="bg-white shadow p-2 border-b flex flex-row flex-wrap">
								<button className="w-1/3 p-1 hover:bg-gray-100 hover:text-gray-800 flex justify-center rounded-md items-center text-xl text-gray-500 font-semibold"><HeartIcon className="h-6 w-6" aria-hidden="true" /></button>
								<button className="w-1/3 p-1 hover:bg-gray-100 hover:text-gray-800 flex justify-center rounded-md items-center text-xl text-gray-500 font-semibold"><ShareIcon className="h-6 w-6" aria-hidden="true" /></button>
								<button className="w-1/3 p-1 hover:bg-gray-100 hover:text-gray-800 flex justify-center rounded-md items-center text-xl text-gray-500 font-semibold"><ChatIcon className="h-6 w-6" aria-hidden="true" /></button>
							</div>
							{/* <div className="bg-white border-4 bg-gray-300 border-white rounded-b-lg shadow p-5 text-xl text-gray-700 content-center font-semibold flex flex-row flex-wrap">
								<div className="w-full">
									<div className="w-full text-left text-xl text-gray-600">
										@Some Person
									</div>
									A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
									A Pretty Cool photo from the mountains. Image credit to @danielmirlea on Unsplash.
								</div>
							</div> */}
						</div>
					</div>
				</div>
			))}
		</div>

	)
}

export default Review
