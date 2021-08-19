import React, { useEffect, useState } from 'react';
import People from '../components/People';
import UserSearchBar from '../components/UserSearchBar';
import Navbar from '../components/Navbar';
import API from '../api';
import { useAuth0 } from '@auth0/auth0-react';

const ConnectionPage = () => {
	const { getAccessTokenSilently } = useAuth0();
	const [userSuggestions, setUserSuggestions] = useState([]);

	const getUserSuggestions = async () => {
		const token = await getAccessTokenSilently();
		const api = new API(token);
		const res = await api.getUserSuggestions();
		const resFollowees = await api.getFollowees();
		const followeesId = resFollowees.followees.map(user => user.to._id);

		const modifiedUsers = res.users.map(user => {
			user.isFollowing = followeesId.includes(user._id);
			return user;
		});

		setUserSuggestions(modifiedUsers);
	}

	const handleFollowUnfollow = async (action, id) => {
		const token = await getAccessTokenSilently();
		const api = new API(token);
		if (action === 'follow') {
			const res = await api.followUser(id);
			console.log(res);
		}
		if (action === 'unfollow') {
			const res = await api.unfollowUser(id);
			console.log(res);
		}
		await getUserSuggestions();
	}

	useEffect(() => {
		getUserSuggestions();
	}, []);

	return (
		<div>
			<div className="fixed max-w-full inset-x-0 z-20">
				<Navbar />
			</div>
			<div className="flex flex-col justify-center w-full items-center">
				<div className="lg:w-1/3 w-full">
					<div className="mt-28">
						<h3 className="text-center">Search For People</h3>
						<UserSearchBar />
					</div>

					<div className="flex justify-center">
						<div className="mt-2 p-5 max-w-1/3 w-1/3 sm:w-full">
							<h3 className="text-center">Suggestions</h3>
							{userSuggestions.map(user => (
								<People user={user} key={user._id} actionHandler={handleFollowUnfollow} />
							))}

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ConnectionPage