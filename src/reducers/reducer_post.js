import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

// default state as an object
export default function(state = {}, action) {
	switch(action.type) {
		case FETCH_POST:
			// const post = action.payload.data;
			// const newState = { ...state };
			// newState[post.id] = post; // take newState, give it the index of the post.id and set it equal to post
			// return newState;
			// need to make sure that the new state has the id of the post as a key

			// get the id of the post, access state[id] = post 
			return {...state, [action.payload.data.id]:action.payload.data};
		case FETCH_POSTS:
			return _.mapKeys(action.payload.data, "id");
		default:
			return state;
	}
}