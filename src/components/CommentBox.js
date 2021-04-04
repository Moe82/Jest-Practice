import React, { Component } from 'react';
import { connect } from 'react-redux';

import saveComment from 'redux/actions';

class CommentBox extends Component {
	state = { comment: '' };

	handleChange = (event) => {
		const value = event.target.value;
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ comment: '' });
		this.props.saveComment(this.state.comment);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h4>Add a comment</h4>
					<textarea
						name={'comment'}
						value={this.state.comment}
						onChange={this.handleChange}
					/>
					<div>
						<button>Submit Comment</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		saveComment: (comment) => {
			dispatch(saveComment(comment));
		},
	};
};

export default connect(null, mapDispatchToProps)(CommentBox);
