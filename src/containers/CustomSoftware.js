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
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import bulb from '../assets/bulb.svg';
import roots from '../assets/root.svg';
import documentAnimation from '../animations/documentsAnimation/data';
import scaleAnimation from '../animations/scaleAnimation/data';
import automationAnimation from '../animations/automationAnimation/data';
import uxAnimation from '../animations/uxAnimation/data';
import CallToAction from '../components/CallToAction';

const useStyles = makeStyles((theme) => ({
    arrowContainer: {
        marginTop: '0.5em',
    },

    image: {
        maxWidth: '30em',
    },
    itemContainer: {
        maxWidth: '40em',
        marginBottom: '10em',
    },
    iconContainer: {
        // maxWidth: '30em',
        marginBottom: '2em',
    },
}));

function CustomSoftware(props) {
    const { setSelectedIndex } = props;
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <React.Fragment>
            <Container>
                <Grid
                    container
                    direction="column"
                    style={{ marginTop: '0.5em' }}
                >
                    <Grid item container justify="center" spacing={4}>
                        <Hidden smDown>
                            <Grid item className={classes.arrowContainer}>
                                <IconButton
                                    color="primary"
                                    component={Link}
                                    to="/services"
                                    onClick={() => setSelectedIndex(0)}
                                >
                                    <ArrowBackIosIcon />
                                </IconButton>
                            </Grid>
                        </Hidden>
                        <Grid
                            item
                            style={{
                                maxWidth: '50em',
                            }}
                        >
                            <Typography
                                variant="h4"
                                color="primary"
                                gutterBottom
                            >
                                Custom Software Development
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                color="textSecondary"
                            >
                                Whether we're replacing old software or
                                inventing new solutions. Arc Development is here
                                to help your business tackle technology.
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                color="textSecondary"
                            >
                                Using regular commercial software leaves you
                                with a lot of stuff you don't need, without some
                                of the stuff you do need, and ultimately
                                controls the way you work. Without using any
                                software at all you risk falling behind
                                competitors and missing out on huge savings from
                                increased efficiency.
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                color="textSecondary"
                            >
                                Our custom solutions are designed from the
                                ground up with your needs, wants, and goals at
                                the core. This collaborative process produces
                                finely tuned software that's much more effective
                                at improving your workflow and reducing costs
                                than generalized options.
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                color="textSecondary"
                            >
                                We create exactly what you want, exactly how you
                                want it.
                            </Typography>
                        </Grid>
                        <Hidden smDown>
                            <Grid item className={classes.arrowContainer}>
                                <IconButton
                                    color="primary"
                                    component={Link}
                                    to="/mobileapp"
                                    onClick={() => setSelectedIndex(2)}
                                >
                                    <ArrowForwardIosIcon />
                                </IconButton>
                            </Grid>
                        </Hidden>
                    </Grid>
                    <Grid
                        item
                        container
                        direction="row"
                        style={{ marginTop: '10em', marginBottom: '10em' }}
                    >
                        <Grid
                            item
                            container
                            sm
                            direction="column"
                            alignItems="center"
                            className={classes.iconContainer}
                        >
                            <Grid item>
                                <Typography variant="h6" color="primary">
                                    Save Money
                                </Typography>
                            </Grid>
                            <Grid item className={classes.image}>
                                <img src={cash} alt="cash" />
                            </Grid>
                        </Grid>

                        <Grid
                            item
                            container
                            sm
                            direction="column"
                            alignItems="center"
                            className={classes.iconContainer}
                        >
                            <Grid item>
                                <Typography variant="h6" color="primary">
                                    Save Energy
                                </Typography>
                            </Grid>
                            <Grid item className={classes.image}>
                                <img src={bulb} alt="bulb" />
                            </Grid>
                        </Grid>

                        <Grid
                            item
                            container
                            sm
                            direction="column"
                            alignItems="center"
                            className={classes.iconContainer}
                        >
                            <Grid item>
                                <Typography variant="h6" color="primary">
                                    Save Time
                                </Typography>
                            </Grid>
                            <Grid item className={classes.image}>
                                <img src={stopwatch} alt="stopwatch" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        justify={matchesMD ? 'center' : 'space-between'}
                    >
                        <Grid
                            item
                            container
                            className={classes.itemContainer}
                            justify={matchesMD ? 'center' : undefined}
                        >
                            <Grid
                                item
                                md
                                align={matchesSM ? 'center' : undefined}
                            >
                                <Typography variant="h4" color="primary">
                                    Digital Documents and Data
                                </Typography>

                                <Typography
                                    variant="body1"
                                    paragraph
                                    color="textSecondary"
                                >
                                    Reduce Errors. Reduce Waste. Reduce Costs.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    color="textSecondary"
                                >
                                    Billions are spent annually on the
                                    purchasing, printing, distribution of paper.
                                    On top of the massive environmental impact
                                    this has, it causes harm to your bottom line
                                    as well.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    color="textSecondary"
                                >
                                    By utilizing digital forms and documents you
                                    can remove these obsolete expenses,
                                    accelerate your communication and help
                                    earth.
                                </Typography>
                            </Grid>
                            <Grid item md>
                                <Lottie
                                    animationData={documentAnimation}
                                    style={{
                                        maxHeight: 275,
                                        maxWidth: 275,
                                        minHeight: 250,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            className={classes.itemContainer}
                            justify={matchesMD ? 'center' : undefined}
                        >
                            <Grid item md>
                                <Lottie
                                    animationData={scaleAnimation}
                                    style={{ maxHeight: 260, maxWidth: 280 }}
                                />
                            </Grid>
                            <Grid
                                item
                                className={classes.itemContainer}
                                md
                                align={matchesSM ? 'center' : 'right'}
                            >
                                <Typography variant="h4" color="primary">
                                    Scale
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    color="textSecondary"
                                >
                                    Whether you are a large brand, just getting
                                    started or taking off right now our
                                    application architecture ensures pain-free
                                    growth and reliability.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            direction="column"
                            alignItems="center"
                            // style={{ marginTop: '20em', marginBottom: '20em' }}
                        >
                            <Grid item>
                                <img
                                    src={roots}
                                    alt="tree with roots extending out"
                                    height={matchesSM ? '300em' : '450em'}
                                    width={matchesSM ? '300em' : '450em'}
                                />
                            </Grid>
                            <Grid
                                item
                                className={classes.itemContainer}
                                align="center"
                            >
                                <Typography
                                    variant="h4"
                                    color="primary"
                                    gutterBottom
                                >
                                    Root-Cause Analysis
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    color="textSecondary"
                                >
                                    Many problems are merely symptoms of larger,
                                    underlying issues.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    color="textSecondary"
                                >
                                    We can help you thoroughly examine all areas
                                    of your business to develop a holistic plan
                                    for the most effective implementation of
                                    technology.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            className={classes.itemContainer}
                            // style={{ marginBottom: '10em' }}
                            justify={matchesMD ? 'center' : undefined}
                        >
                            <Grid
                                item
                                md
                                align={matchesSM ? 'center' : undefined}
                            >
                                <Typography variant="h4" color="primary">
                                    Automation
                                </Typography>

                                <Typography
                                    variant="body1"
                                    paragraph
                                    color="textSecondary"
                                >
                                    Why waste time when you don't have to?
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    color="textSecondary"
                                >
                                    We can help you identify processes with time
                                    of event based actions which can now be
                                    easily automated.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    color="textSecondary"
                                >
                                    Increasing efficiency increases profits,
                                    leaving you more time to focus on your
                                    business, not busywork.
                                </Typography>
                            </Grid>
                            <Grid item md>
                                <Lottie
                                    animationData={automationAnimation}
                                    style={{
                                        maxHeight: 290,
                                        maxWidth: 280,
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            className={classes.itemContainer}
                            justify={matchesMD ? 'center' : undefined}
                        >
                            <Grid item md>
                                <Lottie
                                    animationData={uxAnimation}
                                    style={{ maxHeight: 290, maxWidth: 140 }}
                                />
                            </Grid>
                            <Grid
                                item
                                className={classes.itemContainer}
                                md
                                align={matchesSM ? 'center' : 'right'}
                            >
                                <Typography variant="h4" color="primary">
                                    User Experience Design
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    color="textSecondary"
                                >
                                    A good design that isn't usable isn't a good
                                    design.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    color="textSecondary"
                                >
                                    So, why are so many pieces of software
                                    complicated, confusing and frustrating?
                                </Typography>
                                <Typography
                                    variant="body1"
                                    paragraph
                                    color="textSecondary"
                                >
                                    By prioritizing users and the real ways they
                                    interact with technology we're able to
                                    develop unique, personable experiences that
                                    solve problems rather than create new ones
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

            <CallToAction />
        </React.Fragment>
    );
}

export default CustomSoftware;
