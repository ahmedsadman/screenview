import React from 'react'
import SignupButton from './SignupButton'
import LoginButton from './LoginButton'
import { AnnotationIcon, CollectionIcon, FilmIcon, SearchCircleIcon, UsersIcon } from '@heroicons/react/outline'
import logo from '../assets/screenView.png'

const SignIn = () => {
	return (
		<div className="flex flex-col pl-10 pr-10 md:w-1/2 xl:w-1/3 relative">
			<div className="flex justify-center">
				<img src={logo} alt="logo" className="h-44 w-44 mb-4" />
			</div>

			<h1 className="text-center font-bold text-4xl">ScreenView</h1>
			<div className="mt-8">
				<h3 className="flex items-center mb-4"><AnnotationIcon className="h-14 w-14 mr-6" />Share Opinions</h3>
				<h3 className="flex items-center mb-4"><CollectionIcon className="h-14 w-14 mr-6" />Create Share Watch list</h3>
				<h3 className="flex items-center mb-4"><SearchCircleIcon className="h-14 w-14 mr-6" /> Discover New Shows</h3>
				<h3 className="flex items-center mb-4"><UsersIcon className="h-14 w-14 mr-6" /> Meet New People</h3>
				<h3 className="flex items-center mb-4"><FilmIcon className="h-14 w-14 mr-6" />Enjoy Free times with the best shows for you</h3>
			</div>

			<LoginButton />
			<p className="mt-2">Need an account? <SignupButton /> </p>
			<a href='https://www.freepik.com/vectors/pattern' className='absolute text-xs text-blue-400 hover:underline -bottom-32'>Pattern vector created by dgim-studio - www.freepik.com</a>
		</div>
	)
}

export default SignIn
