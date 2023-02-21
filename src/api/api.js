import axios from 'axios';

export const fetchMovie = async (path, query, page) => {
  const response = await axios.get(`https://api.themoviedb.org/3/${path}`, {
    method: 'get',
    params: {
      api_key: 'c69fb8daa91af9db5bc79adaff004050',
      query: query,
      page: page,
    },
  });

  return response.data;
};
