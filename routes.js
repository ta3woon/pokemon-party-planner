const router = require('express').Router()
const config = require('./config')
const Pageres = require('pageres')
// var Party = require('./app/models/party.js')

router.get('/party', function(req, res){

	Party.find(function(err, parties) {
		if (err) {
			res.send(err)
		}
		res.json(parties);
	})
})

router.post('/parties', function(req, res){
	var name = req.body.name;

	Party.create({
		name: req.body.name
	}), function(err, parties) {
		if (err) {
			res.send(err)
		}
		res.json(parties);
	};


});
// router.get('')
// router.post('')

module.exports = router;