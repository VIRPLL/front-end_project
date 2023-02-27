import React from 'react';
import {NavLink} from "react-router-dom";

import {Genres} from "../Genres/Genres";
import {UserInfo} from "../UserInfo/UserInfo";
import css from './Header.module.css'

import logo from './img/icon.png'
import img from './img/day-and-night.png'
import burger from './img/burger-bar.png'
import close from './img/closed.png'

export const Header = () => {

        const main = document.getElementById('main');


    const colorSwitch = () => {
        if(main.className === 'color_black'){
            main.className = 'color_white';

        } else {
            main.className = 'color_black';
        }

    }

    const sideOn = () => {
        document.getElementById('side').style.display = 'block';
    }

    const sideOff = () => {
        document.getElementById('side').style.display = 'none';
    }

    return (
        <div className={`${css.header}`} id={'header'}>

            <NavLink to={'/movies'} className={css.block}>
                <img className={css.logo} src={logo} alt={'icon'} height={40}/>
                <h2 id={'h2'}>Test Project</h2>
            </NavLink>

            <UserInfo/>


            <div className={css.btn_theme} onClick={colorSwitch}>
                <img src={img} alt={'icon_theme'} width={30}/>
            </div>

            <div className={css.burger_menu} onClick={sideOn}>
                <img src={burger} alt={'Burger_icon'} width={30}/>
            </div>

            <div id={'side'} className={`${css.side} color_black`}>
                <img onClick={sideOff} className={css.close} src={close} alt={'Close_image'} width={30}/>
                <NavLink to={'/search/:movieName'} className={css.side_element}>Search</NavLink>
                <NavLink to={'/movies'} className={css.side_element}>Movies</NavLink>
                <div className={css.side_element_genres}>
                    <Genres/>
                </div>
            </div>

        </div>
    );
};