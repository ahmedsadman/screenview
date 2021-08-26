import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import PosterCard from '../components/PosterCard';
import useWatchList from '../hooks/useWatchList';
import API from '../api';

const WatchListPage = () => {
	const { watchList, removeFromWatchList } = useWatchList();
	const [populatedList, setPopulatedList] = useState([]);

	const fetchMovieDetails = async () => {
		const api = new API();
		const list = [];
		for (let item of watchList) {
			const detail = await api.getMediaDetails(item.mediaId);
			list.push(detail);
		}
		setPopulatedList(list);
	};

	const handleWatchListRemove = (mediaId) => {
		removeFromWatchList(mediaId);
	}

	useEffect(() => {
		fetchMovieDetails();
	}, [watchList]);

	return (
		<div>
			<div className="fixed max-w-full inset-x-0 z-20">
				<Navbar />
			</div>

			<div className="py-24 text-center">
				<h3 className="my-4 text-2xl font-bold">Your Current Watch List</h3>
				<div className="flex justify-center">

					<div className="w-1/2 grid grid-cols-4 gap-4 flex justify-between p-4 shadow-lg rounded border-1">

						{populatedList.map(list => (
							<PosterCard show={list} key={list.title} handleWatchListRemove={handleWatchListRemove} />
						))}
					</div>

				</div>
			</div>


		</div>
	)
}

export default WatchListPage
