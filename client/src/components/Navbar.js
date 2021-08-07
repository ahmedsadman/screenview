import { React, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Popover, Transition } from '@headlessui/react'
import {
	BookmarkAltIcon,
	CalendarIcon,
	ChartBarIcon,
	CursorClickIcon,
	MenuIcon,
	HomeIcon,
	LinkIcon,
	RefreshIcon,
	ShieldCheckIcon,
	SupportIcon,
	ViewGridIcon,
	XIcon,
} from '@heroicons/react/outline'
import SearchBar from './SearchBar'



const Navbar = () => {
	return (
		<Popover className="relative bg-white">
			{({ open }) => (
				<>
					<div className="max-w-full mx-auto px-4 sm:px-6">
						<div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
							{/* LOGO */}
							<div className="flex justify-start lg:w-0 lg:flex-1">
								<Link to="#">
									<span className="sr-only">Workflow</span>
									<span className="text-xl font-bold text-black-600">ScreenView</span>

								</Link>
							</div>
							<SearchBar />

							<div className="-mr-2 -my-2 md:hidden">
								<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<span className="sr-only">Open menu</span>
									<MenuIcon className="h-6 w-6" aria-hidden="true" />
								</Popover.Button>
							</div>


							<div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
								<Link to="#" className="ml-8 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<HomeIcon className="h-6 w-6" aria-hidden="true" />
								</Link>
								<Link to="#" className="ml-8 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<LinkIcon className="h-6 w-6" aria-hidden="true" />
								</Link>
								<Link to="#" className="ml-8 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<BookmarkAltIcon className="h-6 w-6" aria-hidden="true" />
								</Link>
								<Link to="#" className="ml-8 whitespace-nowrap rounded-md inline-flex items-center justify-center px-4 py-2 text-base font-medium text-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 hover:bg-gray-100 hover:text-indigo-900">
									Sign in
								</Link>
								<Link
									to="#"
									className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-indigo-500 rounded-md text-indigo-500 shadow-sm text-base font-medium focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 hover:text-indigo-900 hover:bg-gray-100 hover:border-indigo-900"
								>
									Sign up
								</Link>
							</div>
						</div>
					</div>

					<Transition
						show={open}
						as={Fragment}
						enter="duration-200 ease-out"
						enterFrom="opacity-0 scale-95"
						enterTo="opacity-100 scale-100"
						leave="duration-100 ease-in"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-95"
					>
						<Popover.Panel
							focus
							static
							className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
						>
							<div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
								<div className="pt-5 pb-6 px-5">
									<div className="flex items-center justify-end">
										<div className="-mr-2 ">
											<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
												<span className="sr-only">Close menu</span>
												<XIcon className="h-6 w-6" aria-hidden="true" />
											</Popover.Button>
										</div>
									</div>
								</div>
								<div className="py-6 px-5 space-y-6">
									<div className="grid grid-cols-2 gap-y-4 gap-x-8 flex justify-between">
										<Link to="#" className="ml-8 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
											<HomeIcon className="h-6 w-6" aria-hidden="true" />
										</Link>
										<Link to="#" className="ml-8 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
											<LinkIcon className="h-6 w-6" aria-hidden="true" />
										</Link>
										<Link to="#" className="ml-8 bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
											<BookmarkAltIcon className="h-6 w-6" aria-hidden="true" />
										</Link>
									</div>
									<div>
										<Link
											to="#"
											className="w-full flex items-center justify-center px-4 py-2 border border-indigo-500 rounded-md shadow-sm text-base font-medium text-indigo-600 hover:text-indigo-900 hover:bg-gray-100"
										>
											Sign up
										</Link>
										<p className="mt-6 text-center text-base font-medium text-gray-500">
											Existing customer?{' '}
											<Link to="#" className="whitespace-nowrap rounded-md inline-flex items-center justify-center px-4 py-2 text-base font-medium text-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 hover:bg-gray-100 hover:text-indigo-900">
												Sign in
											</Link>
										</p>
									</div>
								</div>
							</div>
						</Popover.Panel>
					</Transition>
				</>
			)}
		</Popover>
	)
}

export default Navbar
