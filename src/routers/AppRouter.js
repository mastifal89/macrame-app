import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginSignUpDash } from '../components/login/LoginSignUpDash';
import { DashboardRoutes } from './DashboardRoutes';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<LoginSignUpDash />} />
                <Route path="/*" element={<DashboardRoutes />}/>
            </Routes>
        </BrowserRouter>
    )
}
