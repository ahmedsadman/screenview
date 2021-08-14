import React from 'react'
import Feed from '../components/Feed'
import Navbar from '../components/Navbar'
import Recommendation from '../components/Recommendation'


const HomePage = () => {
	return (
		<div>
			<div className="fixed max-w-full inset-x-0 z-20">
      			<Navbar/>
			</div>
			<div className="py-24">
				<div className="xl:ml-40 xl:max-w-3/4 lg:max-w-4/5 mx-auto item-center">
					<Feed/>
				</div>
				<div className="flex fixed top-32 right-9">
					<Recommendation/>
				</div>
			</div>
		</div>
	)
}

export default HomePage
