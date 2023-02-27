import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from "../../services";

const initialState = {
    movies: [],
    errors:null,
    loading:null,
    selectedMovie:null,
    page: 1,
    searchMovies: [],
}


const getAll = createAsyncThunk(
    'moviesSlice/getAll',
    async (page, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page)
            return data.results
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getById = createAsyncThunk(
    'moviesSlice/getById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getById(id)
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const search = createAsyncThunk(
    'moviesSlice/search',
    async ( {query,page}, thunkAPI) => {
        try {
            const {data}= await moviesService.search(query, page);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
);

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setSelectedMovie:(state, action)=>{
            state.selectedMovie = action.payload
        },
        setPage:(state, action)=>{
            state.page = action.payload
        }
    },
    extraReducers:builder =>
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                state.movies = action.payload
            })
            .addCase(getById.fulfilled, (state, action)=>{
                state.selectedMovie = action.payload
            })
            .addCase(search.fulfilled, (state, action) => {
                state.searchMovies = action.payload
            })

});


const {reducer:moviesReducer, actions:{setSelectedMovie, setPage}} = moviesSlice;


const moviesActions = {
    getAll,
    getById,
    setSelectedMovie,
    setPage,
    search
}

export {
    moviesReducer,
    moviesActions
}