import axios from 'axios';

/** base url to make request to the themoviedatabase */

const instance = axios.create({
	baseURL: 'http://localhost:4000/api/movies'
});

// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar

export default instance;
