import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import EditProfile from '../components/EditProfile'
import Navbar from '../components/Navbar'
import StaticProfile from '../components/StaticProfile'
import API from '../api';
import { Link } from 'react-router-dom';

const Profile = () => {
	const [profileEditStatus, setProfileEditStatus] = useState(false);
	const [user, setUser] = useState({});
	const { user: _auth0User, getAccessTokenSilently } = useAuth0()
	const profileEditStatusChanger = () => {
		setProfileEditStatus(true)
	}

	const onProfileSave = async (name) => {
		const token = await getAccessTokenSilently();
		const api = new API(token);
		await api.updateUser(name, _auth0User.email, _auth0User.picture);
		setProfileEditStatus(false);
		alert('User updated');
		await getUser();
	}

	const getUser = async () => {
		const token = await getAccessTokenSilently();
		const api = new API(token);
		const res = await api.getUser();
		console.log('user is', res.user);
		setUser(res.user);
	}

	useEffect(() => {
		getUser();
	}, []);

	return (
		<div>
			<div className="fixed max-w-full inset-x-0 z-20">
				<Navbar />
			</div>

			<div className="md:gap-6 py-24 items-center max-w-full flex flex-col justify-center">
				<div className="max-w-3/4 w-full mt-16">
					<div className="md:col-span-1">
						<div className="px-4 sm:px-0">
							<h3 className="text-lg font-medium leading-6 mb-4 text-gray-900">Profile</h3>
						</div>
					</div>


					<div>
						<div>
							{!profileEditStatus ? <StaticProfile user={user} auth0User={_auth0User} /> : <EditProfile auth0User={_auth0User} onProfileSave={onProfileSave} user={user} />}
						</div>
						{!profileEditStatus ? <div className="px-4 mt-2 flex justify-between py-3 bg-gray-50 text-right sm:px-6">
							<Link to='/feed'>
								<button
									type="submit"
									className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								>
									Back To Feed
								</button>
							</Link>
							<button
								type="submit"
								className="inline-flex justify-end py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								onClick={profileEditStatusChanger}
							>
								Edit
							</button>
						</div> : ''}

					</div>

				</div>
			</div>
		</div>
	)
}

export default Profile
