const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  prenom: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  //role: String,
  mdp: { type: String, required: true, minlength: 6 },
  num_tel: { type: String, required: true },
  adresse: { type: String, required: true },
  //isConnected: Boolean,
});
userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("mdp")) {
    user.mdp = await bcrypt.hash(user.mdp, 10);
  }
  next();
});

const User = mongoose.model("User", userSchema);
module.exports = User;
