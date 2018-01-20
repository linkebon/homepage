import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoMatch from "./NoMatch";
import Home from './Home';
import Navbar from './Navbar';
import CounterApp from "./CounterApp";
import TweetApp from "./TweetApp";
import TodoApp from "./TodoApp";

const App = () => (
    <Router>
        <div>
            <Navbar/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/counterapp" component={CounterApp}/>
                    <Route path="/twitterapp" component={TweetApp}/>
                    <Route path="/todoapp" component={TodoApp}/>
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
