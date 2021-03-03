import axios from "axios";
const BASEURL = "https://randomuser.me/api/";
// API utility component
const API = {
	// Get Users Function
	getUsers: function (numberUsers) {
		return axios.get(BASEURL + `?results=${numberUsers}`);
	},
	// Search Name funciton
	searchName: function (name) {
		return axios.get(BASEURL + `?results=10&inc=${name}`);
	},
};

export default API;
