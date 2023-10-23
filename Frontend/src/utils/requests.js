const TOKEN = '8qlOkxz4wq';

const requests = {
	fetchTrending: `/trending?token=${TOKEN}`,
	fetchNetflixOriginals: `/trending?token=${TOKEN}&page=2`,
	fetchTopRated: `/top-rate?token=${TOKEN}`,
	fetchActionMovies: `/discover?genre=28&token=${TOKEN}`,
	fetchComedyMovies: `/discover?genre=35&token=${TOKEN}`,
	fetchHorrorMovies: `/discover?genre=27&token=${TOKEN}`,
	fetchRomanceMovies: `/discover?genre=10749&token=${TOKEN}`,
	fetchDocumentaries: `/discover?genre=99&token=${TOKEN}`,
	fetchSearch: `/search?token=${TOKEN}`,
};

export default requests;
