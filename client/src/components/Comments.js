import React from 'react'


const Comments = ({ comments }) => {
	return (
		<div>
			{comments.map(comment => (
				<div key={comment.text} className="bg-white border-1 bg-gray-100 border-white mb-1 rounded-lg shadow p-2 text-md text-gray-700 content-center flex flex-row flex-wrap">
				<img className="h-6 w-6 mr-4 rounded-full"
					src={comment.userAvatar}
					alt=""
				/>
				<p className="overflow-hidden">{comment.text}</p>
			</div>
			
			))}
		</div>
	)
}

export default Comments
