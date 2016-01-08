module.exports = function(app){
	app.get('/version', function(req,res){
		res.json({'Kompress': {'version': '0.0.1'}});
	});
};