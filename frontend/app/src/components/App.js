import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoMatch from "./NoMatch";
import Home from './Home';
import Navbar from './Navbar';
import AppsContainer from '../container/AppsContainer';

const App = () => (
    <Router>
        <div>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/apps" component={AppsContainer}/>
                    <Route component={NoMatch}/>
                </Switch>
            </div>
            <div>
                {/*footer*/}
            </div>

        </div>
    </Router>
);

export default App
