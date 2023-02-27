import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './MoviesList.module.css'

import icon_btn from './arrow-button.png'

export const MoviesList = () => {

    const dispatch = useDispatch();

    const {movies} = useSelector(state => state.movies);

    const [page, setPage] = useState(1)

    useEffect( ()=>{
        dispatch(moviesActions.getAll(page));
    },[dispatch, page])

    useEffect(()=>{
        if(window.pageYOffset > 0) {
            window.scrollBy(0,-2000);
        }
    },[page])

    const nextPage = () => {
        if (page <= 500){
            setPage(page + 1);
        }
    }

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    return (
        <div>

            <div className={css.movies_block}>
                {movies.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
            </div>

            <div className={css.button_block}>
                <img src={icon_btn} className={css.btn_prev} onClick={prevPage} alt={'icon_btn'} width={35}/>

                    <div style={{fontWeight: "bold"}}>
                        Page: {page}
                    </div>

                <img src={icon_btn} className={css.btn} onClick={nextPage} alt={'icon_btn'} width={35}/>
            </div>

        </div>
    );
};