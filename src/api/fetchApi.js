import axios from 'axios';

export const fetchMovie = async (path, query, page) => {
  const response = await axios.get(`https://api.themoviedb.org/3/${path}`, {
    method: 'get',
    params: {
      api_key: '33085035-b16638eb1fe5c5711fce4390a',
      query: query,
      page: page,
    },
  });

  return response.data;
};
