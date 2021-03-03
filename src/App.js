import Body from "./components/Body";
import React from "react";
import Header from "./components/Header";
// import testUsers from "./utlis/testdata.json";
import API from "./utlis/API";
import SearchForm from "./components/SearchForm";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			search: "",
		};
	}

	componentDidMount() {
		this.searchUsers("11");
	}

	searchUsers(query) {
		API.getUsers(query)
			.then(res => this.setState({ users: res.data.results }))
			.catch(err => console.log(err));
	}

	handleInputChange(event) {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({
			[name]: value,
		});
	}

	// When the form is submitted, search the OMDB API for the value of `this.state.search`
	handleFormSubmit(event) {
		event.preventDefault();
		this.searchMovies(this.state.search);
	}

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
