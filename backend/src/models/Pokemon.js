const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    pokedex_id: Number,
    generation: Number,
    category: String,
    name: {
        fr: String,
        en: String,
        jp: String
    },
    sprites: {
        regular: String,
        shiny: String,
        gmax: String
    },
    types: [{
        name: String,
        image: String
    }],
    talents: [{
        name: String,
        tc: Boolean
    }],
    stats: {
        hp: Number,
        atk: Number,
        def: Number,
        spe_atk: Number,
        spe_def: Number,
        vit: Number
    },
    resistances: [{
        name: String,
        multiplier: Number
    }],
    evolution: {
        pre: mongoose.Schema.Types.Mixed,
        next: [{
            pokedex_id: Number,
            name: String,
            condition: String
        }],
        mega: mongoose.Schema.Types.Mixed
    },
    height: String,
    weight: String,
    egg_groups: [String],
    sexe: {
        male: Number,
        female: Number
    },
    catch_rate: Number,
    level_100: Number,
    formes: mongoose.Schema.Types.Mixed
},{ collection: 'pokedex' });

module.exports = mongoose.model('Pokemon', pokemonSchema);