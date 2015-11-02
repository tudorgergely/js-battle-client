'use strict';

var Api = require('./api.js');

class BattleHelper {
	constructor() {
		this._api = new Api();
	}

	me() {
		return this._api.get('/me')
			.then(response => {
				return response.text();
			});
	};

	join(type) {
		return this._api.post('/join', { type })
			.then(response => {
				return response.text();
			});
	};

	map() {
		return this._api.get('/map')
			.then(response => {
				return response.text();
			});
	}

	move(direction) {
		return this._api.post('/move', { direction })
			.then(response => {
				return response.text();
			});
	}

	attack(direction) {
		return this._api.post('/move', { direction })
			.then(response => {
				return response.text();
			});
	}

	spell(spell, direction, extra) {
		this._api.post('/spell', {
			spell,
			direction,
			extra
		}).then(response => {
			return response.text();
		});
	}
}

module.exports = BattleHelper;