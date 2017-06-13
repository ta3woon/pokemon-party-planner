const mongoose = require('mongoose')

var PartySchema = new mongoose.Schema({
	name: {type: String}, // name of party 
})

module.exports = mongoose.model('Party', PartySchema);