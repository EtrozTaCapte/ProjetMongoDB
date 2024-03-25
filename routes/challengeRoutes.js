const express = require('express');
const router = express.Router();
const challengeController = require('../controllers/challengeController');

// Route pour récupérer tous les défis
router.get('/', challengeController.getChallenges);

// Route pour créer un nouveau défi
router.post('/', challengeController.createChallenge);
// Ajoutez les routes pour la mise à jour et la suppression des défis

module.exports = router;
