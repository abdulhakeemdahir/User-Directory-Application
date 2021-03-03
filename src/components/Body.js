function Body({ users }) {
	return (
		<div className='card'>
			<div className='card-body'>
				<h5 className='card-title'>Special title treatment</h5>
				{users.map(user => (
					<p className='card-text'>{user.name.first}</p>
				))}
			</div>
		</div>
	);
}

export default Body;
