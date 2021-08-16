import React from 'react'


const Comments = ({ comments }) => {
	console.log(comments)
	return (
		<div>
			{comments.map(comment => (
				<div key={comment.text} className="bg-white border-1 bg-gray-100 border-white mb-1 rounded-lg shadow content-center p-2 text-md text-gray-700 flex flex-row flex-wrap">
					<div>
						<img className="h-8 w-8 mr-4 rounded-full"
							src={comment.userAvatar}
							alt=""
						/>
					</div>
					<div>
						<h6 className="text-sm overflow-hidden">@{comment.userNickname}</h6>
						<p className="text-md">{comment.text}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default Comments
