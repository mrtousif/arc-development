import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Button,
    Tabs,
    Tab,
    Menu,
    MenuItem,
    IconButton,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    useScrollTrigger,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import logo from '../assets/logo.svg';
// import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
    logo: {
        // maxWidth: 160,
        height: '7em',
        [theme.breakpoints.down('sm')]: {
            height: '6em',
        },
        [theme.breakpoints.down('xs')]: {
            height: '5em',
        },
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
    estimate: {
        borderRadius: '50px',
        marginLeft: '20px',
        marginRight: '25px',
        textTransform: 'none',
        fontFamily: 'Pacifico',
    },
    menu: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
    },
    menuItem: {
        fontSize: '0.88rem',
        opacity: 0.7,
        '&:hover': {
            opacity: 1,
        },
    },
    drawerIconContainer: {
        marginLeft: 'auto',
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    drawerIcon: {
        // fontSize: 40
        height: '40px',
        width: '40px',
        color: 'white',
    },
    drawer: {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
    },
    drawerItem: {
        opacity: 0.7,
    },
    drawerItemSelected: {
        opacity: 1,
    },
    drawerEstimate: {
        backgroundColor: theme.palette.secondary.main,
        color: 'black',
    },
    appBar: {
        zIndex: theme.zIndex.modal + 1,
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
    const { value, setValue, selectedIndex, setSelectedIndex } = props;
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [openDrawer, setOpenDrawer] = useState(false);

    const routes = [
        { label: 'Home', link: '/' },
        {
            label: 'Services',
            link: '/services',
            ariaOwns: anchorEl ? 'simple-menu' : undefined,
            ariaHaspopup: anchorEl ? 'true' : undefined,
            onMouseOver: (event) => handleClick(event),
        },
        { label: 'Revolution', link: '/revolution' },
        { label: 'About', link: '/about' },
        { label: 'Contact', link: '/contact' },
    ];

    const menuOptions = [
        { name: 'Services', link: '/services' },
        { name: 'Custom Software Development', link: '/customsoftware' },
        { name: 'Android/iOS App Development', link: '/mobileapp' },
        { name: 'Website Development', link: '/website' },
    ];

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(false);
    };

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        setOpenMenu(false);
    };

    useEffect(() => {
        switch (window.location.pathname) {
            case '/':
                if (value !== 0) setValue(0);
                break;
            case '/services':
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(0);
                }
                break;
            case '/customsoftware':
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(1);
                }
                break;
            case '/mobileapp':
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(2);
                }
                break;
            case '/website':
                if (value !== 1) {
                    setValue(1);
                    setSelectedIndex(3);
                }
                break;
            case '/revolution':
                if (value !== 2) setValue(2);
                break;
            case '/about':
                if (value !== 3) setValue(3);
                break;
            case '/contact':
                if (value !== 4) setValue(4);
                break;
            case '/estimate':
                if (value !== 5) setValue(5);
                break;

            default:
                break;
        }
    }, [value, setValue, setSelectedIndex]);

    const tabs = (
        <React.Fragment>
            <Tabs
                value={value}
                onChange={(event, value) => setValue(value)}
                className={classes.tabContainer}
            >
                {routes.map((route, i) => (
                    <Tab
                        key={`${route.label}-${i}`}
                        className={classes.tab}
                        label={route.label}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaHaspopup}
                        onMouseOver={route.onMouseOver}
                        component={Link}
                        to={route.link}
                    />
                ))}
            </Tabs>

            <Button
                className={classes.estimate}
                variant="contained"
                color="secondary"
                component={Link}
                to="/estimate"
                onClick={(value) => setValue(value)}
            >
                Free Estimate
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                MenuListProps={{ onMouseLeave: handleClose }}
                classes={{ paper: classes.menu }}
                // elevation={0}
                keepMounted
                style={{ zIndex: 1302 }}
            >
                {menuOptions.map((route, i) => (
                    <MenuItem
                        key={`${route.name}-${i}`}
                        onClick={(event) => {
                            handleMenuItemClick(event, i);
                            setValue(1);
                            handleClose();
                        }}
                        selected={i === selectedIndex && value === 1}
                        component={Link}
                        to={route.link}
                        classes={{ root: classes.menuItem }}
                    >
                        {route.name}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );

    // menu drawer
    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}
            >
                <div className={classes.logo} />
                <List disablePadding>
                    {routes.map((route, i) => (
                        <ListItem
                            key={`${route.label}-${i}`}
                            onClick={() => {
                                setOpenDrawer(false);
                                setValue(i);
                            }}
                            divider
                            button
                            component={Link}
                            to={route.link}
                            selected={value === i}
                        >
                            <ListItemText
                                className={
                                    value === i
                                        ? classes.drawerItemSelected
                                        : classes.drawerItem
                                }
                                disableTypography
                            >
                                {route.label}
                            </ListItemText>
                        </ListItem>
                    ))}

                    <ListItem
                        key="estimate"
                        onClick={() => {
                            setOpenDrawer(false);
                            setValue(5);
                        }}
                        divider
                        button
                        component={Link}
                        to="/estimate"
                        className={classes.drawerEstimate}
                        selected={value === 5}
                    >
                        <ListItemText
                            className={
                                value === 5
                                    ? classes.drawerItemSelected
                                    : classes.drawerItem
                            }
                            disableTypography
                        >
                            Estimate
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
                className={classes.drawerIconContainer}
            >
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    );

    return (
        <nav>
            <ElevationScroll {...props}>
                <AppBar position="sticky" className={classes.appBar}>
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
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </nav>
    );
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
};
