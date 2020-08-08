import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Container } from '@material-ui/core';
// import logo from './logo.svg';
import NavBar from './components/NavBar';

// pages
import Home from './containers/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
// import tour5 from './tour5';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    // componentDidMount() {
    //     fetch('http://127.0.0.1:8000/api/v1/tours')
    //         .then((res) => res.json())
    //         .then((res) => {
    //             this.setState((state) => {
    //                 return { tours: res };
    //             });
    //         })
    //         .catch((err) => console.error(err));
    // }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
