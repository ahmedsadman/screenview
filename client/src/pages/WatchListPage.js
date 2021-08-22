import React from 'react'
import Navbar from '../components/Navbar'
import PosterCard from '../components/PosterCard'

const WatchListPage = () => {

	const watchList = [
		{
			poster_path: "/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
			vote_average: 8.3,
			title: "Nobody"
		},

		{
			poster_path: "/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
			vote_average: 8.3,
			title: "Nobody"
		},

		{
			poster_path: "/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
			vote_average: 8.3,
			title: "Nobody"
		},

		{
			poster_path: "/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
			vote_average: 8.3,
			title: "Nobody"
		},

		{
			poster_path: "/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
			vote_average: 8.3,
			title: "Nobody"
		},

		{
			poster_path: "/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
			vote_average: 8.3,
			title: "Nobody"
		},

		{
			poster_path: "/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
			vote_average: 8.3,
			title: "Nobody"
		},

		{
			poster_path: "/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
			vote_average: 8.3,
			title: "Nobody"
		},

		{
			poster_path: "/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
			vote_average: 8.3,
			title: "Nobody"
		},
	]




	return (
		<div>
			<div className="fixed max-w-full inset-x-0 z-20">
				<Navbar />
			</div>

			<div className="py-24 text-center">
				<h3 className="my-4 text-2xl font-bold">Your Current Watch List</h3>
				<div className="flex justify-center">

					<div className="w-1/2 grid grid-cols-4 gap-4 flex justify-between p-4 shadow-lg rounded border-1">

						{watchList.map(list => (
							<PosterCard show={list} key={list.title} />
						))}
					</div>

				</div>
			</div>


		</div>
	)
}

export default WatchListPage
