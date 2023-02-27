import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReducer, genresReducer} from "./slices";

const rootReducer = combineReducers({
    movies: moviesReducer,
    genres: genresReducer
});

const setupStore= () => configureStore({
    reducer: rootReducer
});

export {
    setupStore
}


