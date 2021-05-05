import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <Nav />
            <Header />
            <Switch>
                <Route exact path='/' component={Portfolio} />
                <Route exact path='/aboutme' component={AboutMe} />
                <Route exact path='/contact' component={Contact} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App;