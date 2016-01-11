var Link = require('./models/link')
var shortid = require('shortid');

module.exports = function(app){
	app.get('/version', function(req,res){
		res.json({'Flattn': {'version': '0.0.1'}});
	});

	app.get('/:id', function(req,res){
		Link.findOne({'id': req.params.id}, function(err,link){
			if(err){
				res.send(404);
			}else{
				if (link){
					link.views += 1;
					link.save();
					res.redirect('http://' + link.url);
				}else{
					res.send(404);
				}
			}
		});
	});

	app.post('/api/create', function(req,res){
		var link = new Link();
		link.url = req.body.url.replace('http://','').replace('https://','');
		link.id = shortid.generate().substring(0,6);

		link.save(function(err){
			if(err){
				res.send(err);
			}else{
				res.json({'message': 'Link created!', 'id': 'flattn.me/' + link.id});
			}
		});
	});

	app.get('*', function(req,res){
		res.sendfile('./public/index.html');
	});
};