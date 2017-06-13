const router = require('express').Router()
const config = require('./config')
const Pageres = require('pageres')
// var Party = require('./app/models/party.js')

router.get('/create', function(req, res){
	Party.find(function(err, parties) {
		if (err) {
			res.send(err)
		}
		res.json(view);
	})
})

router.post('/create', function(req, res){
	var name = req.body.name;
	Party.create({
		name: req.body.name
	}), function(err, parties) {
		if (err) {
			res.send(err)
		}
		res.json(create);
	};
});
// router.get('')
// router.post('')

module.exports = router;