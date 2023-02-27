import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    genres: [],
    movieByGenre: [],
    errors: null,
    loading: null,
    selectedGenre: null
}

const getAll = createAsyncThunk(
    'genresSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await moviesService.getGenres()
            return data.genres
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const getMovieByGenre = createAsyncThunk(
    'genreSlice/getMovieByGenre',
    async (id, {page}, rejectWithValue)=>{
        try {
            const {data} = await moviesService.getMovieByGenre(id, {page});
            return data.results
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const genresSlice = createSlice({
    name: 'genresSlice',
    initialState,
    reducers:{
        getGenres:(state, action)=>{
            state.genres = action.payload
        },
        setSelectedGenre:(state, action)=>{
            state.selectedGenre = action.payload
        }
    }, extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getMovieByGenre.fulfilled,(state, action)=>{
                state.movieByGenre = action.payload
            })
    //     {
    //     [getAll.fulfilled]: (state, action)=>{
    //         state.genres = action.payload
    //     },
    //     [getMovieByGenre.fulfilled]: (state, action)=>{
    //         state.movieByGenre = action.payload
    //     }
    // }
})

const {reducer:genresReducer, actions:{getGenres, setSelectedGenre}} = genresSlice;


const genresActions = {
    getAll,
    getGenres,
    setSelectedGenre,
    getMovieByGenre
}

export {
    genresReducer,
    genresActions
}