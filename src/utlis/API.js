import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=25&nat=us,gb,as,cn,nz";
// API utility component
const API = {
	// Get Users Function
	getUsers: function () {
		return axios.get(BASEURL);
	},
};

export default API;
