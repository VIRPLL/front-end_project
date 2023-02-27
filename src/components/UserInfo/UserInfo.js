import React from 'react';

import css from './UserInfo.module.css';

import user from "./profile.png";

export const UserInfo = () => {
    return (
        <div className={css.user_block}>
            <img src={user} alt={'user_icon'} width={30}/>
            <div className={css.user_text}>User: 21231</div>
        </div>
    );
};