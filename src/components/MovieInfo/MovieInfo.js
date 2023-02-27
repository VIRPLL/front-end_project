import React from 'react';

import css from './MovieInfo.module.css'
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {StarsRating} from "../StarsRating/StarsRating";

export const MovieInfo = ({movieInfo}) => {

    const {genres, title, budget, overview, release_date, runtime} = movieInfo;

    return (
        <div className={css.movies_block}>
            <div className={css.block}>
                <div className={css.poster_container}>
                    <img className={css.poster} src={`https://image.tmdb.org/t/p/w500${movieInfo.poster_path}`} width={250} alt={'Poster'}/>
                </div>

                <div className={css.inf}>

                    <div className={css.info_block}>
                        {genres.map(genre=><GenreBadge key={genre.id} genre={genre}/>)}
                    </div>

                    <div className={css.star_block}>
                        <StarsRating movie={movieInfo}/>
                    </div>

                    <div className={css.elem}>Title: {title}</div>
                    <div className={css.elem}>Release date: {release_date}</div>
                    <div className={css.elem}>Run time: {runtime}</div>
                    <div className={css.elem}>Budget: {budget}</div>
                    <div className={css.elem}>{overview}</div>

                </div>

            </div>
        </div>
    );
};