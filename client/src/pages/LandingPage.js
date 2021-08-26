import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import hero from '../assets/1154.png';
import SignIn from '../components/SignIn';

const LandingPage = () => {
	const { isAuthenticated } = useAuth0();
	return isAuthenticated ? <Redirect to='/feed' /> : (
		<div className="flex flex-col h-16 md:flex-row h-screen items-center">
			<div className="bg-white hidden lg:block max-w-screen md:w-1/2 xl:w-2/3 justify-center">
				<img src={hero} alt="hero" className="w-full  max-h-screen object-cover" />
			</div>
			<SignIn />
		</div>
	)
}

export default LandingPage
