import React, { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const getSelectedClassName = (active) => {
	let classNames = ''
	if (active) {
		classNames = 'bg-gray-100'
	} else {
		classNames = ''
	}

	return classNames
}

const UserAvatar = () => {
	const { logout, user } = useAuth0()
	return (
		<Menu as="div" className="relative">
			<div>
				<Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
					<span className="sr-only">Open user menu</span>
					<img
						className="h-10 w-10 rounded-full"
						src={user.picture}
						alt=""
					/>
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
					<Menu.Item>
						{({ active }) => (
							<div className={getSelectedClassName(active)}>
								<Link to="/profile"
									className='w-full flex justify-start block px-4 py-2 text-sm text-gray-700'
								>
									Your Profile
								</Link>
							</div>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<div className={getSelectedClassName(active)}>
								<Link to="#"
									className='w-full flex justify-start block px-4 py-2 text-sm text-gray-700'
								>
									Settings
								</Link>
							</div>
						)}
					</Menu.Item>
					<Menu.Item>
						{({ active }) => (
							<div className={getSelectedClassName(active)}>
								<button onClick={() =>
									logout({
										returnTo: window.location.origin,
									})} className='w-full flex justify-start block px-4 py-2 text-sm text-gray-700' >
									Log Out
								</button>
							</div>
						)}
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

export default UserAvatar
