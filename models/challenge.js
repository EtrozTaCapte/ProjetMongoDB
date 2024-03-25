const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // Autres champs du défi
});

module.exports = mongoose.model('Challenge', challengeSchema);
