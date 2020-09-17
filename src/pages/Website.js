import React from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Grid,
    Hidden,
    Typography,
    useMediaQuery,
    IconButton,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import analytics from '../assets/analytics.svg';
import seo from '../assets/seo.svg';
import outreach from '../assets/outreach.svg';
import ecommerce from '../assets/ecommerce.svg';
import CallToAction from '../components/CallToAction';

const useStyles = makeStyles((theme) => ({
    button: {
        textTransform: 'none',
        borderRadius: '50px',
        marginRight: 10,
        marginBottom: 10,
    },

    itemContainer: {
        marginTop: '5em',
        marginBottom: '5em',
        [theme.breakpoints.down('sm')]: {
            padding: 16,
            marginTop: '3em',
            marginBottom: '3em',
        },
    },
    specialText: {
        fontFamily: 'Pacifico',
        color: theme.palette.secondary.main,
    },
    imageContainer: {
        marginRight: '2em',
        [theme.breakpoints.down('xs')]: {
            marginRight: 0,
        },
    },
}));

function Services(props) {
    const { setValue, setSelectedIndex } = props;
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <React.Fragment>
            <Container>
                <Grid
                    container
                    direction="column"
                    style={{
                        marginTop: '0.5em',
                    }}
                >
                    <Grid item container justify="center" spacing={4}>
                        <Hidden smDown>
                            <Grid item>
                                <IconButton
                                    color="primary"
                                    component={Link}
                                    to="/mobileapp"
                                    onClick={() => setSelectedIndex(1)}
                                >
                                    <ArrowBackIosIcon />
                                </IconButton>
                            </Grid>
                        </Hidden>
                        <Grid
                            item
                            style={{ width: '50em', marginBottom: '10em' }}
                        >
                            <Typography
                                variant="h4"
                                color="primary"
                                gutterBottom
                            >
                                Website Development
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                color="textSecondary"
                            >
                                Having a website is a necessity in today's
                                business world. They give you one central public
                                location to let people know who you are, what
                                you do, and why you're the best at it.
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                color="textSecondary"
                            >
                                From simply having yours posted to having a full
                                fledged online store, making yourself as
                                accessible as possible to users online drive
                                growth and enables you to reach customers.
                            </Typography>
                        </Grid>
                        <Hidden smDown>
                            <Grid item>
                                <IconButton
                                    color="primary"
                                    component={Link}
                                    to="/services"
                                    onClick={() => setSelectedIndex(3)}
                                >
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            </Grid>
                        </Hidden>
                    </Grid>
                    <Grid item>
                        {/*------Analytics Block--------*/}
                        <Grid
                            container
                            justify={matchesSM ? 'center' : 'flex-start'}
                            className={classes.itemContainer}
                            direction={matchesSM ? 'column' : 'row'}
                            alignItems="center"
                        >
                            <Grid item className={classes.imageContainer}>
                                <img
                                    src={analytics}
                                    alt="graph with magnifying glass revealing 1s and 0s"
                                    width={matchesSM ? 250 : undefined}
                                />
                            </Grid>
                            <Grid
                                item
                                style={{
                                    width: matchesSM ? undefined : '35em',
                                    textAlign: matchesSM ? 'center' : undefined,
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    color="primary"
                                    gutterBottom
                                >
                                    Analytics
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Knowledge is power, and data is 21st century
                                    gold. Analyzing this data can reveal hidden
                                    patterns and trends in your business,
                                    empowering you to make smarter decisions
                                    with measurable effects.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {/*------Ecommerce Block--------*/}
                        <Grid
                            container
                            justify={matchesSM ? 'center' : 'flex-end'}
                            className={classes.itemContainer}
                            direction={matchesSM ? 'column' : 'row'}
                            alignItems="center"
                        >
                            <Grid item className={classes.imageContainer}>
                                <img
                                    src={ecommerce}
                                    alt="world outline made of dollar sign"
                                />
                            </Grid>
                            <Grid
                                item
                                style={{
                                    width: matchesSM ? undefined : '35em',
                                    textAlign: matchesSM ? 'center' : undefined,
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    color="primary"
                                    gutterBottom
                                >
                                    E-commerce
                                </Typography>

                                <Typography variant="body1" paragraph>
                                    It's not secret that people like to shop
                                    online
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    In 2019 over $2.3 trillion was spent in
                                    e-commerce and it's your time to slice that
                                    pie.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {/*------Outreach Block--------*/}
                        <Grid
                            container
                            justify={matchesSM ? 'center' : 'flex-start'}
                            className={classes.itemContainer}
                            direction={matchesSM ? 'column' : 'row'}
                            alignItems="center"
                        >
                            <Grid item className={classes.imageContainer}>
                                <img alt="megaphone" src={outreach} />
                            </Grid>
                            <Grid
                                item
                                style={{
                                    width: matchesSM ? undefined : '35em',
                                    textAlign: matchesSM ? 'center' : undefined,
                                }}
                            >
                                <Typography variant="h5" color="primary">
                                    Outreach
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Reach More. Discover More. Sell More
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    Optimized for search engines, built for
                                    speed
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        {/*------SEO Block--------*/}
                        <Grid
                            container
                            justify={matchesSM ? 'center' : 'flex-end'}
                            className={classes.itemContainer}
                            direction={matchesSM ? 'column' : 'row'}
                            alignItems="center"
                        >
                            <Grid item className={classes.imageContainer}>
                                <img
                                    alt="website standing on winner's podium"
                                    src={seo}
                                />
                            </Grid>
                            <Grid
                                item
                                style={{
                                    width: matchesSM ? undefined : '35em',
                                    textAlign: matchesSM ? 'center' : undefined,
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    color="primary"
                                    gutterBottom
                                >
                                    Search Engine Optimization (SEO)
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    How often have you been to the second page
                                    of Google search results?
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    If you like us probably never.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <CallToAction setValue={setValue} />
        </React.Fragment>
    );
}

export default Services;
