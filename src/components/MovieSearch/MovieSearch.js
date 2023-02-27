import React from 'react';
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {SearchMovie} from "../SearchMovie/SearchMovie";
import {PageBtn} from "../PageBtn/PageBtn";

import css from "./MovieSearch.module.css";

export const MovieSearch = () => {

    const {searchMovies} = useSelector(state => state.movies);

    const [query, setQuery] = useSearchParams({page: '1'});

    const {total_pages} = searchMovies;

    return (
        <div className={css.block}>

            <SearchMovie/>

            <div className={css.movies_block}>
                {searchMovies.results && searchMovies.results.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
            </div>

            <PageBtn total_pages={total_pages} query={query} setQuery={setQuery}/>

        </div>

    );
};