import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../Pages/MainPage/MainPage';
import SplashPage from '../Pages/SplashPage/SplashPage';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                {/* <Route path='/' element={<MainPage/>}></Route> */}
            </Routes>
        </BrowserRouter>
    );
};


export default AppRouter;