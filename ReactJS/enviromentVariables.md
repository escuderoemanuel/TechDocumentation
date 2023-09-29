<!-- ? Create React App  -->

1. Create file '.env' in root folder
2. Declare the variables (example):

- REACT_API_URL: https://api.themoviedb.org/3
- REACT_API_KEY: 6d5c35b14568j5613345bf5a4c07f2e1d
- ETC...

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

<!-- ? Without -->

1. Create file '.env'
