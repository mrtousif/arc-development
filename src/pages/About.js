import React from "react";
import {
    Container,
    Grid,
    Typography,
    Avatar,
    useMediaQuery,
    // Hidden,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import history from "../assets/history.svg";
import founder from "../assets/founder.jpg";
// import yearbook from "../assets/yearbook.svg";
// import puppy from "../assets/puppy.svg";
import CallToAction from "../components/CallToAction";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        marginTop: "5em",
        marginBottom: "5em",
        // marginLeft: '2em',
        // marginRight: '2em',
    },
    avatar: {
        height: "22em",
        width: "22em",
        [theme.breakpoints.down("xs")]: {
            maxWidth: 300,
            maxHeight: 300,
        },
    },
}));

function About(props) {
    const { setValue } = props;
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    // const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <React.Fragment>
            <Container>
                <Grid container>
                    <Grid item style={{ marginTop: "2em" }}>
                        <Typography variant="h4" color="primary">
                            About us
                        </Typography>
                    </Grid>

                    <Grid item className={classes.itemContainer}>
                        <Typography
                            varinat="h6"
                            color="primary"
                            align="center"
                            style={{ fontStyle: "italic" }}
                        >
                            What once was confined to huge rooms and teams of engineers
                            now resides in every single of our hands. Harnessing our
                            unlimited potential by using it to solve problems and better
                            lives is at heart of everything we do.
                        </Typography>
                    </Grid>

                    <Grid item container className={classes.itemContainer}>
                        <Grid item md>
                            <Typography variant="h5" color="primary" gutterBottom>
                                History
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                style={{ fontWeight: 700, fontStyle: "italic" }}
                            >
                                We're new kid on the block
                            </Typography>
                            <Typography varinat="body1" paragraph>
                                What once was confined to huge rooms and teams of
                                engineers now resides in every single of our hands.
                                Harnessing our unlimited potential by using it to solve
                                problems and better lives is at heart of everything we do.
                            </Typography>
                            <Typography varinat="body1" paragraph>
                                What once was confined to huge rooms and teams of
                                engineers now resides in every single of our hands.
                                Harnessing our unlimited potential by using it to solve
                                problems and better lives is at heart of everything we do.
                            </Typography>
                            <Typography varinat="body1" paragraph>
                                What once was confined to huge rooms and teams of
                                engineers now resides in every single of our hands.
                                Harnessing our unlimited potential by using it to solve
                                problems and better lives is at heart of everything we do.
                            </Typography>
                            <Typography varinat="body1" paragraph>
                                What once was confined to huge rooms and teams of
                                engineers now resides in every single of our hands.
                                Harnessing our unlimited potential by using it to solve
                                problems and better lives is at heart of everything we do.
                            </Typography>
                        </Grid>
                        <Grid item container justify="center" md>
                            <img
                                src={history}
                                alt="quill pen sitting on top of book"
                                style={{
                                    maxWidth: matchesSM ? 300 : "30em",
                                    maxHeight: "22em",
                                }}
                            />
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        justify="center"
                        direction="column"
                        alignItems="center"
                        className={classes.itemContainer}
                    >
                        <Grid item align="center">
                            <Typography variant="h5" color="primary" gutterBottom>
                                Team
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Tousif Islam, Founder
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Avatar
                                src={founder}
                                alt="Tousif Islam"
                                className={classes.avatar}
                            />
                        </Grid>
                    </Grid>

                    {/* <Grid
                        item
                        container
                        // direction={matchesSM ? 'column' : 'row'}
                        justify={matchesMD ? 'center' : undefined}
                        style={{ marginBottom: '5em' }}
                    >
                        <Hidden lgUp>
                            <Grid
                                item
                                lg
                                style={{ maxWidth: '45em', padding: '1.25em' }}
                            >
                                <Typography
                                    varinat="body1"
                                    color="textSecondary"
                                    paragraph
                                >
                                    What once was confined to huge rooms and
                                    teams of engineers now resides in every
                                    single of our hands. Harnessing our
                                    unlimited potential by using it to solve
                                    problems and better lives is at heart of
                                    everything we do.
                                </Typography>
                            </Grid>
                        </Hidden>
                        <Grid
                            item
                            container
                            direction="column"
                            alignItems={matchesMD ? 'center' : undefined}
                            lg
                            style={{ marginBottom: matchesMD ? '2.5em' : 0 }}
                        >
                            <Grid item>
                                <img
                                    src={yearbook}
                                    alt="yearbook"
                                    style={{
                                        maxWidth: matchesSM ? 300 : '30em',
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    a page from my sophomore yearbook
                                </Typography>
                            </Grid>
                        </Grid>
                        <Hidden mdDown>
                            <Grid
                                item
                                lg
                                style={{ maxWidth: '45em', padding: '1.25em' }}
                            >
                                <Typography
                                    varinat="body1"
                                    color="textSecondary"
                                    paragraph
                                >
                                    What once was confined to huge rooms and
                                    teams of engineers now resides in every
                                    single of our hands. Harnessing our
                                    unlimited potential by using it to solve
                                    problems and better lives is at heart of
                                    everything we do.
                                </Typography>
                            </Grid>
                        </Hidden>
                        <Grid
                            item
                            container
                            direction="column"
                            lg
                            alignItems={matchesMD ? 'center' : 'flex-end'}
                        >
                            <Grid item>
                                <img
                                    src={puppy}
                                    alt="puppy"
                                    style={{
                                        maxWidth: matchesSM ? 300 : '30em',
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    my miniature dapple dachshund, Sterling
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid> */}
                </Grid>
            </Container>
            <CallToAction setValue={setValue} />
        </React.Fragment>
    );
}

export default About;
