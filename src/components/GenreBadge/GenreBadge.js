import React from 'react';
import {Chip} from "@mui/material";
import {NavLink} from "react-router-dom";

import css from './GenreBadge.module.css'

export const GenreBadge = ({genre}) => {
    return (
        <NavLink to={`/genre/${genre.id.toString().toLowerCase()}`} className={css.badgeBlock} >
            <Chip className={css.item} style={{backgroundColor: 'orange', padding: 10, margin: 2}} size={"small"} label={genre.name}/>
        </NavLink>
    );
};

