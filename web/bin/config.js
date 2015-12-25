var path = require('path');

module.exports = {
	mode: 'dev',
	port:3003,
	
	dev: {
		tpl: {
			root: path.join(__dirname, '../view'),
			layout: false,
			viewExt: 'html',
			cache: false,
			debug: true

		},
		resourceServer:'',
		jsServer:'http://172.16.43.45:3001/',
		imgServer:'http://172.16.43.45:3001/'
	},
	dist: {
		tpl: {
			root: path.join(__dirname, '../view'),
			layout: false,
			viewExt: 'html',
			cache: true,
			debug: false
		},
		resourceServer:'http://localhost:3001/',
		jsServer:'http://localhost:3001/',
		imgServer:'/'
	}
}