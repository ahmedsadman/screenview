import axios from 'axios';

const STAGE = process.env.REACT_APP_STAGE
const BASE_URL_LOCAL = 'http://localhost:3001';
const BASE_URL_PROD = '';

class API {
  constructor(token) {
    const baseURL = STAGE === 'PROD' ? BASE_URL_PROD : BASE_URL_LOCAL;
    this._axiosAuth = axios.create({
      baseURL,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

  /* --------------------- USER ----------------------- */
  async getUserByGuid(guid) {
    const res = await this._axiosAuth.get(`/users/${guid}`);
    return res.data;
  }

  // guid and userId (or id in short) is different. id/userId refers to the mongoose id
  // while guid refers to the unique auth0 id
  async updateUserByGuid(guid, name, email, avatar_url = null) {
    const data = {
      name,
      email,
      avatar_url
    }
    const res = await this._axiosAuth.put(`/users?guid=${guid}`, data);
    return res.data;
  }

  // Followee -> person that you're following/want to follow
  async followUser(userId, followeeId) {
    const res = await this._axiosAuth.post(`/users/${userId}/follow/${followeeId}`);
    return res.data;
  }

  async getFollowees(userId) {
    const res = await this._axiosAuth.get(`/users/${userId}/followee`);
    return res.data;
  }

  async getUserFeed(userId) {
    const res = await this._axiosAuth.get(`/users/${userId}/feed`);
    return res.data;
  }

  async getUserPosts(userId) {
    const res = await this._axiosAuth.get(`/users/${userId}/posts`);
    return res.data;
  }

  /* --------------------- POSTS ----------------------- */
  async createPost(type, content, authorId, mediaId, rating = null) {
    const data = {
      type,
      content,
      author: authorId,
      mediaId,
      rating
    };
    const res = await this._axiosAuth.post(`/posts`, data);
    return res.data;
  }

  async addPostComment(postId, authorId, content) {
    const data = {
      postId,
      authorId,
      content
    };
    const res = await this._axiosAuth.post(`/:${postId}/comments`, data);
    return res.data;
  }
}

export default API;
