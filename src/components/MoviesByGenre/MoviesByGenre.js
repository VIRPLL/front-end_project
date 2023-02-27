import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {genresActions} from "../../redux/slices/genresSlice";
import css from './MovieByGenre.module.css'

export const MoviesByGenre = () => {

    const {id} = useParams();

    const dispatch = useDispatch();

    const {movieByGenre} = useSelector(({genres})=> genres);

    useEffect(()=>{
        dispatch(genresActions.getMovieByGenre(id))
    },[dispatch, id])

    return (
        <div>

            <div className={css.movies_block}>
                {movieByGenre.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
            </div>

        </div>
    );
};