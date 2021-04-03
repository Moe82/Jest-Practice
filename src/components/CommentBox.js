import React, { Component } from 'react';

class CommentBox extends Component {
	state = { comment: '' };

	handleChange = (event) => {
		const value = event.target.value;
		this.setState({ [event.target.name]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ comment: '' });
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

export default CommentBox;
