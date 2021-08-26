const baseUrl = 'https://api.themoviedb.org/3/'

const key = process.env.REACT_APP_TMDB_KEY

export const trendingUrl = () => {return `${baseUrl}trending/movie/day?api_key=${key}`}

export const popularUrl = () => {return `${baseUrl}movie/popular?api_key=${key}`}

export const upcomingUrl = () => {return `${baseUrl}movie/upcoming?api_key=${key}`}

export const searchUrl = () => {return `${baseUrl}search/movie?api_key=${key}&query=`}
