import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {genresActions} from "../../redux/slices/genresSlice";
import {Genre} from "../Genre/Genre";
import css from './Genres.module.css'

export const Genres = () => {

    const dispatch = useDispatch();

    const {genres} = useSelector(state => state.genres)

    useEffect(()=>{
        dispatch(genresActions.getAll());
    },[dispatch])



    return (
        <div>
            <span className={css.genres}>Genres</span>
            <ul className={css.ul_block}>
                {genres.map(genre=><Genre key={genre.id} genre={genre}/>)}
            </ul>
        </div>
    );
};