import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MainPage from './page/MainPage/MainPage';
import LoginPage from 'page/LoginPage/LoginPage';
import RegisterPage from 'page/RegisterPage/RegisterPage';
import MainLayout from 'page/MainLayout/MainLayout';
import AccountPage from 'page/AccountPage/Account';
import CalendarPage from 'page/CalendarPage/Calendar';
import StatisticsPage from 'page/StatisticsPage/Statistics';

import PrivatRoute from 'PrivateRute';

import { fetchCurrentUser } from 'redux-store/AuthOperations/AuthOperations';

export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCurrentUser())
    }, [dispatch])

    return (
        <div>
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/" element={<MainLayout />}>
                    <Route
                        path="/account"
                        element={
                            <PrivatRoute redirectTo="/login" component={<AccountPage />} />
                        }
                    />
                    <Route
                        path="/calendar"
                        element={
                            <PrivatRoute redirectTo="/login" component={<CalendarPage />} />
                        }
                    />
                    <Route
                        path="/statistics"
                        element={
                            <PrivatRoute redirectTo="/login" component={<StatisticsPage />} />
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
};
