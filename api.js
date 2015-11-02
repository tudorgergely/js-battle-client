'use strict';

var fetch = require('node-fetch');

var token = "2d8ba1538694d57a",
	serverUrl = "http://172.24.30.22:8080";

class Api {
	get(path) {
		return fetch(serverUrl + path, {
			method: 'GET',
			headers: {
				Authorization: 'Token ' + token
			}
		});
	};

	post(path, object) {
		return fetch(serverUrl + path, { 
			method: 'POST', 
			body: JSON.stringify(object),
			headers: {
				Authorization: 'Token ' + token
			}
		});
	};
}

module.exports = Api;