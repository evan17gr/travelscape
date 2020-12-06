import React from 'react';
import GlobalStyle from './gloablStyles';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Section2 from './components/Section2';
import Footer from './components/Footer';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <GlobalStyle />
                <NavBar />
                <Section />
                <Section2 />
                <Switch>
                    <Route path="/" exact component={Home} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
