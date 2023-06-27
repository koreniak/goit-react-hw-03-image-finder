import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '35861532-f4480698535ddfd2cf92b517e';

export const getPhotos = async (value) => {
  const { data } = await axios.get(`/?q=${value}&key=${API_KEY}&page=1&image_type=photo&orientation=horizontal&per_page=12`);

  return data;
};