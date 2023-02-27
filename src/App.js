import {Navigate, Route, Routes} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouths";
import {MovieInfoPage, MoviesPage, SearchPage} from "./pages";
import {MovieGenrePage} from "./pages";

function App() {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'genre/:id'} element={<MovieGenrePage/>}/>
                <Route path={'movies/:id'} element={<MovieInfoPage/>}/>
                <Route path={'search/:movieName'} element={<SearchPage/>}/>
            </Route>
        </Routes>
    )
}

export default App;
