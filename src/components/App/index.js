import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Aux from 'react-aux';

import Home from '../Home';
import About from '../About';
import Courses from '../Courses';

import Header from './Header';
import Footer from './Footer';

const App = () => (
    <BrowserRouter>
        <Aux>
            <Header/>
            <main>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/courses" component={Courses}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
            </main>
            <Footer/>
        </Aux>
    </BrowserRouter>
);

export default App;
