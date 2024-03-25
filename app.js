const express = require('express');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');

// Importation des routes des défis
const challengeRoutes = require('./routes/challengeRoutes');

// Connexion à MongoDB
const uri = "mongodb+srv://estebanvigouroux11:1234@apimongo.gef79zb.mongodb.net/";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connecté à MongoDB !");
  } catch (err) {
    console.error("Erreur de connexion à MongoDB :", err);
  }
}

// Appel de la fonction de connexion à MongoDB
connectToMongoDB();

// Configuration de l'application Express
const app = express();
app.use(express.json());

// Utilisation des routes des défis
app.use('/challenges', challengeRoutes);

// Démarrage du serveur Express
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
