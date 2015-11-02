'use strict';

var BattleHelper = require('./battle-helper');
var bh = new BattleHelper();

bh.join('SHEBANG_NINJA');

bh.map()
	.then(data => {
		console.log(data);
	})