import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserPage from './pages/UserPage';
import ExpensePage from './pages/ExpensePage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <div className="container">
                <h1 className="mt-5">Daily Expenses Sharing Application</h1>
                <Switch>
                    <Route path="/users" component={UserPage} />
                    <Route path="/expenses" component={ExpensePage} />
                    <Route path="/" exact>
                        <h4>Please select a management option</h4>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
