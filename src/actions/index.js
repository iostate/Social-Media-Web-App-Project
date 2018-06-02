import axios from 'axios';
import { func } from 'prop-types';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=PAPERCLIP2134';

/**
 * Fetches all the posts from the API.
 */
export function fetchPosts() {
	// payload for all the posts on the API
	const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
	console.log(request);
	return {
		type: FETCH_POSTS,
		payload: request
	};
}

/**
 * Post a new post to the API. After successfully posting,
 * execute the callback function. 
 * @param {*} values Object containing the values of the form. 
 * @param {*} callback A function that navigates the user back to 
 * PostsIndex.
 */
export function createPost(values, callback) {
	const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
		.then(() => callback());

	return {
		type: CREATE_POST,
		payload: request
	};
}