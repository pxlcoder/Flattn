var dbuser = require('./dbuser');

module.exports = {
	url: 'mongodb://' + dbuser.username + ':' + dbuser.password + dbuser.baseURL
}