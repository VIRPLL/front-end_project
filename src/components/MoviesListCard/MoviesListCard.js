import React from 'react';
import {NavLink} from "react-router-dom";

import {StarsRating} from "../StarsRating/StarsRating";

import css from './MoviesListCard.module.css'


export const MoviesListCard = ({movie}) => {

    const {title, poster_path, release_date, vote_count, id} = movie

    return (
        <NavLink to={`/movies/${id.toString()}`} className={css.card_container}>

                <div className={css.poster_container}>
                    <img className={css.poster} src={`https://image.tmdb.org/t/p/w500${poster_path}`} width={200} alt={'Poster'}/>
                </div>

            <div>


                <div className={css.ratings_block}>
                    <span className={css.pos}>Ratings:</span>
                    <span className={css.voted}>{vote_count} people voted</span>
                    <StarsRating movie={movie}/>
                </div>

                <div className={css.img_text_block}>
                    <div>{release_date}</div>
                </div>

                <div className={css.movie_title}>
                    {title}
                </div>

            </div>
        </NavLink>
    );
};