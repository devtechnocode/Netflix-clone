const API_KEY="34c92400e61992d5c11f4e8ca122e3c1";

const requests={
    fetchTrending:`trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`discover/tv?api_key=${API_KEY}&with_networks=en-213`,
    fetchTopRated:`movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`discover/movie?api_key=${API_KEY}&with_genres=99`,

}

export default requests;
