import axios from 'axios';

export const PER_PAGE = 12;

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '40910932-9fe08a71e8ac0f3a1299db850';

const api = axios.create({
  baseURL: BASE_URL,

  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: PER_PAGE,
  },
});

export const getImages = async (query, page = 1) => {
  const response = await api.get('/', {
    params: {
      q: query,
      page,
    },
  });
  return response.data;
};
