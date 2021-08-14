import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import MovieShow from './MovieShow'
import { Link } from 'react-router-dom'

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

	let [categories] = useState({
		Upcoming: [
			{
				id: 1,
				title: 'Black Widow',
				date: '5h ago',
				description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
				image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2No8qXpkdu4yfaWGtTqh02qo1Dq.jpg',
				reviewCount: 5,
				watchedCount: 2,
				rating: 4,
			},
			{
				id: 2,
				title: 'Black Widow',
				date: '5h ago',
				description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
				image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2No8qXpkdu4yfaWGtTqh02qo1Dq.jpg',
				reviewCount: 5,
				watchedCount: 2,
				rating: 4,
			},
		],
		Popular: [
			{
				id: 1,
				title: 'Rick & Morty',
				date: '5h ago',
				description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
				image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg',
				reviewCount: 5,
				watchedCount: 2,
				rating: 4,
			},
			{
				id: 2,
				title: 'Black Widow',
				date: '5h ago',
				description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
				image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2No8qXpkdu4yfaWGtTqh02qo1Dq.jpg',
				reviewCount: 5,
				watchedCount: 2,
				rating: 4,
			},
		],
		Trending: [
			{
				id: 1,
				title: 'Black Widow',
				date: '5h ago',
				description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
				image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2No8qXpkdu4yfaWGtTqh02qo1Dq.jpg',
				reviewCount: 5,
				watchedCount: 2,
				rating: 4,
			},
			{
				id: 2,
				title: 'Black Widow',
				date: '5h ago',
				description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
				image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2No8qXpkdu4yfaWGtTqh02qo1Dq.jpg',
				reviewCount: 5,
				watchedCount: 2,
				rating: 4,
			},
			{
				id: 3,
				title: 'Black Widow',
				date: '5h ago',
				description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
				image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2No8qXpkdu4yfaWGtTqh02qo1Dq.jpg',
				reviewCount: 5,
				watchedCount: 2,
				rating: 4,
			},
			{
				id: 4,
				title: 'Black Widow',
				date: '5h ago',
				description: 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.',
				image: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2No8qXpkdu4yfaWGtTqh02qo1Dq.jpg',
				reviewCount: 5,
				watchedCount: 2,
				rating: 4,
			},
		],
	})


	return (
		<div className="rounded-lg overflow-auto hidden border-2 border-gray-500 xl:block border-opacity-20 max-w-1/4 max-h-3/4">
			<Tab.Group>
				<div className="bg-white border-b-2 fixed w-1/4 max-w-1/4">
					<Tab.List className="flex h-16 space-x-1 bg-white rounded-t-lg">
						{Object.keys(categories).map((category) => (
							<Tab key={category} className={({ selected }) => getSelectedClassName(selected)}>
								{category}
							</Tab>
						))}
					</Tab.List>
				</div>
				<div className="pt-16">
					<Tab.Panels>
						{Object.values(categories).map((posts, idx) => (
							<Tab.Panel key={idx}>
								{posts.map((post) => (
									<Link to='#' className="bg-white p-1 rounded-md inline-flex justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
									<MovieShow show={post} key={post.id} />
									</Link>
								))}
							</Tab.Panel>
						))}						
					</Tab.Panels>
				</div>
			</Tab.Group>
		</div >
	)
}

export default Recommendation



