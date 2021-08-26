import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

const SearchBar = ({ keyword }) => {
	return (
		<div className="pt-2 relative mx-auto z-0 text-gray-600">
			<input className="border-2 border-gray-300 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none hover:border-gray-600"
				type="search" name="search" placeholder="Search" />
			<button type="submit" className="absolute mt-4 mr-4 top-0 left-52 hover:text-gray-900">
				<SearchIcon className="h-6 w-6" aria-hidden="true" />
			</button>
		</div>
	)
}

export default SearchBar
