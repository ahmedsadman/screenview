import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'

const SearchBar = ({ keyword }) => {
	return (
		<>
			<div class="pt-2 relative mx-auto text-gray-600">
				<input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none hover:border-gray-600"
					type="search" name="search" placeholder="Search" />
				<button type="submit" className="absolute right-0 top-0 mt-4 mr-4 hover:text-gray-900">
					<SearchIcon className="h-6 w-6" aria-hidden="true" />
				</button>
			</div>
		</>
	)
}

export default SearchBar
