import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Genre.module.css'

export const Genre = ({genre}) => {

    const {id, name} = genre;

    return (
        <li className={css.li_element}>
            <NavLink className={css.li_element} to={`/genre/${id.toString().toLowerCase()}`}>
                {name}
            </NavLink>
        </li>
    );
};