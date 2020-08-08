import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import { Button, Tabs, Tab } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
// import Menu from './Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        margin: 0,
        padding: 0,
    },
    logo: {
        // maxWidth: 160,
        height: '5em',
    },
    logoContainer: {
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    tabContainer: {
        marginLeft: 'auto',
    },
    tab: {
        textTransform: 'none',
        minWidth: 10,
        marginLeft: '10px',
    },
    button: {
        borderRadius: '50px',
        marginLeft: '20px',
        marginRight: '25px',
        textTransform: 'none',
    },
}));

function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export default function NavBar(props) {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleChange = (event, value) => {
        setValue(value);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    useEffect(() => {
        switch (window.location.pathname) {
            case '/services':
                setValue(1);
                break;
            case '/revolution':
                setValue(2);
                break;
            case '/about':
                setValue(3);
                break;
            case '/contact':
                setValue(4);
                break;
            case '/signup':
                setValue(5);
                break;
            case '/login':
                setValue(6);
                break;

            default:
                setValue(0);
                break;
        }
    }, [value]);

    return (
        <div className={classes.root}>
            <ElevationScroll {...props}>
                <AppBar position="static">
                    <Toolbar disableGutters>
                        <Button
                            className={classes.logoContainer}
                            disableRipple
                            component={Link}
                            to="/"
                            onClick={() => setValue(0)}
                        >
                            <img
                                alt="arc development logo"
                                src={logo}
                                className={classes.logo}
                            />
                        </Button>
                        <Tabs
                            value={value}
                            className={classes.tabContainer}
                            onChange={handleChange}
                        >
                            <Tab
                                className={classes.tab}
                                label="Home"
                                component={Link}
                                to="/"
                            />
                            <Tab
                                aria-owns={anchorEl ? 'simple-menu' : undefined}
                                aria-haspopup={anchorEl ? 'true' : undefined}
                                className={classes.tab}
                                label="Services"
                                onMouseOver={(event) => handleClick(event)}
                            />
                            <Tab
                                className={classes.tab}
                                label="Revolution"
                                component={Link}
                                to="/revolution"
                            />
                            <Tab
                                className={classes.tab}
                                label="About Us"
                                component={Link}
                                to="/about"
                            />
                            <Tab
                                className={classes.tab}
                                label="Contact Us"
                                component={Link}
                                to="/contact"
                            />
                            <Tab
                                label="Sign up"
                                className={classes.tab}
                                component={Link}
                                to="/signup"
                            />
                            <Tab
                                label="Log in"
                                className={classes.tab}
                                component={Link}
                                to="/login"
                            />
                        </Tabs>

                        <Button
                            className={classes.button}
                            variant="contained"
                            color="secondary"
                            component={Link}
                            to="/estimate"
                        >
                            Free Estimate
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{ onMouseLeave: handleClose }}
                        >
                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                    setValue(1);
                                }}
                                component={Link}
                                to="/services"
                            >
                                Services
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                    setValue(1);
                                }}
                                component={Link}
                                to="/customsoftware"
                            >
                                Custom Software Development
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                    setValue(1);
                                }}
                                component={Link}
                                to="/mobileapp"
                            >
                                Mobile App Development
                            </MenuItem>
                            <MenuItem
                                onClick={() => {
                                    handleClose();
                                    setValue(1);
                                }}
                                component={Link}
                                to="/website"
                            >
                                Website Development
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </div>
    );
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
};
