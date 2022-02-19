import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import 'normalize.css';
import Login from '../components/Login/Login';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact={true} element={<Login />} />
                <Route path="*" element={<div>Puuumba</div>} />
            </Routes>
        </BrowserRouter>
    );
};

function mapStateToProps(state) {
    const { userState } = state;
    return { username: userState.username };
}

export default connect(mapStateToProps)(AppRouter);
