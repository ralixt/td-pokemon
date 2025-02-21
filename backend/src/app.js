const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Connexion à la base de données
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/pokemons', pokemonRoutes);

// Route pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
    res.send('API Pokemon fonctionne !');
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});

