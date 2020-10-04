import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

// pages
import LandingPage from './pages/LandingPage';
import Services from './pages/Services';
import CustomSoftware from './pages/CustomSoftware';
import MobileApp from './pages/MobileApp';
import Website from './pages/Website';
import Revolution from './pages/Revolution';
import About from './pages/About';
import Contact from './pages/Contact';
import Estimate from './pages/Estimate';
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
                                setValue={setValue}
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
                                setValue={setValue}
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
                                setValue={setValue}
                                setSelectedIndex={setSelectedIndex}
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/revolution"
                        render={(props) => (
                            <Revolution {...props} setValue={setValue} />
                        )}
                    />

                    <Route
                        exact
                        path="/about"
                        render={(props) => (
                            <About {...props} setValue={setValue} />
                        )}
                    />

                    <Route
                        exact
                        path="/contact"
                        render={(props) => (
                            <Contact {...props} setValue={setValue} />
                        )}
                    />
                    <Route
                        exact
                        path="/estimate"
                        render={(props) => <Estimate {...props} />}
                    />
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
