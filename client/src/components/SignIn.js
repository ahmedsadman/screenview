import React from 'react'
import SignupButton from './SignupButton'
import LoginButton from './LoginButton'
import { AnnotationIcon, CollectionIcon, FilmIcon, SearchCircleIcon, UsersIcon } from '@heroicons/react/outline'

const SignIn = () => {
	return (
		<>
			<div className="flex flex-col pl-10 pr-10 sm:mt-10 md:w-1/2 xl:w-1/3">
				<div className="mb-12">
					<h3 className="flex items-center mb-4"><AnnotationIcon className="h-20 w-20 mr-6"/>Share Opinions</h3>
					<h3 className="flex items-center mb-4"><CollectionIcon className="h-20 w-20 mr-6"/>Create Share Watch list</h3>
					<h3 className="flex items-center mb-4"><SearchCircleIcon className="h-20 w-20 mr-6"/> Discover New Shows</h3>
					<h3 className="flex items-center mb-4"><UsersIcon className="h-20 w-20 mr-6"/> Meet New People</h3>
					<h3 className="flex items-center mb-4"><FilmIcon className="h-20 w-20 mr-6"/>Enjoy Free times with the best shows for you</h3>
				</div>
			
				<LoginButton/>
				<p className="mt-2">Need an account? <SignupButton/> </p>
			
				
			</div>
			
		</>
	)
}

export default SignIn
