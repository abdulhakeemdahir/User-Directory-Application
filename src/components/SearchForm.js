import React from "react";

function SearchForm(props) {
	return (
		<form>
			<div className='form-group'>
				<label htmlFor='search'>Search:</label>
				<input
					onChange={props.handleInputChange}
					value={props.value}
					name='search'
					type='text'
					className='form-control'
					placeholder='Search For a User by First Name [Case Sensitive]'
					id='search'
				/>
				<br />
				<button onClick={props.handleFormSubmit} className='btn btn-primary'>
					Search
				</button>
				<button
					onClick={() => window.location.reload(false)}
					className='btn btn-warning mx-3'
				>
					Reset: Search
				</button>
				<section className='card my-3'>
					<select onChange={props.handleSort} className='dropdown-item'>
						<option className='dropdown-item'>Select Sort</option>
						<option value='az' className='dropdown-item'>
							A to Z
						</option>
						<option value='za' className='dropdown-item'>
							Z to A
						</option>
					</select>
				</section>
			</div>
		</form>
	);
}

export default SearchForm;
