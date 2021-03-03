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
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.searchUsers = this.searchUsers.bind(this);
	}

	componentDidMount() {
		this.getUsers("25");
	}

	getUsers(query) {
		API.getUsers(query)
			.then(res => this.setState({ users: res.data.results }))
			.catch(err => console.log(err));
	}
	searchUsers(query) {
		API.searchName(query)
			.then(res => console.log(res.data.results))
			.then(res => this.setState({ users: res.data.results }))
			.catch(err => console.log(err));
	}

	handleInputChange(event) {
		const value = event.target.value;
		const name = event.target.name;

		// console.log(this);
		this.setState({
			[name]: value,
		});
	}

	// When the form is submitted, search the RandomUsers API for the value of `this.state.search`
	handleFormSubmit(event) {
		event.preventDefault();
		this.searchUsers(String(this.state.search));
		console.log(this.state.search);

		let filteredUsers = this.state.users;
		if (this.state.search)
			filteredUsers = this.state.users.filter(u =>
				u.name.first.startsWith(this.state.search)
			);
		console.log(filteredUsers);
		this.setState({ users: filteredUsers });
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
