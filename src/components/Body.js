// My body component
function Body({ users }) {
	return (
		<div className='card'>
			<div className='card-body'>
				<h5 className='card-title'>Users</h5>
				{users.map(user => (
					<div class='table-responsive'>
						<table class='table'>
							<thead>
								<tr>
									<th scope='col'>Image</th>
									<th scope='col'>First Name</th>
									<th scope='col'>Last Name</th>
									<th scope='col'>Nat.</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<img src={user.picture.thumbnail} alt='person imge' />
									</td>
									<td>{user.name.first}</td>
									<td>{user.name.last}</td>
									<td>{user.nat}</td>
								</tr>
							</tbody>
						</table>
					</div>
				))}
			</div>
		</div>
	);
}

export default Body;
