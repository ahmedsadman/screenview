import React from 'react'
import Navbar from '../components/Navbar'
import Recommendation from '../components/Recommendation'

const HomePage = () => {
	return (
		<div>
			<div className="py-24">
      			<Navbar/>
				<div className="flex absolute top-10 right-9 mt-20">
					<Recommendation/>
				</div>
			</div>
		</div>
	)
}

export default HomePage
