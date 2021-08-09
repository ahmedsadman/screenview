import React from 'react'
import Hero from '../components/Hero'
import SignForm from '../components/SignForm'
import hero from '../assets/1154.jpg'

const LandingPage = () => {
	return (
		<div className="flex flex-col h-16 md:flex-row h-screen items-center">
			<Hero />
			<div className="bg-white hidden lg:block max-w-screen md:w-1/2 xl:w-2/3 justify-center">
				<img src={hero} alt="hero" className="w-full  max-h-screen object-cover" />
			</div>
			<SignForm />
		</div>
	)
}

export default LandingPage
