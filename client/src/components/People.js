import React, { useState } from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';


const People = ({ user, actionHandler }) => {
	const onButtonClick = () => {
		if (user.isFollowing) {
			actionHandler('unfollow', user._id);
			console.log('should unfollow');
		} else {
			actionHandler('follow', user._id);
			console.log('should follow');
		}
	};

	return (
		<div>
			<div className="flex mt-2 shadow-md border rounded-lg items-center justify-between w-full">
				<div className="w-full w-1/3 h-18 p-4 items-center flex justify-center bg-white dark:bg-gray-800">
					<img src={user.avatarUrl} className="h-10 w-10 rounded-full" alt={user.name} />
				</div>
				<div className="w-full w-1/3 h-18 bg-white dark:bg-gray-800">
					<h3 className="font-bold text-lg md:text-md">{user.name}</h3>
				</div>
				<div className="w-full w-1/3 h-18 flex justify-center bg-white dark:bg-gray-800">
					<button onClick={onButtonClick}>{!user.isFollowing ? <PersonAddIcon fontSize="medium" className="text-blue-300 hover:text-blue-500" /> : <PersonAddDisabledIcon fontSize="medium" className="text-red-300 hover:text-red-500" />}  </button>
				</div>
			</div>
		</div>
	)
}

export default People
