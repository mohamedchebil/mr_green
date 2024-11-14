const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  idUser: { type: String, required: true },
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  mdp: { type: String, required: true },
  numtel: { type: String, required: true },
  adresse: { type: String, required: true },
  isConnected: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
