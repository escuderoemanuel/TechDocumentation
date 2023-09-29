<!-- ? Create React App  -->

1. Create file '.env' in root folder
2. Declare the variables (example):

- REACT_API_URL: https://api.themoviedb.org/3
- REACT_API_KEY: 6d5c35b14568j5613345bf5a4c07f2e1d
- ETC...

3. Create file 'config.js' in folder 'constants'

- Export const API_URL = process.env.REACT_APP_API_URL;
- Export const API_KEY = process.env.REACT_APP_API_KEY;
- ETC...

4. Import the Enviroment Variables in other files

- import { API_URL, API_KEY, IMAGE_PATH } from '../../constants/config';

5. Use the Enviroment Variables in our app (example)

- /_ Fetch to List Movie _/

  ***

  const fetchMovies = async (searchKey) => {
  const type = searchKey ? 'search' : 'discover';
  try {
  const {
  data: { results },
  } = await axios.get(`${API_URL}/${type}/movie`, {
  params: {
  api_key: API_KEY,
  query: searchKey,
  },
  });
  setMovies(results);
  setMovie(results[0]);

      if (results.length) {
        await fetchMovie(results[0].id);
      }

  } catch (error) {
  console.error('Error fetching movies: ', error);
  }
  };

  ***

<!-- ? Vite App -->

1. Create file '.env' in root folder
2. Declare the variables (example):

- VITE_API_URL: https://api.themoviedb.org/3
- VITE_API_KEY: 6d5c35b14568j5613345bf5a4c07f2e1d
- ETC...

3. Create file 'config.js' in folder 'constants'

- Export const API_URL = import.meta.env.VITE_API_URL;
- Export const API_KEY = import.meta.env.VITE_API_KEY;
- ETC...

4. Import the Enviroment Variables in other files

- import { API_URL, API_KEY, IMAGE_PATH } from '../../constants/config';

5. Use the Enviroment Variables in our app (example)

- /_ Fetch to List Movie _/

  ***

  const fetchMovies = async (searchKey) => {
  const type = searchKey ? 'search' : 'discover';
  try {
  const {
  data: { results },
  } = await axios.get(`${API_URL}/${type}/movie`, {
  params: {
  api_key: API_KEY,
  query: searchKey,
  },
  });
  setMovies(results);
  setMovie(results[0]);

      if (results.length) {
        await fetchMovie(results[0].id);
      }

  } catch (error) {
  console.error('Error fetching movies: ', error);
  }
  };

  ***

<!-- ? Without VITE => Same way as REACT APP -->
