import React from 'react';
import Navbar from '../components/Navbar';
import PosterCard from '../components/PosterCard';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';

const UsersPage = ({ match }) => {
	const fromUserPage = true

	console.log(match)
	//TODO: get user by id
	const user = {
		name: 'harry',
		avatar: 'https://pbs.twimg.com/profile_images/1422644317676507136/EszIU9uI_400x400.jpg',
		id: match.id,
		reviews: '',
		isFollowing: false,
		watchList: [
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
	}

	return (
		<div>
			<div className="fixed max-w-full inset-x-0 z-20">
				<Navbar />
			</div>

			<div className="py-24 flex mt-10 justify-center items-center flex-col">
				{/* TODO: find if the user is following the searched person */}
				<div className="w-3/4 flex flex-col justify-center items-center">
					<img className="h-24 w-24 rounded-full" src={user.avatar} alt={user.id} />
					<p className="text-xl mt-2">{user.name}</p>

				</div>
				<div className="flex justify-center dark:bg-gray-800">
					<h2 className="my-4 text-2xl font-bold"> You are {!user.isFollowing ? 'not' : ''} following {user.name} </h2>
					<button className="ml-4">{!user.isFollowing ? <PersonAddIcon fontSize="large" className="text-blue-300 hover:text-blue-500" /> : <PersonAddDisabledIcon fontSize="large" className="text-red-300 hover:text-red-500" />}  </button>
				</div>

				<h3 className="text-lg my-3" >{user.name}'s Current Watch List</h3>
				<div className="flex justify-center w-screen">

					<div className="w-1/2 grid grid-cols-4 gap-4 flex justify-between p-4 shadow-xl rounded border-2">

						{user.watchList.map(list => (
							<PosterCard show={list} key={list.title} fromUserPage={fromUserPage} />
						))}
					</div>

				</div>
			</div>
		</div>
	)
}

export default UsersPage
