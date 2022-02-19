import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'normalize.css';
import Login from '../components/Login/Login';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route render={() => <div>Puuumba</div>} />
            </Switch>
        </BrowserRouter>
    );
};

function mapStateToProps(state) {
    const { userState } = state;
    return { username: userState.username };
}

export default connect(mapStateToProps)(AppRouter);
