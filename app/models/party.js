const mongoose = require('mongoose')

var PartySchema = new mongoose.Schema({
	name: {type: String},
	id: {type: integer},
	base_experience: {}
	 // name of party 
	}
})

module.exports = mongoose.model('Party', PartySchema);