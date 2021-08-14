import React from 'react'
import Feed from '../components/Feed'
import Navbar from '../components/Navbar'
import Recommendation from '../components/Recommendation'


const HomePage = () => {
	return (
		<div>
			<div className="py-24">
      			<Navbar/>
				<div className="xl:ml-40 xl:max-w-3/4 lg:max-w-4/5 mx-auto item-center">
					<Feed/>
				</div>
				<div className="flex fixed top-32 right-9 mt-20">
					<Recommendation/>
				</div>
			</div>
		</div>
	)
}

export default HomePage
