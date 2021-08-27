**WE'RE LIVE: https://screenview.netlify.app**

ScreenView is the missing social platform for movie and tv show lovers. Created by movie lovers, for movie lovers. From this social site, you can do the following:

- Discover what to watch
- Follow other people with similar interests
- Keep updated with your friends activities regarding movie/tv shows
- Post reviews
- Create your own watchlist and see other's
- Other typical social site features

We're still at very early stages. Hoping to take this project to the next level soon.

## Development
This project uses React as the frontend and Node.js as the backend. MongoDB is used as the database. To run this project in dev env:

- Clone this repo
- Provide env variables in a `.env` file, both for the `cilent` and `server` side (more on this below)
- From the client repo, run `npm start`
- From the server repo, run `npm run dev`

### Environment Variables
This project uses Auth0 as the authentication platform and TMDB as the movie data provider. Most of the environment variables will be provied 
by the said platforms. The following environment variables are needed for the React app:

```
REACT_APP_AUTH0_DOMAIN
REACT_APP_AUTH0_CLIENT_ID
REACT_APP_AUDIENCE
REACT_APP_TMDB_KEY
```

And for the server side:
```
MONGODB_DATABASE_URI
TMDB_API_KEY
AUTH0_DOMAIN
AUTH0_AUDIENCE
AUTH0_ISSUER
```
