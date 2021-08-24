import React, { useState } from 'react';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import { Link } from 'react-router-dom';


const People = ({ user, actionHandler }) => {
	const [isLink, setIsLink] = useState(true)
	const [hoveredId, setHoveredId] = useState(null);

	const onButtonClick = () => {
		if (user.isFollowing) {
			actionHandler('unfollow', user._id);
			console.log('should unfollow');
		} else {
			actionHandler('follow', user._id);
			console.log('should follow');
		}
	};

	const handleMouseIn = () => {
		setIsLink(false);
	}

	const handleMouseOut = () => {
		setIsLink(true);
	}

	const handleBgMouseIn = (id) => {
		setHoveredId(id)
	}

	const handleBgMouseOut = () => {
		setHoveredId(null)
	}

	const selectClass = () => {
		let linkStyle = 'flex mt-2 shadow-md border rounded-lg items-center justify-between w-full'
		if (isLink && hoveredId) {
			linkStyle = 'flex mt-2 shadow-md border rounded-lg items-center justify-between w-full bg-gray-100'
		}

		return linkStyle;
	}

	const ConditionalWrapper = ({ condition, wrapper, children }) => condition ? wrapper(children) : children;

	return (
		<div>
			<ConditionalWrapper
				condition={isLink}
				wrapper={children => <Link onMouseEnter={() => handleBgMouseIn(user._id)} onMouseLeave={() => handleBgMouseOut()} to={`/users/${user._id}`}>{children}</Link>}
			>
				<div className={selectClass()} >
					<div className="w-full w-1/3 h-18 p-4 items-center flex justify-center dark:bg-gray-800">
						<img src={user.avatarUrl} className="h-10 w-10 rounded-full" alt={user.name} />
					</div>
					<div className="w-full w-1/3 h-18 dark:bg-gray-800">
						<h3 className="font-bold text-lg md:text-md">{user.name}</h3>
					</div>
					<div className="w-full w-1/3 h-18 flex justify-center dark:bg-gray-800">
						<button onClick={onButtonClick} onMouseEnter={() => handleMouseIn()} onMouseLeave={() => handleMouseOut()} >{!user.isFollowing ? <PersonAddIcon fontSize="medium" className="text-blue-300 hover:text-blue-500" /> : <PersonAddDisabledIcon fontSize="medium" className="text-red-300 hover:text-red-500" />}  </button>
					</div>
				</div>
			</ConditionalWrapper>
		</div>
	)
}

export default People
