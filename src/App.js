import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Shop } from './components/pages/Shop';
import { Miner } from './components/pages/Miner';
import { MoneyMachine } from './components/pages/MoneyMachine';

import { GeneralError } from './components/ErrorHandler';

export const App = () => {
    console.log('🎇rendering - here we go...');
    try {
        return(
            <Router>
                <div className="nav">
                    <ul>
                        <li className="nav-item">
                            <Link to="/">home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about">about</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/shop">shop</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/miner">data miner</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/atm">money machine</Link>
                        </li>
                    </ul>
                </div>

                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/shop" component={Shop} />
                    <Route exact path="/miner" component={Miner} />
                    <Route exact path="/atm" component={MoneyMachine} />
                </Switch>
            </Router>
        );
    } catch (error) {
        GeneralError(error);
    }
}