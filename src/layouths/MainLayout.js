import React from 'react';
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <div id={'main'} className={'color_black'}>
            <Outlet/>
        </div>
    );
};