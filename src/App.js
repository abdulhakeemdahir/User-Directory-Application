import Body from "./components/Body";
import React from "react";
import Header from "./components/Header";
import API from "./utlis/API";
import SearchForm from "./components/SearchForm";

// Created a React Class
class App extends React.Component {
	//Set up my contstructor
	constructor(props) {
		super(props);
		this.state = {
			users: [],
			search: "",
			al: "az",
		};
		// Binded This to all of my methods
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleSort = this.handleSort.bind(this);
	}
	// Mounted my initial component
	componentDidMount() {
		this.getUsers();
	}
	// API request to get Random users
	getUsers() {
		API.getUsers()
			.then(res => this.setState({ users: res.data.results }))
			.catch(err => console.log(err));
	}
	// Function to search users by input
	handleInputChange(event) {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({
			[name]: value,
		});
		let filteruser = [...this.state.users];
		const filterList = filteruser.filter(user => {
			let values = Object.values(user).join("").toLowerCase();
			return values.indexOf(value.toLowerCase()) !== -1;
		});
		this.setState({ users: filterList });
		if (value === "") {
			this.getUsers();
		}
	}

	// When the form is submitted, search the RandomUsers API for the value of `this.state.search`
	handleFormSubmit(event) {
		event.preventDefault();
		let filteruser = [...this.state.users];
		if (this.state.search)
			filteruser = this.state.users.filter(u =>
				u.name.first.startsWith(this.state.search)
			);
		this.setState({ users: filteruser });
	}
	// Function to sort users
	handleSort() {
		let sortUser;
		if (this.state.al === "az") {
			sortUser = this.state.users.sort((a, b) =>
				a.name.first < b.name.first ? 1 : -1
			);
			this.setState({ users: sortUser, al: "za" });
		} else {
			sortUser = this.state.users.sort((a, b) =>
				a.name.first > b.name.first ? 1 : -1
			);
			this.setState({ users: sortUser, al: "az" });
		}
	}
	// Render function for React
	render() {
		return (
			<div className='container'>
				<Header />
				<SearchForm
					value={this.state.search}
					valueAL={this.state.al}
					handleSort={this.handleSort}
					handleInputChange={this.handleInputChange}
					handleFormSubmit={this.handleFormSubmit}
				/>
				<Body users={this.state.users} />
			</div>
		);
	}
}

export default App;
