import Axios from './@core';
const PATH = '/movie';

const MovieApi = {
    getPopluarMovies({ params }) {
        console.log(params);
        return Axios.get(PATH + '/popular', { params });
    },
    getSeachMovies({ params }) {
        return Axios.get('/search/movie', { params });
    },
    getNowPlayingMovies({ params }) {
        return Axios.get(PATH + '/now_playing', { params });
    },
    getUpcomingMovies({ params }) {
        return Axios.get(PATH + '/upcoming', { params });
    },
    getTopRatedMovies({ params }) {
        return Axios.get(PATH + 'top_rated', { params });
    },
};

export default MovieApi;
