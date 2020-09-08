import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// pages
import LandingPage from './LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';
import MobileApp from './MobileApp';
import Website from './Website';
import Revolution from './Revolution';
import About from './About';
import Contact from './Contact';
import Estimate from './Estimate';
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
                    <Route
                        exact
                        path="/"
                        render={(props) => (
                            <LandingPage
                                {...props}
                                setValue={setValue}
                                setSelectedIndex={setSelectedIndex}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/services"
                        render={(props) => (
                            <Services
                                {...props}
                                setValue={setValue}
                                setSelectedIndex={setSelectedIndex}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/customsoftware"
                        render={(props) => (
                            <CustomSoftware
                                {...props}
                                setSelectedIndex={setSelectedIndex}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/mobileapp"
                        render={(props) => (
                            <MobileApp
                                {...props}
                                setSelectedIndex={setSelectedIndex}
                            />
                        )}
                    />

                    <Route
                        exact
                        path="/website"
                        render={(props) => (
                            <Website
                                {...props}
                                setSelectedIndex={setSelectedIndex}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/revolution"
                        render={(props) => <Revolution {...props} />}
                    />

                    <Route
                        exact
                        path="/about"
                        render={(props) => <About {...props} />}
                    />

                    <Route
                        exact
                        path="/contact"
                        render={(props) => <Contact {...props} />}
                    />
                    <Route
                        exact
                        path="/estimate"
                        render={(props) => <Estimate {...props} />}
                    />
                    {/* <Route path="/signup" component={SignUp} /> */}
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
