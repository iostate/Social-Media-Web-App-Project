import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
	// component will render first, and then fetch the posts
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return	_.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id}>
					{post.title}
				</li>
			);
		});
	}

	render() {
		// console.log(this.props.posts);
		// console.log(this.props.posts.length);
		return (
			<div>
				<h3>Posts Index</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>	
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts };
}

// Instead of using mapDispatchToProps, we pass in the
// action call and connect takes care of the rest for us. 
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);