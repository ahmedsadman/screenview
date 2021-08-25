const baseUrl = "https://api.themoviedb.org/3/";

const key = process.env.REACT_APP_TMDB_KEY;

export const trendingUrl = () => `${baseUrl}trending/movie/day?api_key=${key}`;

export const popularUrl = () => `${baseUrl}movie/popular?api_key=${key}`;

export const upcomingUrl = () => `${baseUrl}movie/upcoming?api_key=${key}`;

export const searchUrl = () => `${baseUrl}search/movie?api_key=${key}&query=`;
