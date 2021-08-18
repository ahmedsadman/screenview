import React from 'react'


const Comments = ({ comments }) => {
	return (
		<div>
			{comments.map(comment => (
				<div key={comment?._id} className="bg-white border-1 bg-gray-100 border-white mb-1 rounded-lg shadow content-center p-2 text-md text-gray-700 flex flex-row flex-wrap">
					<div>
						<img className="h-8 w-8 mr-4 rounded-full"
							src={comment?.author?.avatarUrl}
							alt=""
						/>
					</div>
					<div>
						<h6 className="text-sm overflow-hidden">@{comment?.author?.name}</h6>
						<p className="text-md">{comment?.content}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default Comments
