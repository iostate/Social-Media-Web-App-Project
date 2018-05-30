import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP2134';

export function fetchPosts() {
	// payload for all the posts on the API
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	console.log(request);
	return {
		type: FETCH_POSTS,
		payload: request
	};
}