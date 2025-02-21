const Pokemon = require('../models/Pokemon');

exports.getAllPokemons = async (req, res) => {
    try {
        const pokemons = await Pokemon.find().sort('pokedex_id');
        res.json(pokemons);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPokemonById = async (req, res) => {
    try {
        const pokemon = await Pokemon.findOne({ pokedex_id: req.params.id });
        if (!pokemon) {
            return res.status(404).json({ message: 'Pokemon non trouvé' });
        }
        res.json(pokemon);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createPokemon = async (req, res) => {
    const pokemon = new Pokemon(req.body);
    try {
        const newPokemon = await pokemon.save();
        res.status(201).json(newPokemon);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};