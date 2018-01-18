import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import NoMatch from "./NoMatch";
import HomeContainer from '../container/HomeContainer';

const App = () => (
    <div>
        <Router>
            <div>
                <div>{/*header*/}</div>
                <Switch>
                    <Route path="/" component={HomeContainer}/>
                    <Route component={NoMatch}/>
                </Switch>
                <div>
                    {/*footer*/}
                </div>
            </div>
        </Router>
    </div>
);

export default App
