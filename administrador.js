var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;
var adm = new Schema({
	nombre: String,
	Clave: String,
	email: String,
	Imagen: String,
	Estado: Number,
	SALT: String
});

adm.methods.setPassword = function(password) {
	console.log(password);
	//creating unique salt for a particular user 
	var salt = crypto.randomBytes(16).toString('hex');

	console.log(password);
	var claveysalt =[]

	claveysalt.push(crypto.pbkdf2Sync(password, salt,1000, 64, 'sha512').toString('hex'));
	claveysalt.push(salt);

	return claveysalt;
};

adm.methods.validPassword = function(password,clavebuena,salt) {
	console.log(this.Clave);
	console.log(password);
	console.log(clavebuena);

	var hash = crypto.pbkdf2Sync(password,salt, 1000, 64, 'sha512').toString('hex');
	return clavebuena === hash;
};

module.exports = mongoose.model('Administrador',adm);