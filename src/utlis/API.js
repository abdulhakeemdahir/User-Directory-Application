import axios from "axios";
const BASEURL = "https://randomuser.me/api/";

const API = {
	getUsers: function (numberUsers) {
		return axios.get(BASEURL + `?results=${numberUsers}`);
	},
};

export default API;
