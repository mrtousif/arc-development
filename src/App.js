import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Container } from '@material-ui/core';
// import logo from './logo.svg';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// pages
import Home from './containers/Home';
// import Login from './containers/Login';
// import SignUp from './containers/SignUp';
// import tour5 from './tour5';

function App() {
    const [value, setValue] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(1);

    return (
        <React.Fragment>
            <Router>
                <NavBar
                    value={value}
                    setValue={setValue}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                />
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} /> */}
                </Switch>
                <Footer
                    setValue={setValue}
                    setSelectedIndex={setSelectedIndex}
                />
            </Router>
        </React.Fragment>
    );
}

export default App;
