import axios from "axios";

import {baseURL,} from "../config";

export const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzZhMDBkZjgxZWE3M2NjYjc1ZDZkM2RmNDk3YmMyNyIsInN1YiI6IjYzZWYzNWVkZWE4NGM3MDA3OWM5YTc5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.It6DlHoFqu7Y0mfqJuhuHnnMyaHNHkBkCqMPWDOik7I'
    return config
})