const Challenge = require('../models/challenge');

// Récupérer tous les défis
exports.getChallenges = async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Créer un nouveau défi
exports.createChallenge = async (req, res) => {
  const challenge = new Challenge({
    title: req.body.title,
    description: req.body.description
    // Définissez d'autres champs du défi ici
  });

  try {
    const newChallenge = await challenge.save();
    res.status(201).json(newChallenge);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
// Implémentez les autres fonctions de contrôleur pour la mise à jour et la suppression des défis
