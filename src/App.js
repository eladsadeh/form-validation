import React, { Component } from 'react';
import Form from './components/Form';
import Message from './components/Message';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { isVerified: false };
	}

	setIsVerified = (ev, ...args) => {
		ev.preventDefault();
		console.log(args);
		const isVerified = args.every((valid) => valid);
		console.log('isVerified:', isVerified);
		this.setState({ isVerified });
	};

	render() {
		return (
			<div>
				<Form setIsVerify={this.setIsVerified}></Form>
				<Message isVerified={this.state.isVerified}></Message>
			</div>
		);
	}
}

export default App;
