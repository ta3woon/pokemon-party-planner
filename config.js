var mongoose = require('mongoose');

mongoURI = 'config:set PROD_MONGODB=mongodb://pkmnmaster:pokemon@ds123722.mlab.com:23722/pkmn'

const db = mongoose.connection;
db.on('error', (err) => console.error('Mongo connection error:', err));
db.once('open', () => console.log('Mongo connection made!'));

module.exports = db;