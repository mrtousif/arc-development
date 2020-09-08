import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import customSoftwareIcon from '../assets/Custom Software Icon.svg';
import mobileIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';

const useStyles = makeStyles((theme) => ({
    button: {
        textTransform: 'none',
        borderRadius: '50px',
        marginRight: 10,
        marginBottom: 10,
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    serviceContainer: {
        marginTop: '5em',
        marginBottom: '5em',
        [theme.breakpoints.down('sm')]: {
            padding: 16,
            marginTop: '2em',
            marginBottom: '3em',
        },
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.secondary.main,
    },
}));

function Services(props) {
    const { setValue, setSelectedIndex } = props;
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        // <Container>
        <Grid container direction="column">
            <Grid
                item
                style={{
                    marginLeft: matchesSM ? 0 : '5em',
                    marginTop: matchesSM ? '1em' : '2em',
                }}
            >
                <Typography
                    variant="h4"
                    color="primary"
                    gutterBottom
                    align={matchesSM ? 'center' : undefined}
                >
                    Services Title
                </Typography>
            </Grid>
            <Grid item>
                {/*------Mobile App Block--------*/}
                <Grid
                    container
                    justify={matchesSM ? 'center' : 'flex-end'}
                    className={classes.serviceContainer}
                    direction={matchesSM ? 'column' : 'row'}
                    alignItems={matchesSM ? 'center' : undefined}
                >
                    <Grid
                        item
                        style={{
                            width: matchesSM ? undefined : '35em',
                            textAlign: matchesSM ? 'center' : undefined,
                        }}
                    >
                        <Typography
                            variant="h5"
                            // align="center"
                            color="primary"
                        >
                            Android/iOS App Development
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Extend functionality. Extend Access. Increase
                            Engagement.
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Integrate your web experience or create standalone
                            app {matchesSM ? null : <br />} with either mobile
                            platform
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                            component={Link}
                            to="/mobileapp"
                            onClick={() => {
                                setValue(1);
                                setSelectedIndex(2);
                            }}
                        >
                            Learn More
                            <ArrowForwardIosIcon fontSize="inherit" />
                        </Button>
                    </Grid>
                    <Grid
                        item
                        className={classes.icon}
                        style={{ marginRight: matchesSM ? 0 : '5em' }}
                    >
                        <img alt="mobile app" src={mobileIcon} width="250" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {/*------Custom Software Block--------*/}
                <Grid
                    container
                    justify={matchesSM ? 'center' : undefined}
                    className={classes.serviceContainer}
                    direction={matchesSM ? 'column' : 'row'}
                    alignItems={matchesSM ? 'center' : undefined}
                >
                    <Grid
                        item
                        style={{
                            marginLeft: matchesSM ? 0 : '5em',
                            textAlign: matchesSM ? 'center' : undefined,
                        }}
                    >
                        <Typography
                            variant="h5"
                            // align="center"
                            color="primary"
                        >
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Save Energy. Save Time. Save Money
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Complete digital solution from investigation to
                            <span className={classes.specialText}>
                                {' '}
                                celebration
                            </span>
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                            component={Link}
                            to="/customsoftware"
                            onClick={() => {
                                setValue(1);
                                setSelectedIndex(1);
                            }}
                        >
                            Learn More
                            <ArrowForwardIosIcon fontSize="inherit" />
                        </Button>
                    </Grid>
                    <Grid item className={classes.icon}>
                        <img alt="custom software" src={customSoftwareIcon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                {/*------Website Block--------*/}
                <Grid
                    container
                    justify={matchesSM ? 'center' : 'flex-end'}
                    className={classes.serviceContainer}
                    direction={matchesSM ? 'column' : 'row'}
                    alignItems={matchesSM ? 'center' : undefined}
                >
                    <Grid
                        item
                        style={{
                            width: matchesSM ? undefined : '35em',
                            textAlign: matchesSM ? 'center' : undefined,
                        }}
                    >
                        <Typography
                            variant="h5"
                            // align="center"
                            color="primary"
                        >
                            Website Development
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom>
                            Reach More. Discover More. Sell More
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Optimized for search engines, built for speed
                        </Typography>
                        <Button
                            variant="outlined"
                            color="primary"
                            className={classes.button}
                            component={Link}
                            to="/website"
                            onClick={() => {
                                setValue(1);
                                setSelectedIndex(3);
                            }}
                        >
                            Learn More
                            <ArrowForwardIosIcon fontSize="inherit" />
                        </Button>
                    </Grid>
                    <Grid
                        item
                        className={classes.icon}
                        style={{ marginRight: matchesSM ? 0 : '5em' }}
                    >
                        <img alt="website" src={websiteIcon} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        // </Container>
    );
}

export default Services;
