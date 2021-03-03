import axios from "axios";
const BASEURL = "https://randomuser.me/api/";

const API = {
	getUsers: function (numberUsers) {
		return axios.get(BASEURL + `?results=${numberUsers}`);
	},
	searchName: function (name) {
		return axios.get(BASEURL + `?results=10&inc=${name}`);
	},
};

export default API;
