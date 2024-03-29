import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';


class PostsIndex extends Component {
	// component will render first, and then fetch the posts
	componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return	_.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={`/posts/${post.id}`} >
						{post.title}
					</Link>
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new">
						Add a Post
					</Link>
				</div>
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

// Instead of using mapDispatchToProps for the 2nd argument, simply
// pass in the action creator.  
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);