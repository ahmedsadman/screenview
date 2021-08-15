import React, { useState, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import MovieShow from './MovieShow'
import { Link } from 'react-router-dom'
import { getRecommendedObject } from '../data/getMovieData'
import Loading from './Loading'

const getSelectedClassName = (selected) => {
	const staticClass = 'w-full text-sm leading-5 font-medium rounded-lg bg-white rounded-md p-4 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
	let dynamicClass = ''
	if (selected) {
		dynamicClass = 'bg-white shadow-md'
	} else {
		dynamicClass = 'text-gray-100 hover:bg-white/[0.12] hover:text-white'
	}

	const finalClass = staticClass.concat(" ", dynamicClass)
	return finalClass
}

const Recommendation = () => {

	const [catagories, setCatagories] = useState()

	useEffect(() => {
		const getRecommended = async () => {
			const recommendedMovies = await getRecommendedObject()
			setCatagories(recommendedMovies)
		}
		
		getRecommended()
		
		// eslint-disable-next-line
	}, [])

	console.log(catagories)
	
	

	return (
		<div className="rounded-lg overflow-auto hidden border-2 border-gray-500 xl:block border-opacity-20 max-w-1/4 max-h-3/4">
			{catagories ?
				<Tab.Group>
				<div className="bg-white border-b-2 fixed w-1/4 max-w-1/4">
					<Tab.List className="flex h-16 space-x-1 bg-white rounded-t-lg">
						{Object.keys(catagories).map((category) => (
							<Tab key={category} className={({ selected }) => getSelectedClassName(selected)}>
								{category}
							</Tab>
						))}
					</Tab.List>
				</div>
				<div className="pt-16">
					<Tab.Panels>
						{Object.values(catagories).map((posts, idx) => (
							<Tab.Panel key={idx}>
								{posts.map((post) => (
									<Link to='#' key={post.id} className="bg-white p-1 rounded-md inline-flex justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
										<MovieShow show={post} key={post.id} />
									</Link>
								))}
							</Tab.Panel>
						))}						
					</Tab.Panels>
				</div>
			</Tab.Group> : <Loading/>}
		</div >
	)
}

export default Recommendation



