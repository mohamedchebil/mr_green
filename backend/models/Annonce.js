const mongoose = require('mongoose');

const annonceSchema = new mongoose.Schema({
  idAnn: { type: String, required: false },
  nom: { type: String, required: true },
  description: { type: String, required: true },
  prix: { type: Number, required: true },
  numtel: { type: String, required: true },
  adresse: { type: String, required: true },
  idUser: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  image: {
    type: Object,
    default: {
      url: "",
      publicId: null,
    },
  }
});

const Annonce = mongoose.model('Annonce', annonceSchema);

module.exports = Annonce;
