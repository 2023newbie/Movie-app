import axios from 'axios';

/** base url to make request to the themoviedatabase */

const instance = axios.create({
	baseURL: 'https://movie-server-jief.onrender.com/api/movies'
});

// instance.get('/foo-bar');
// https://api.themoviedb.org/3/foo-bar

export default instance;
