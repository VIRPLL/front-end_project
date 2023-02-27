import {axiosService} from "./axiosService";
import {urls} from "../config";

export const moviesService = {
    getAll:(page)=>axiosService.get(`${urls.movie}${page}`),
    getById:(id)=>axiosService.get(`${urls.movieById}${id}`),
    getGenres:()=>axiosService.get(urls.genres),
    getMovieByGenre:(id,page= 1)=>axiosService.get(`${urls.MovieByGenre}${id}`,{params:{page:page}}),
    search:(query, page = 1)=>axiosService.get(`${urls.search}`, {params:{query:query, page:page}})
}

