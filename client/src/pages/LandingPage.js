import React from 'react'
import hero from '../assets/1154.jpg'
import SignIn from '../components/SignIn'

const LandingPage = () => {
	return (
		<div className="flex flex-col h-16 md:flex-row h-screen items-center">
			<div className="bg-white hidden lg:block max-w-screen md:w-1/2 xl:w-2/3 justify-center">
				<img src={hero} alt="hero" className="w-full  max-h-screen object-cover" />
			</div>
			<SignIn/>
		</div>
	)
}

export default LandingPage
