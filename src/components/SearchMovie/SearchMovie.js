import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {NavLink, useSearchParams} from "react-router-dom";

import {moviesActions} from "../../redux";

import css from './SearchMovie.module.css';

import search_img from "./search.png";


export const SearchMovie = () => {

    const {handleSubmit, register} = useForm();

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams({page: '1'});

    const movieName = localStorage.getItem("movieName");

    const search = (nameToSearch) => {
        localStorage.getItem("movieName")
        localStorage.setItem("movieName", nameToSearch.search)
        setQuery({page: '1'});
    }


    useEffect(() => {
        dispatch(moviesActions.search({query: movieName, page: query.get('page')}));
    }, [movieName, dispatch, query]);


    return (
        <form onSubmit={handleSubmit(search)} className={css.find_block}>
            <input id={'form'} className={css.input_style} type={'text'} placeholder={'Search movies'} {...register('search')}/>
            <button onClick={handleSubmit(search)} className={css.search_btn}><NavLink to={`/search/${movieName}`}><img src={search_img} alt={'search_icon'} width={25}/></NavLink></button>
        </form>
    );
};