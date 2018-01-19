import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import NoMatch from "./NoMatch";
import Home from './Home';

const App = () => (
    <div>
        <Router>
            <div className="container-fluid bg-dark" style={{maxHeight: '100px'}}>
                <span className="float-right">Testar</span>
                <br/>
                <Switch>
                    <Route path="/" component={Home}/>
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
