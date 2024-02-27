const { Router } = require("express");
const router = Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//86400 : validité d'un jour en seconde
const createToken = (id) => {
  return jwt.sign({ id }, "welcome to mr green", {
    expiresIn: 86400,
  });
};

router.post("/signup", async (req, res) => {
  const { nom, prenom, email, mdp, num_tel, adresse } = req.body;

  try {
    const UserExist = await User.findOne({ email });
    if (UserExist) {
    }
    const user = await User.create({
      nom,
      prenom,
      email,
      mdp,
      num_tel,
      adresse,
    });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
});

router.post("/login", async (req, res) => {
  const { email, mdp } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User non trouvé." });
    }
    const isMdpValid = await bcrypt.compare(mdp, user.mdp);
    if (!isMdpValid) {
      return res.status(400).json({ message: "Mdp incorrect" });
    }
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true });
    res.status(200).json({ message: "connexion réussie." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "error" });
  }
});

module.exports = router;
