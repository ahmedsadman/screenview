import React, { useState } from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';


const People = ({ user }) => {
	const [connected, setConnected] = useState(false);

	const connectionHandler = () => {
		setConnected(!connected);

		//TODO: Api for posting in connection list
	}

	return (
		<div>
			<div className="flex mt-2 shadow-md border rounded-lg items-center justify-between w-full">
				<div className="w-full w-1/3 h-18 p-4 items-center flex justify-center bg-white dark:bg-gray-800">
					<img src={user.useravatar} className="h-10 w-10 rounded-full" alt={user.username} />
				</div>
				<div className="w-full w-1/3 h-18 bg-white dark:bg-gray-800">
					<h3 className="font-bold text-lg md:text-md">{user.username}</h3>
				</div>
				<div className="w-full w-1/3 h-18 flex justify-center bg-white dark:bg-gray-800">
					<button onClick={connectionHandler}>{!connected ? <PersonAddIcon fontSize="medium" className="text-blue-300 hover:text-blue-500" /> : <PersonAddDisabledIcon fontSize="medium" className="text-red-300 hover:text-red-500" />}  </button>
				</div>
			</div>
		</div>
	)
}

export default People
