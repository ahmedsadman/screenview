import React, { useState } from 'react'

const EditProfile = ({ user }) => {

	const [visibleImageInput, setVisibleImageInput] = useState(false)

	const makeImageInputVisible = () => {
		setVisibleImageInput(!visibleImageInput)
	}


	return (
		<div className="mt-5 md:mt-0 md:col-span-2">
			<form action="#" method="POST">
				<div className="shadow sm:rounded-md sm:overflow-hidden">
					<div className="px-4 py-5 bg-white space-y-6 sm:p-6">
						<div className="sm:rounded-md">
							<div className="px-4 py-5 bg-white sm:p-6">
								<div className="grid grid-cols-6 gap-6">
									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
											First name
										</label>
										<input
											type="text"
											name="first-name"
											id="first-name"
											autoComplete="given-name"
											className="mt-1 px-4 border-2 border-gray-300 h-10 focus:ring-gray-800 focus:border-gray-800 block w-full shadow-sm sm:text-sm rounded-md"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
											Last name
										</label>
										<input
											type="text"
											name="last-name"
											id="last-name"
											autoComplete="family-name"
											className="mt-1 px-4 border-2 border-gray-300 h-10 focus:ring-gray-800 focus:border-gray-800 block w-full shadow-sm sm:text-sm rounded-md"
										/>
									</div>

									<div className="col-span-6 sm:col-span-4">
										<label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
											Nickname
										</label>
										<input
											type="text"
											name="email-address"
											id="email-address"
											defaultValue={user.nickname}
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
											autoComplete="email"
											className="mt-1 px-4 border-2 border-gray-300 h-10 focus:ring-gray-800 focus:border-gray-800 block w-full shadow-sm sm:text-sm rounded-md"
										/>
									</div>

									<div className="col-span-6 sm:col-span-3">
										<label htmlFor="country" className="block text-sm font-medium text-gray-700">
											Gender
										</label>
										<select
											id="country"
											name="country"
											autoComplete="country"
											className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										>
											<option>Male</option>
											<option>Female</option>
											<option>Other</option>
										</select>
									</div>
								</div>
							</div>
							<div className="flex-col flex items-center content-center justify-center">
								<div className=' flex-col flex justify-center mx-auto'>
									<div className="h-20 w-20 rounded-full overflow-hidden bg-gray-100">
										<img src={user.picture} alt="" />
									</div>
									<div className="mt-2">
										<button
										type="button"
										className="bg-white px-4 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
										onClick={makeImageInputVisible}
										>
											Change
										</button>
									</div>
								</div>
									
								{visibleImageInput ?
									<div className="mt-4 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
									<div className="space-y-1 text-center">
										<svg
											className="mx-auto h-12 w-12 text-gray-400"
											stroke="currentColor"
											fill="none"
											viewBox="0 0 48 48"
											aria-hidden="true"
										>
											<path
												d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<div className="flex text-sm text-gray-600">
											<label
												htmlFor="file-upload"
												className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
											>
												<span>Upload a file</span>
												<input id="file-upload" name="file-upload" type="file" className="sr-only" />
											</label>
											<p className="pl-1">or drag and drop</p>
										</div>
										<p className="text-xs text-gray-500">PNG, JPG, GIF</p>
									</div>
								</div> : ''}
								
							</div>

			
						</div>
						<div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
							<button
								type="submit"
								className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Save
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default EditProfile
