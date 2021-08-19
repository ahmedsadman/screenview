import axios from 'axios';

const STAGE = process.env.REACT_APP_STAGE
const BASE_URL_LOCAL = 'http://localhost:3001';
const BASE_URL_PROD = '';

class API {
  constructor(token) {
    const baseURL = STAGE === 'PROD' ? BASE_URL_PROD : BASE_URL_LOCAL;
    this.tmdbKey = process.env.REACT_APP_TMDB_KEY;
    this._axiosAuth = axios.create({
      baseURL,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  /* --------------------- USER ----------------------- */
  async createUser(email) {
    const res = await this._axiosAuth.post(`/users/me`, { email });
    return res.data;
  }

  async searchUserByName(name) {
    const res = await this._axiosAuth.get(`/users/search?q=${name}`);
    return res.data;
  }

  async getUser() {
    const res = await this._axiosAuth.get(`/users/me`);
    return res.data;
  }

  // guid and userId (or id in short) is different. id/userId refers to the mongoose id
  // while guid refers to the unique auth0 id
  async updateUser(name, email, avatar_url = null) {
    const data = {
      name,
      email,
      avatar_url
    }
    const res = await this._axiosAuth.put(`/users/me`, data);
    return res.data;
  }

  // Followee -> person that you're following/want to follow
  async followUser(followeeId) {
    const res = await this._axiosAuth.post(`/users/me/follow/${followeeId}`);
    return res.data;
  }

  async unfollowUser(followeeId) {
    const res = await this._axiosAuth.post(`/users/me/unfollow/${followeeId}`);
    return res.data;
  }

  async getFollowees() {
    const res = await this._axiosAuth.get(`/users/me/followee`);
    return res.data;
  }

  async getUserFeed() {
    const res = await this._axiosAuth.get(`/users/me/feed`);
    return res.data;
  }

  async getUserPosts() {
    const res = await this._axiosAuth.get(`/users/me/posts`);
    return res.data;
  }

  async addToWatchList(title, type, mediaId) {
    const data = {
      title,
      type,
      mediaId
    }
    const res = await this._axiosAuth.post(`/users/me/watchlist`, data);
    return res.data;
  }

  async removeFromWatchList(mediaId) {
    const res = await this._axiosAuth.delete(`/users/me/watchlist?mediaId=${mediaId}`);
    return res.data;
  }

  async getUserSuggestions() {
    const res = await this._axiosAuth.get('/users/suggestions');
    return res.data;
  }

  /* --------------------- POSTS ----------------------- */
  async createPost(type, content, mediaId, rating = null) {
    const data = {
      type,
      content,
      mediaId,
      rating
    };
    const res = await this._axiosAuth.post(`/posts`, data);
    return res.data;
  }

  async addPostComment(postId, content) {
    const data = {
      postId,
      content
    };
    const res = await this._axiosAuth.post(`/posts/${postId}/comments`, data);
    return res.data;
  }

  async getPostComments(postId) {
    const res = await this._axiosAuth.get(`/posts/${postId}/comments`);
    return res.data;
  }

  /* --------- TMDB ----------------- */
  buildTmdbUrl(url) {
    return `https://api.themoviedb.org/3${url}api_key=${this.tmdbKey}`
  }

  getPosterPath(url, size=300) {
    return `https://image.tmdb.org/t/p/w${size}/${url}`;
  }

  async getMediaDetails(mediaId) {
    const url = this.buildTmdbUrl(`/movie/${mediaId}?`);
    const res = await axios.get(url);
    return res.data;
  }
}

export default API;
