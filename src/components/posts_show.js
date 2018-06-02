import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
	componentDidMount() {
		// gets the ID out of the URL
		const { id } = this.props.match.params;
		this.props.fetchPost(id);
	}

	render() {
		const { post } = this.props;

		// component loads 1st and no ID is initialized causing the post
		// to be undefined. the following loading screen allows the component
		// to initialize the ID, and then render it.
		if (!post) {
			return <div>Loading . . . </div>;
		}

		return (
			<div>
				<h3>{post.title}</h3>
				<h6>Categories: { post.categories }</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

/**
 * 
 * @param {*} posts A list of all the posts on the API.  
 * @param {*} ownProps Object containing the props of the PostsShow component.  
 */
function mapStateToProps({posts}, ownProps) {
	// use mapStateToProps to select little pieces of the state off the global state
	// we can access this post anywhere within this component by referencing this.props.post
	return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);