import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PosterCard from '../components/PosterCard';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import { useAuth0 } from '@auth0/auth0-react';
import API from '../api';

const UsersPage = ({ match }) => {
	const fromUserPage = true;
	const [user, setUser] = useState({});
	const [isFollowing, setIsFollowing] = useState(false);
	const [showFollowing, setShowFollowing] = useState(false);
	const [movies, setMovies] = useState([]);
	const { id } = match.params;
	const { getAccessTokenSilently } = useAuth0();

	const getUser = async () => {
		const token = await getAccessTokenSilently();
		const api = new API(token);
		const res = await api.getUserById(id);
		setUser(res.user);
		getMovieDetails(res.user.watchList);
	};

	const checkFollowing = async () => {
		const token = await getAccessTokenSilently();
		const api = new API(token);
		const res = await api.getFollowees();
		const followeesId = res.followees.map(item => item.to._id);
		setIsFollowing(followeesId.includes(id));
	};

	const checkSameUser = async () => {
		const token = await getAccessTokenSilently();
		const api = new API(token);
		const res = await api.getUser();
		setShowFollowing(res.user._id !== id);
	}

	const handleFollowUnfollow = async (action, id) => {
		const token = await getAccessTokenSilently();
		const api = new API(token);

		if (action === 'follow') {
			await api.followUser(id);
			setIsFollowing(true);
		}
		if (action === 'unfollow') {
			await api.unfollowUser(id);
			setIsFollowing(false);
		}
	}

	const getMovieDetails = async (watchList) => {
		const api = new API(null);
		let movieDetails = watchList.map(item => api.getMediaDetails(item.mediaId));
		movieDetails = await Promise.all(movieDetails);
		setMovies(movieDetails);
	}

	useEffect(() => {
		getUser();
		checkFollowing();
		checkSameUser();
	}, []);

	return (
		<div>
			<div className="fixed max-w-full inset-x-0 z-20">
				<Navbar />
			</div>

			<div className="py-24 flex mt-10 justify-center items-center flex-col">
				{/* TODO: find if the user is following the searched person */}
				<div className="w-3/4 flex flex-col justify-center items-center">
					<img className="h-24 w-24 rounded-full" src={user.avatarUrl} alt={user.id} />
					<p className="text-xl mt-2">{user.name}</p>

				</div>
				{showFollowing && (
					<div className="flex justify-center dark:bg-gray-800">
					<h2 className="my-4 text-2xl font-bold"> You are {!isFollowing ? 'not' : ''} following {user.name} </h2>
						<button className="ml-4">{!isFollowing ? 
							<PersonAddIcon fontSize="large" className="text-blue-300 hover:text-blue-500" onClick={() => handleFollowUnfollow('follow', id)} /> : 
							<PersonAddDisabledIcon fontSize="large" className="text-red-300 hover:text-red-500" onClick={() => handleFollowUnfollow('unfollow', id)} />}
						</button>
					</div>
				)}
				

				<h3 className="text-lg my-3" >{user.name}'s Current Watch List</h3>
				<div className="flex justify-center w-screen">

					<div className="w-1/2 grid grid-cols-4 gap-4 flex justify-between p-4 shadow-xl rounded border-2">

						{movies?.map(list => (
							<PosterCard show={list} key={list.title} fromUserPage={fromUserPage} />
						))}
					</div>

				</div>
			</div>
		</div>
	)
}

export default UsersPage
