import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";

class App extends React.Component {
	state = {
		users: [
			{
				gender: "female",
				name: {
					title: "Ms",
					first: "Quitéria",
					last: "Lima",
				},
				location: {
					street: {
						number: 9608,
						name: "Rua Paraíba ",
					},
					city: "Curitiba",
					state: "Sergipe",
					country: "Brazil",
					postcode: 59542,
					coordinates: {
						latitude: "-69.6767",
						longitude: "49.5101",
					},
					timezone: {
						offset: "-3:30",
						description: "Newfoundland",
					},
				},
				email: "quiteria.lima@example.com",
				login: {
					uuid: "c8a5f74e-847d-4c01-943e-77e62abdb236",
					username: "whiteladybug525",
					password: "california",
					salt: "pC1Waf1s",
					md5: "03f44a0c6dfe6ad8251f5b271609b24d",
					sha1: "e502611a5d9a2be43b6dc54eb85688c9fc5c747b",
					sha256:
						"350f49cd81d11260b0f07fbfc16532346e119a2dbe829b06f824ea5f6c025f69",
				},
				dob: {
					date: "1994-11-08T16:41:04.033Z",
					age: 27,
				},
				registered: {
					date: "2009-01-08T16:34:48.058Z",
					age: 12,
				},
				phone: "(67) 8712-4848",
				cell: "(07) 5101-8693",
				id: {
					name: "",
					value: null,
				},
				picture: {
					large: "https://randomuser.me/api/portraits/women/17.jpg",
					medium: "https://randomuser.me/api/portraits/med/women/17.jpg",
					thumbnail: "https://randomuser.me/api/portraits/thumb/women/17.jpg",
				},
				nat: "BR",
			},
			{
				gender: "male",
				name: {
					title: "Mr",
					first: "Mahamed",
					last: "Øye",
				},
				location: {
					street: {
						number: 5874,
						name: "Dalbakkveien",
					},
					city: "Preststranda",
					state: "Oppland",
					country: "Norway",
					postcode: "0516",
					coordinates: {
						latitude: "70.6217",
						longitude: "-25.3048",
					},
					timezone: {
						offset: "+2:00",
						description: "Kaliningrad, South Africa",
					},
				},
				email: "mahamed.oye@example.com",
				login: {
					uuid: "d0c8202d-9f5d-479f-8929-89aac928bbdc",
					username: "silvercat435",
					password: "stalker",
					salt: "PPVMjFQS",
					md5: "1a754fe590a4628cf73e9c7cff12a861",
					sha1: "1f15a2311bf8d5599847c3bc8070e5512a51c2ca",
					sha256:
						"865d7ea74992a8eb77b96fe6a7aac37721c14e3a1d4a28cdb773e42fe08539c5",
				},
				dob: {
					date: "1985-03-10T13:58:08.915Z",
					age: 36,
				},
				registered: {
					date: "2011-07-12T16:46:20.188Z",
					age: 10,
				},
				phone: "62383702",
				cell: "94286131",
				id: {
					name: "FN",
					value: "10038525307",
				},
				picture: {
					large: "https://randomuser.me/api/portraits/men/89.jpg",
					medium: "https://randomuser.me/api/portraits/med/men/89.jpg",
					thumbnail: "https://randomuser.me/api/portraits/thumb/men/89.jpg",
				},
				nat: "NO",
			},
			{
				gender: "female",
				name: {
					title: "Mademoiselle",
					first: "Beate",
					last: "Francois",
				},
				location: {
					street: {
						number: 2081,
						name: "Avenue des Ternes",
					},
					city: "Heimberg",
					state: "Aargau",
					country: "Switzerland",
					postcode: 9944,
					coordinates: {
						latitude: "-64.2526",
						longitude: "-45.6279",
					},
					timezone: {
						offset: "+6:00",
						description: "Almaty, Dhaka, Colombo",
					},
				},
				email: "beate.francois@example.com",
				login: {
					uuid: "b8e936d5-c04c-473c-a143-703b150c3060",
					username: "ticklishsnake486",
					password: "playboy",
					salt: "zXhZGgCw",
					md5: "9141d399a43f1614a3f5568d4d9e62f1",
					sha1: "b31f2cf335d91ad3e1c41964931f266728cdd5f6",
					sha256:
						"a72b74552eaf35e4fb6fa94465efbcf46ee669bca673cc442f7915e0e4bb45e8",
				},
				dob: {
					date: "1979-11-17T02:17:52.972Z",
					age: 42,
				},
				registered: {
					date: "2011-12-20T07:20:06.985Z",
					age: 10,
				},
				phone: "077 837 03 73",
				cell: "077 196 11 41",
				id: {
					name: "AVS",
					value: "756.9026.3232.76",
				},
				picture: {
					large: "https://randomuser.me/api/portraits/women/77.jpg",
					medium: "https://randomuser.me/api/portraits/med/women/77.jpg",
					thumbnail: "https://randomuser.me/api/portraits/thumb/women/77.jpg",
				},
				nat: "CH",
			},
			{
				gender: "male",
				name: {
					title: "Mr",
					first: "Jayden",
					last: "Kumar",
				},
				location: {
					street: {
						number: 6839,
						name: "Tamaki Drive",
					},
					city: "Lower Hutt",
					state: "Auckland",
					country: "New Zealand",
					postcode: 88266,
					coordinates: {
						latitude: "5.4359",
						longitude: "-29.5030",
					},
					timezone: {
						offset: "+5:30",
						description: "Bombay, Calcutta, Madras, New Delhi",
					},
				},
				email: "jayden.kumar@example.com",
				login: {
					uuid: "c2d8175b-dd6a-48c7-b7e6-b14c561fa316",
					username: "purplebutterfly551",
					password: "food",
					salt: "kXruzaOH",
					md5: "26e37170034dd100abce782ebe5d137f",
					sha1: "b501de55f8673d55f61eb2c26117791556a02f34",
					sha256:
						"c4c45cfcdd94aac5fde7263db2c1eef2923d3beee25a5b3461458ec40ac5bc00",
				},
				dob: {
					date: "1962-12-28T16:57:07.547Z",
					age: 59,
				},
				registered: {
					date: "2002-08-17T20:07:20.020Z",
					age: 19,
				},
				phone: "(402)-720-6673",
				cell: "(826)-757-3665",
				id: {
					name: "",
					value: null,
				},
				picture: {
					large: "https://randomuser.me/api/portraits/men/46.jpg",
					medium: "https://randomuser.me/api/portraits/med/men/46.jpg",
					thumbnail: "https://randomuser.me/api/portraits/thumb/men/46.jpg",
				},
				nat: "NZ",
			},
			{
				gender: "female",
				name: {
					title: "Miss",
					first: "Ulrikke",
					last: "Husby",
				},
				location: {
					street: {
						number: 5969,
						name: "Nittedalgata",
					},
					city: "Rosendal",
					state: "Buskerud",
					country: "Norway",
					postcode: "0577",
					coordinates: {
						latitude: "-55.8169",
						longitude: "176.7480",
					},
					timezone: {
						offset: "-12:00",
						description: "Eniwetok, Kwajalein",
					},
				},
				email: "ulrikke.husby@example.com",
				login: {
					uuid: "14a5363b-bd78-46ba-960d-2c4560a85a18",
					username: "orangemeercat405",
					password: "thick",
					salt: "UDpg8Leh",
					md5: "fa388064ce26393190b21852236feeb5",
					sha1: "4348d2d403b0e3915116e2e342f91d647dc33586",
					sha256:
						"facf039933f456950f840a263892f5e3f247a8bb15240dbe979c8fefb546b9a4",
				},
				dob: {
					date: "1956-09-13T23:56:07.333Z",
					age: 65,
				},
				registered: {
					date: "2015-11-30T16:41:08.777Z",
					age: 6,
				},
				phone: "55716475",
				cell: "99378349",
				id: {
					name: "FN",
					value: "13095624426",
				},
				picture: {
					large: "https://randomuser.me/api/portraits/women/22.jpg",
					medium: "https://randomuser.me/api/portraits/med/women/22.jpg",
					thumbnail: "https://randomuser.me/api/portraits/thumb/women/22.jpg",
				},
				nat: "NO",
			},
		],
	};
	render() {
		return (
			<div className='container'>
				<Header />
				<Body users={this.state.users} />
			</div>
		);
	}
}

export default App;
