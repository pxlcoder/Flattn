var mongoose = require('mongoose');
var shortid = require('shortid');

module.exports = mongoose.model('Link', {
	url: String,
	id: {type: String, unique: true, default: shortid.generate}
	created_date: {type: Date, default: Date.now},
	views: {type: Number, default: 0}
});