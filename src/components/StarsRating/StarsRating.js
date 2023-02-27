import React, {useEffect} from 'react';
import {Rate} from "antd";

import css from './StarsRating.module.css'

export const StarsRating = ({movie}) => {

    const {vote_average} = movie;

    const star = document.getElementsByTagName("svg");

    useEffect(()=> {
        for (const starElement of star) {
            starElement.setAttribute('width', '0.5em');
            starElement.setAttribute('height', '0.5em');
        }
    },[star])

    return (
        <div className={css.star_position}>
            <Rate defaultValue={vote_average} allowHalf count={10} disabled/>
        </div>
    );
};