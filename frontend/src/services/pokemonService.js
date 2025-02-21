import axios from "axios";

const API_URL = 'http://localhost:3000/api';

export default {
    async getAllPokemons() {
        const response = await axios.get(`${API_URL}/pokemons`);
        return response.data;
    },

    async getPokemonById(id) {
        const response = await axios.get(`${API_URL}/pokemons/${id}`);
        return response.data;
    }
};