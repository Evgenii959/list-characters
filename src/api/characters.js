import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api/character';

export const fetchCharacters = (params = {}) => {
  return axios.get(API_URL, { params });
};

export const fetchCharacterById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};
