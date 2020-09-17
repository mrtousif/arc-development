import React from 'react';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Lottie from 'lottie-react';
import technologyAnimation from '../animations/technologyAnimation/data.json';
import consultationIcon from '../assets/consultationIcon.svg';
import mockupIcon from '../assets/mockupIcon.svg';
import reviewIcon from '../assets/reviewIcon.svg';
import designIcon from '../assets/designIcon.svg';
import buildIcon from '../assets/buildIcon.svg';
import launchIcon from '../assets/launchIcon.svg';
import maintainIcon from '../assets/maintainIcon.svg';
import iterateIcon from '../assets/iterateIcon.svg';
import vision from '../assets/vision.svg';

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        marginTop: '5em',
        marginBottom: '5em',
        marginLeft: '2em',
        marginRight: '2em',
    },
}));

function Revolution() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Grid container>
            <Grid
                item
                xs={12}
                style={{
                    marginTop: '2rem',
                    marginLeft: '2rem',
                }}
            >
                <Typography
                    variant="h4"
                    color="primary"
                    style={{
                        fontFamily: 'Pacifico',
                    }}
                >
                    The Revolution
                </Typography>
            </Grid>
            <Grid
                item
                container
                justify="center"
                alignItems="center"
                className={classes.itemContainer}
            >
                <Grid item>
                    <img
                        src={vision}
                        alt="mountain through binoculars"
                        style={{
                            maxWidth: matchesSM ? 300 : '35em',
                            marginRight: matchesMD ? 0 : '5em',
                            marginBottom: matchesMD ? '3em' : 0,
                        }}
                    />
                </Grid>
                <Grid
                    item
                    md
                    align={matchesSM ? 'left' : 'right'}
                    style={{
                        marginLeft: matchesXS ? 0 : '2em',
                        maxWidth: '40em',
                    }}
                >
                    <Typography variant="h4" color="primary" gutterBottom>
                        Vision
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        The rise of computers and sequentially the internet, has
                        completely altered every aspect of human life. This has
                        increased our comfort, broadened our connections, and
                        reshaped how we view the world.
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        The rise of computers and sequentially the internet, has
                        completely altered every aspect of human life. This has
                        increased our comfort, broadened our connections, and
                        reshaped how we view the world.
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                justify="center"
                alignItems="center"
                className={classes.itemContainer}
            >
                <Grid item md style={{ maxWidth: '40em' }}>
                    <Typography variant="h4" color="primary" gutterBottom>
                        Technology
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        The rise of computers and sequentially the internet, has
                        completely altered every aspect of human life. This has
                        increased our comfort, broadened our connections, and
                        reshaped how we view the world.
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        The rise of computers and sequentially the internet, has
                        completely altered every aspect of human life. This has
                        increased our comfort, broadened our connections, and
                        reshaped how we view the world.
                    </Typography>
                    <Typography variant="body1" color="textSecondary" paragraph>
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                </Grid>
                <Grid item>
                    <Lottie
                        animationData={technologyAnimation}
                        style={{
                            maxWidth: matchesSM ? 300 : '35em',
                            marginLeft: matchesXS ? 0 : '2em',
                        }}
                    />
                </Grid>
            </Grid>
            <Grid item container justify="center">
                <Grid item>
                    <Typography variant="h3" color="primary" gutterBottom>
                        Process
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                item
                container
                style={{
                    backgroundColor: '#aa00ff',
                    padding: matchesSM ? '3em' : '5em',
                }}
                direction={matchesSM ? 'column' : 'row'}
            >
                <Grid
                    item
                    style={{
                        maxWidth: '25em',
                        marginRight: matchesSM ? 0 : '5em',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Consultation
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                </Grid>
                <Grid item style={{ alignSelf: 'center' }}>
                    <img
                        src={consultationIcon}
                        alt="handshake"
                        width="100%"
                        style={{
                            maxWidth: '30em',
                        }}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                style={{
                    backgroundColor: '#ef5350',
                    padding: matchesSM ? '3em' : '5em',
                }}
                direction={matchesSM ? 'column' : 'row'}
            >
                <Grid
                    item
                    style={{
                        maxWidth: '25em',
                        marginRight: matchesSM ? 0 : '5em',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Mockup
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                </Grid>
                <Grid item style={{ alignSelf: 'center' }}>
                    <img
                        src={mockupIcon}
                        alt="basic website design outline"
                        width="100%"
                        style={{
                            maxWidth: '30em',
                        }}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                style={{
                    backgroundColor: '#2979ff',
                    padding: matchesSM ? '3em' : '5em',
                }}
                direction={matchesSM ? 'column' : 'row'}
            >
                <Grid
                    item
                    style={{
                        maxWidth: '25em',
                        marginRight: matchesSM ? 0 : '5em',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Review
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                </Grid>
                <Grid item style={{ alignSelf: 'center' }}>
                    <img
                        src={reviewIcon}
                        alt="magnifying glass"
                        width="100%"
                        style={{
                            maxWidth: '30em',
                        }}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                style={{
                    backgroundColor: '#00c853',
                    padding: matchesSM ? '3em' : '5em',
                }}
                direction={matchesSM ? 'column' : 'row'}
            >
                <Grid
                    item
                    style={{
                        maxWidth: '25em',
                        marginRight: matchesSM ? 0 : '5em',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Design
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                </Grid>
                <Grid item style={{ alignSelf: 'center' }}>
                    <img
                        src={designIcon}
                        alt="paintbrush leaving stroke of paint"
                        width="100%"
                        style={{
                            maxWidth: '30em',
                        }}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                style={{
                    backgroundColor: '#039be5',
                    padding: matchesSM ? '3em' : '5em',
                }}
                direction={matchesSM ? 'column' : 'row'}
            >
                <Grid
                    item
                    style={{
                        maxWidth: '25em',
                        marginRight: matchesSM ? 0 : '5em',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Build
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                </Grid>
                <Grid item style={{ alignSelf: 'center' }}>
                    <img
                        src={buildIcon}
                        alt="building construction site"
                        width="100%"
                        style={{
                            maxWidth: '30em',
                        }}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                style={{
                    backgroundColor: '#c2185b',
                    padding: matchesSM ? '3em' : '5em',
                }}
                direction={matchesSM ? 'column' : 'row'}
            >
                <Grid
                    item
                    style={{
                        maxWidth: '25em',
                        marginRight: matchesSM ? 0 : '5em',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Launch
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                </Grid>
                <Grid item style={{ alignSelf: 'center' }}>
                    <img
                        src={launchIcon}
                        alt="rocket"
                        width="100%"
                        style={{
                            maxWidth: '30em',
                        }}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                style={{
                    backgroundColor: '#3f51b5',
                    padding: matchesSM ? '3em' : '5em',
                }}
                direction={matchesSM ? 'column' : 'row'}
            >
                <Grid
                    item
                    style={{
                        maxWidth: '25em',
                        marginRight: matchesSM ? 0 : '5em',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Maintain
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                </Grid>
                <Grid item style={{ alignSelf: 'center' }}>
                    <img
                        src={maintainIcon}
                        alt="wrench tightening bolts"
                        width="100%"
                        style={{
                            maxWidth: '30em',
                        }}
                    />
                </Grid>
            </Grid>
            <Grid
                item
                container
                style={{
                    backgroundColor: '#0097a7',
                    padding: matchesSM ? '3em' : '5em',
                }}
                direction={matchesSM ? 'column' : 'row'}
            >
                <Grid
                    item
                    style={{
                        maxWidth: '25em',
                        marginRight: matchesSM ? 0 : '5em',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Iterate
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                    <Typography
                        variant="body1"
                        paragraph
                        style={{ color: '#fff' }}
                    >
                        What once was confined to huge rooms and teams of
                        engineers now resides in every single of our hands.
                        Harnessing our unlimited potential by using it to solve
                        problems and better lives is at heart of everything we
                        do.
                    </Typography>
                </Grid>
                <Grid item style={{ alignSelf: 'center' }}>
                    <img
                        src={iterateIcon}
                        alt="falling dominos"
                        width="100%"
                        style={{
                            maxWidth: '30em',
                        }}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Revolution;
