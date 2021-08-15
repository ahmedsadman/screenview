import React from 'react'

const StaticProfile = ({ user }) => {
	return (
		<div className="mt-5 md:mt-0 md:col-span-2">
			<div className="shadow sm:rounded-md sm:overflow-hidden">
				<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
					<div className="sm:rounded-md">
						<div className="px-4 py-5 bg-white sm:p-6">
							<div className="grid grid-cols-6 gap-6">
								<div className="col-span-6 sm:col-span-4">
									<label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
										Nickname
									</label>
									<input
										type="text"
										name="email-address"
										id="email-address"
										defaultValue={user.nickname}
										readOnly
										autoComplete="email"
										className="mt-1 px-4 border-2 border-gray-300 h-10 focus:ring-gray-800 focus:border-gray-800 block w-full shadow-sm sm:text-sm rounded-md"
									/>
								</div>

								<div className="col-span-6 sm:col-span-4">
									<label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
										Email address
									</label>
									<input
										type="text"
										name="email-address"
										id="email-address"
										defaultValue={user.email}
										readOnly
										autoComplete="email"
										className="mt-1 px-4 border-2 border-gray-300 h-10 focus:ring-gray-800 focus:border-gray-800 block w-full shadow-sm sm:text-sm rounded-md"
									/>
								</div>
							</div>
						</div>
						<div className="flex-col flex items-center content-center justify-center">
							<div className=' flex-col flex justify-center mx-auto'>
								<div className="h-20 w-20 rounded-full overflow-hidden bg-gray-100">
									<img src={user.picture} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

	</div>
						
	)
}

export default StaticProfile
