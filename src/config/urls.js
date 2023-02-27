const baseURL = `https://api.themoviedb.org/3`;


const urls = {
    movie: 'discover/movie?page=',
    movieById: '/movie/',
    genres: '/genre/movie/list',
    search: 'search/movie',
    MovieByGenre: 'discover/movie?with_genres='
}


export {
    baseURL,
    urls
}