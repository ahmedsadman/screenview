import React, { useEffect, useState } from 'react';
import People from '../components/People';
import UserSearchBar from '../components/UserSearchBar';
import Navbar from '../components/Navbar';
import API from '../api';
import { useAuth0 } from '@auth0/auth0-react';
import { useDebounce } from '../hooks/debounceHook';

const ConnectionPage = () => {
	const { getAccessTokenSilently } = useAuth0();
	const [userSuggestions, setUserSuggestions] = useState([]);
	const [userSearchResult, setUserSearchResult] = useState([]);
	const [followeesId, setFolloweesId] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	const fetchFollowees = async () => {
		const token = await getAccessTokenSilently();
		const api = new API(token);
		const resFollowees = await api.getFollowees();
		const followeesId = resFollowees.followees.map(user => user.to._id);
		setFolloweesId(followeesId);
		return followeesId;
	}

	const onChangeSearchQuery = (e) => {
		setSearchQuery(e.target.value);
	}

	const getUserSuggestions = async (_followeesId) => {
		const token = await getAccessTokenSilently();
		const api = new API(token);
		const res = await api.getUserSuggestions();

		const modifiedUsers = res.users.map(user => {
			user.isFollowing = _followeesId.includes(user._id);
			return user;
		});

		setUserSuggestions(modifiedUsers);
	}

	const fetchAndSyncSuggestion = async () => {
		return fetchFollowees().then((_followeesId) => {
			getUserSuggestions(_followeesId);
		});
	}

	const updateFolloweesIds = (action, id) => {
		let newFolloweesId = [];
		if (action === 'follow') {
			newFolloweesId = [id, ...followeesId];
			setFolloweesId(newFolloweesId);
		} else {
			newFolloweesId = followeesId.filter(_id => _id !== id);
			setFolloweesId(newFolloweesId);
		}
		return newFolloweesId;
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

		const newFolloweesId = updateFolloweesIds(action, id);
		await getUserSuggestions(newFolloweesId);
		await searchUser(newFolloweesId);
	}

	const searchUser = async (_followeesId) => {
		if (!searchQuery || searchQuery.trim() === "") {
			setUserSearchResult([]);
			return;
		};

		const token = await getAccessTokenSilently();
		const api = new API(token);

		const res = await api.searchUserByName(searchQuery);
		const modifiedUsers = res.users.map(user => {
			user.isFollowing = _followeesId.includes(user._id);
			return user;
		});
		setUserSearchResult(modifiedUsers);
	}

	useDebounce(searchQuery, 500, () => searchUser(followeesId));

	useEffect(() => {
		fetchAndSyncSuggestion();
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
						<UserSearchBar searchQuery={searchQuery} users={userSearchResult} actionHandler={handleFollowUnfollow} onChangeSearchQuery={onChangeSearchQuery} />
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
