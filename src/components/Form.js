import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';

class Form extends Component {
	constructor({ setIsVerify }) {
		super();
		this.state = {
			isEmailValid: false,
			isNameValid: false,
			isPhoneValid: false,
			isUrlValid: false,
			name: '',
			email: '',
			phone: '',
			url: '',
		};
		this.setIsVerify = setIsVerify;
	}

	handleChange = (ev) => {
		this.setState({ ...this.state, [ev.target.id]: ev.target.value });
	};
	handleVerify = (ev) => {
		const newState = { ...this.state };
		newState.isEmailValid = /^[\w\.]+@\w+\.\w{2,3}$/.test(this.state.email)
			? true
			: false;

		newState.isPhoneValid = /^[2-9]\d{9}$/.test(this.state.phone)
			? true
			: false;

		newState.isUrlValid =
			// this.state.url.match(/(https?:\/\/)?(www\.)?([a-z0-9\-\.]\.\w{2,3}$)\/?([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)
			// /(https?:\/\/)?(www\.)?([a-z0-9\-\.]\.\w{2,3}$)\/?([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(
			/(https?:\/\/)*(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(
				this.state.url
			)
				? true
				: false;

		newState.isNameValid = /^[a-z][a-z ]{2,29}$/i.test(this.state.name)
			? true
			: false;
		this.setState(newState);

		this.setIsVerify(
			ev,
			newState.isNameValid,
			newState.isEmailValid,
			newState.isPhoneValid,
			newState.isUrlValid
		);
	};

	render() {
		return (
			<div className='row'>
				<h1 className='text-center'>Form Validation</h1>
				<form>
					<h3>Name:</h3>
					<input
						type='text'
						id='name'
						placeholder='Enter your name'
						onChange={this.handleChange}
						value={this.name}></input>
					<h3>Email:</h3>
					<input
						id='email'
						type='email'
						pattern='[\w\-_\.]+@\w+\.\w+'
						placeholder='Enter your email'
						value={this.email}
						onChange={this.handleChange}
						required></input>
					<h3>Phone:</h3>
					<input
						id='phone'
						type='text'
						placeholder='Enter your phone number'
						value={this.phone}
						onChange={this.handleChange}
						required></input>
					<h3>Blog URL:</h3>
					<input
						id='url'
						type='text'
						placeholder='Enter your blog url'
						value={this.url}
						onChange={this.handleChange}
						required></input>
					<div className='small-6 small-centered text-center columns'>
						<button
							onClick={this.handleVerify}
							// href='#'
							className='button success expand round text-center'>
							Verify
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default Form;
