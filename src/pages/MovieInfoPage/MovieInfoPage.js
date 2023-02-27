import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

import {Header, MovieInfo} from "../../components";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../redux";

export const MovieInfoPage = () => {

    const {id} = useParams();

    const dispatch = useDispatch();

    const {selectedMovie}  = useSelector(({movies}) => movies);


    useEffect(()=>{
        dispatch(moviesActions.getById(id))
    },[dispatch, id])

    return (
        <div id={'main'}>
            <Header/>
            {selectedMovie && <MovieInfo movieInfo={selectedMovie}/>}
        </div>
    );
};