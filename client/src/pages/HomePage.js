import React from 'react'
import Navbar from '../components/Navbar'
import Recommendation from '../components/Recommendation'

const HomePage = () => {
	return (
		<div>
			<Navbar/>
			<div className="flex absolute top-10 right-10 mt-20">
				<Recommendation/>
			</div>
			
		</div>
	)
}

export default HomePage
