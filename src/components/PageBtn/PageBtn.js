import React, {useEffect} from 'react';

import css from './PageBtn.module.css'

import icon_btn from "../MoviesList/arrow-button.png";

export const PageBtn = ({query, setQuery, total_pages}) => {

    useEffect(()=>{
        if(window.pageYOffset > 0) {
            window.scrollBy(0,-2000);
        }
    },[query])

    return (
        <div className={css.button_block}>
            <img src={icon_btn} disabled={+query.get('page') - 1 === 0}
                 onClick={() => setQuery(query => ({page: +query.get('page') - 1}))} className={css.btn_prev}
                 alt={'icon_btn'} width={35}/>

            <div style={{
                fontWeight: "bold"
            }}>
                {query}
            </div>

            <img src={icon_btn} disabled={+query.get('page')  === total_pages}
                 onClick={() => setQuery(query => ({page: +query.get('page') + 1}))} className={css.btn}
                 alt={'icon_btn'} width={35}/>
        </div>
    );
};