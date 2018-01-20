import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoMatch from "./NoMatch";
import Home from './Home';
import Navbar from './Navbar';
import TodoContainer from "../container/TodoContainer";
import CounterApp from "./CounterApp";

const App = () => (
    <Router>
        <div>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/counterapp" component={CounterApp}/>
                    <Route path="/todoapp" component={TodoContainer}/>
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
