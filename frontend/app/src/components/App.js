import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoMatch from "./NoMatch";
import Home from './Home';
import Navbar from './Navbar';
import CounterApp from "./CounterApp";
import TweetApp from "./TweetApp";
import TodoApp from "./TodoApp";
import BuyHouseCalculatorApp from "./BuyHouseCalculatorApp";

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
                    <Route path="/buyhousecalculator" component={BuyHouseCalculatorApp}/>
                    <Route component={NoMatch}/>
                </Switch>
                <br />
                <br />
                {/*footer*/}
                <p className="text-center text-muted">Page built with Play Framework (scala) 2.6.10, React 16.2.0, Redux 3.7.2 and Bootstrap 4</p>
            </div>
        </div>
    </Router>
);

export default App
