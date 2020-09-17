import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
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
import integrationAnimation from '../animations/integrationAnimation/data.json';
import swissKnife from '../assets/swissKnife.svg';
import extendAccess from '../assets/extendAccess.svg';
import engagement from '../assets/increaseEngagement.svg';
import CallToAction from '../components/CallToAction';

const useStyles = makeStyles((theme) => ({
    arrowContainer: {
        marginTop: '0.5em',
    },
    image: {
        maxWidth: '30em',
    },
    itemContainer: {
        // maxWidth: '40em',
        marginBottom: '10em',
    },
    iconContainer: {
        // maxWidth: '30em',
        marginBottom: '2em',
    },
}));

function MobileApp(props) {
    const { setValue, setSelectedIndex } = props;
    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

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
                                    to="/customsoftware"
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
                                Android/iOS App Development
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                color="textSecondary"
                            >
                                Mobile app allows you to take your tools on the
                                go.
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                color="textSecondary"
                            >
                                Whether you want an app for your customer,
                                employee, or yourself. We can build cross
                                platform native solutions for any part of your
                                business process. This opens you up to whole new
                                world of possibilities by taking advantage of
                                phone features like the camera, GPS, push
                                notifications, and more.
                            </Typography>

                            <Typography
                                variant="body1"
                                paragraph
                                color="textSecondary"
                            >
                                Convenience. Connection.
                            </Typography>
                        </Grid>
                        <Hidden smDown>
                            <Grid item>
                                <IconButton
                                    color="primary"
                                    component={Link}
                                    to="/website"
                                    onClick={() => setSelectedIndex(3)}
                                >
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            </Grid>
                        </Hidden>
                    </Grid>

                    <Grid
                        item
                        container
                        justify="center"
                        className={classes.itemContainer}
                    >
                        <Grid item sm align={matchesXS ? 'center' : undefined}>
                            <Typography
                                variant="h5"
                                color="primary"
                                gutterBottom
                            >
                                Integration
                            </Typography>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                                paragraph
                            >
                                Our technology enables an innate interconnection
                                between web and mobile applications, putting
                                everything you need right in one convenient
                                place.
                            </Typography>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                                paragraph
                            >
                                This allows you to extend your reach, reinvent
                                interactions and develop a stronger relationship
                                with your users than ever before.
                            </Typography>
                        </Grid>
                        <Grid item style={{ padding: '2em' }}>
                            <Lottie
                                animationData={integrationAnimation}
                                style={{
                                    maxWidth: '20em',
                                }}
                            />
                        </Grid>
                        <Grid item md align={matchesXS ? 'center' : 'right'}>
                            <Typography
                                variant="h5"
                                color="primary"
                                gutterBottom
                            >
                                Simultaneous Platform Support
                            </Typography>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                                paragraph
                            >
                                Our cutting edge development process allows us
                                to create apps for android, iphone and tablets -
                                all at same time.
                            </Typography>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                                paragraph
                            >
                                This significantly reduces costs and creates a
                                more unified brand experience across all
                                devices.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item container className={classes.itemContainer}>
                        <Grid
                            item
                            container
                            md
                            direction="column"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    gutterBottom
                                >
                                    Extend Functionality
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img
                                    src={swissKnife}
                                    alt="swiss knife"
                                    style={{
                                        padding: '1em',
                                        marginBottom: '7em',
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            md
                            direction="column"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    gutterBottom
                                >
                                    Extend Access
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img
                                    src={extendAccess}
                                    alt="tear-one-off sign"
                                    style={{
                                        padding: '1em',
                                        maxWidth: matchesXS ? '23em' : '28em',
                                        marginBottom: '7em',
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            md
                            direction="column"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography
                                    variant="h6"
                                    color="primary"
                                    gutterBottom
                                >
                                    Increase Engagement
                                </Typography>
                            </Grid>
                            <Grid item>
                                <img
                                    src={engagement}
                                    alt="app with notification"
                                    style={{
                                        padding: '1em',
                                        marginBottom: '7em',
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            <CallToAction setValue={setValue} />
        </React.Fragment>
    );
}

export default MobileApp;
