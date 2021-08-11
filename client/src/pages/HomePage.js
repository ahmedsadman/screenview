import React from 'react'
import Navbar from '../components/Navbar'
import Recommendation from '../components/Recommendation'
import { useAuth0 } from '@auth0/auth0-react'


const HomePage = () => {
	const { getAccessTokenSilently } = useAuth0();
	getAccessTokenSilently().then(token => console.log(token));
	return (
		<div>
			<div className="py-24">
					<Navbar/>
				<div className="flex fixed top-32 right-9 mt-20">
					<Recommendation/>
				</div>
			</div>
		</div>
	)
}

export default HomePage
