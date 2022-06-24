import React from 'react';

const Message = (props) => {
	console.log(props);
	return (
		<div>
			<h3 className='text-center message'>
				{props.isVerified ? 'Verified' : 'Not Verified'}
			</h3>
		</div>
	);
};

export default Message;
