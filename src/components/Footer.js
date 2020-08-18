import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Grid, Hidden } from '@material-ui/core';
import footerAdornment from '../assets/Footer Adornment.svg';
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        zIndex: 1302,
        position: 'relative',
    },
    adornment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '21em',
        },
        [theme.breakpoints.down('xs')]: {
            width: '15em',
        },
    },
    mainContainer: {
        position: 'absolute',
    },
    link: {
        color: 'white',
        fontWeight: 400,
        fontSize: '0.8rem',
        textDecoration: 'none',
    },
    gridItem: {
        margin: '3em',
    },
    icon: {
        height: '3em',
        width: '3em',
        [theme.breakpoints.down('xs')]: {
            height: '2em',
            width: '2em',
        },
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-6em',
        right: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            right: '0.6em',
        },
    },
}));

function Footer(props) {
    const classes = useStyles();
    const { setValue, setSelectedIndex } = props;

    const handleClick = (newValue) => {
        setValue(newValue);
    };

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid
                    container
                    className={classes.mainContainer}
                    justify="center"
                >
                    <Grid item className={classes.gridItem}>
                        <Grid container spacing={1} direction="column">
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => handleClick(0)}
                                component={Link}
                                to="/"
                            >
                                Home
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container spacing={1} direction="column">
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => {
                                    handleClick(1);
                                    setSelectedIndex(0);
                                }}
                                component={Link}
                                to="/services"
                            >
                                Services
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => {
                                    handleClick(1);
                                    setSelectedIndex(1);
                                }}
                                component={Link}
                                to="/customsoftware"
                            >
                                Custom Software Development
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => {
                                    handleClick(1);
                                    setSelectedIndex(2);
                                }}
                                component={Link}
                                to="/mobileapp"
                            >
                                Mobile App Development
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => {
                                    handleClick(1);
                                    setSelectedIndex(3);
                                }}
                                component={Link}
                                to="/website"
                            >
                                Website Development
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container spacing={1} direction="column">
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => handleClick(2)}
                                component={Link}
                                to="/revolution"
                            >
                                The Revolution
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => handleClick(2)}
                                component={Link}
                                to="/revolution"
                            >
                                Vision
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => handleClick(2)}
                                component={Link}
                                to="/revolution"
                            >
                                Technology
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => handleClick(2)}
                                component={Link}
                                to="/revolution"
                            >
                                Process
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container spacing={1} direction="column">
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => handleClick(3)}
                                component={Link}
                                to="/about"
                            >
                                About us
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => handleClick(3)}
                                component={Link}
                                to="/about"
                            >
                                History
                            </Grid>
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => handleClick(3)}
                                component={Link}
                                to="/about"
                            >
                                Team
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container spacing={1} direction="column">
                            <Grid
                                item
                                className={classes.link}
                                onClick={() => handleClick(4)}
                                component={Link}
                                to="/contact"
                            >
                                Contact us
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img
                alt="footer"
                src={footerAdornment}
                className={classes.adornment}
            />
            <Grid
                container
                justify="flex-end"
                spacing={2}
                className={classes.socialContainer}
            >
                <Grid
                    item
                    component={'a'}
                    href="https://www.facebook.com"
                    rel="noopener noreferer"
                    target="_blank"
                >
                    <img
                        alt="facebook"
                        src={facebook}
                        className={classes.icon}
                    />
                </Grid>
                <Grid
                    item
                    component={'a'}
                    href="https://www.twitter.com"
                    rel="noopener noreferer"
                    target="_blank"
                >
                    <img
                        alt="instagram"
                        src={instagram}
                        className={classes.icon}
                    />
                </Grid>
                <Grid
                    item
                    component={'a'}
                    href="https://www.instagram.com"
                    rel="noopener noreferer"
                    target="_blank"
                >
                    <img alt="twitter" src={twitter} className={classes.icon} />
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;
