import React, {useEffect} from 'react';

import {Header, MoviesList} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";

export const MoviesPage = () => {

    const dispatch = useDispatch();

    const {movies} = useSelector(state => state.movies);


    useEffect( ()=>{
        dispatch(moviesActions.getAll());
    },[dispatch])

    return (
        <div className="App">
            <Header/>
            <MoviesList movies={movies}/>
        </div>
    );
};