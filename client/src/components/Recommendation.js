import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { getRecommendedObject } from '../data/getMovieData';
import Loading from './Loading';
import MovieShowCard from './MovieShowCard';
import { PlusCircleIcon } from '@heroicons/react/outline';
import useWatchList from '../hooks/useWatchList';

const getSelectedClassName = (selected) => {
  const staticClass =
    'w-full text-sm leading-5 font-medium rounded-lg bg-white rounded-md p-4 inline-flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500';
  let dynamicClass = '';
  if (selected) {
    dynamicClass = 'bg-white shadow-md';
  } else {
    dynamicClass = 'text-gray-100 hover:bg-white/[0.12] hover:text-white';
  }

  const finalClass = staticClass.concat(' ', dynamicClass);
  return finalClass;
};

const Recommendation = () => {
  const { addToWatchList } = useWatchList();
  const [catagories, setCatagories] = useState();
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    const getRecommended = async () => {
      const recommendedMovies = await getRecommendedObject();
      setCatagories(recommendedMovies);
    };

    getRecommended();

    // eslint-disable-next-line
  }, []);

  const _addToWatchList = async (title, type, mediaId) => {
    // TODO: The logic for adding to watchlist
    await addToWatchList(title, type, mediaId);
    alert('Movie added to watchlist');
  };

  const handleMouseIn = (id) => {
    setHoveredId(id);
  };

  const handleMouseOut = () => {
    setHoveredId(null);
  };

  return (
    <div className="rounded-lg overflow-auto hidden border-2 border-gray-500 xl:block border-opacity-20 max-w-1/4 max-h-3/4">
      {catagories ? (
        <Tab.Group>
          <div className="bg-white border-b-2 fixed w-1/4 max-w-1/4">
            <Tab.List className="flex h-16 space-x-1 bg-white rounded-t-lg">
              {Object.keys(catagories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) => getSelectedClassName(selected)}
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
          </div>
          <div className="pt-16">
            <Tab.Panels>
              {Object.values(catagories).map((shows, idx) => (
                <Tab.Panel key={idx}>
                  {shows.map((show) => (
                    <div
                      className="flex relative"
                      key={show.id}
                      onMouseEnter={() => handleMouseIn(show.id)}
                      onMouseLeave={() => handleMouseOut()}
                    >
                      <Link
                        to={`/movie/${show.id}`}
                        className="bg-white p-1 rounded-md inline-flex justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                      >
                        <MovieShowCard show={show} />
                      </Link>
                      {hoveredId && hoveredId === show.id ? (
                        <button
                          className="flex absolute right-2 top-1 justify-start has-tooltip rounded-md p-2 text-gray-400 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          onClick={() =>
                            _addToWatchList(show.title, 'movie', show.id)
                          }
                        >
                          <span className="tooltip rounded shadow-lg bg-white-100 text-xs mt-8 -ml-2">
                            Add To Watch List
                          </span>
                          <PlusCircleIcon className="h-6 w-6 text-gray-400" />
                        </button>
                      ) : null}
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </div>
        </Tab.Group>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Recommendation;
