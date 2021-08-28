import axios from 'axios';
import { trendingUrl, upcomingUrl, popularUrl } from '../api/tmdbApi';

const fetchTrendingMovies = async () => {
  const res = await axios.get(trendingUrl());
  return res;
};

const fetchPopularMovies = async () => {
  const res = await axios.get(popularUrl());
  return res;
};

const fetchUpcomingMovies = async () => {
  const res = await axios.get(upcomingUrl());
  return res;
};

export const getRecommendedObject = async () => {
  const popularData = await fetchPopularMovies();
  const popular = popularData.data.results;
  const upcomingData = await fetchUpcomingMovies();
  const upcoming = upcomingData.data.results;
  const trendingData = await fetchTrendingMovies();
  const trending = trendingData.data.results;

  const recommended = {
    Popular: popular,
    Upcoming: upcoming,
    Trending: trending,
  };
  return recommended;
};
