import Body from "./components/Body";
import React from "react";
import Header from "./components/Header";
import testUsers from "./utlis/testdata.json";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			search: "",
		};
	}
	// When this component mounts, search for the movie "The Matrix"
	componentDidMount() {
		this.searchUsers();
	}

	searchUsers = query => {
		API.search(query)
			.then(res => this.setState({ result: res.data }))
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({
			[name]: value,
		});
	};

	// When the form is submitted, search the OMDB API for the value of `this.state.search`
	handleFormSubmit = event => {
		event.preventDefault();
		this.searchMovies(this.state.search);
	};

	render() {
		return (
			<div className='container'>
				<Header />
				<SearchForm
					value={this.state.search}
					handleInputChange={this.handleInputChange}
					handleFormSubmit={this.handleFormSubmit}
				/>
				<Body users={this.state.users} />
			</div>
		);
	}
}

export default App;
