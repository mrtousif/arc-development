import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Grid,
    Typography,
    Button,
    IconButton,
    ButtonBase,
    Dialog,
    DialogContent,
    CircularProgress,
    TextField,
    useMediaQuery,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { clone } from 'ramda';
import Lottie from 'lottie-react';

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import estimateAnimation from '../animations/estimateAnimation/data.json';
import check from '../assets/check.svg';
import send from '../assets/send.svg';
import {
    defaultQuestions,
    softwareQuestions,
    websiteQuestions,
} from '../components/questions';

const useStyles = makeStyles((theme) => ({
    estimate: {
        ...theme.typography.estimate,
        // marginLeft: '5em',
        fontSize: '1.5em',
        width: 200,
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            marginLeft: 0,
        },
    },
    icon: {
        marginTop: '1em',
        marginLeft: '2em',
        marginRight: '2em',
        marginBottom: '3em',
    },
    serviceItem: {
        marginTop: '1em',
        // [theme.breakpoints.down('sm')]: {
        // },
        // marginRight: '3em',
    },
    message: {
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 5,
        marginTop: '5em',
        marginBottom: '2em',
        paddingLeft: '0.5em',
        paddingRight: '0.5em',
    },
    specialText: {
        fontFamily: 'Pacifico',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: theme.palette.secondary.main,
    },
    button: {
        ...theme.typography.estimate,
        marginRight: 10,
        marginBottom: 10,
    },
}));

function Estimate(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));
    const [questions, setQuestions] = useState(defaultQuestions);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [service, setService] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [features, setFeatures] = useState([]);
    const [customFeatures, setCustomFeatures] = useState('');
    const [category, setCategory] = useState('');
    const [users, setUsers] = useState('');

    // const [activeQuestion, setActiveQuestion] = useState(
    //     questions.filter((question) => question.active)
    // );
    // const [activeOptions, setActiveOptions] = useState([]);

    const nextQuestion = () => {
        // make a deep copy of questions
        const newQuestions = clone(questions);
        // get the currently active question
        const currentlyActive = newQuestions.filter(
            (question) => question.active // return if active is true
        );
        const activeIndex = currentlyActive[0].id - 1;
        const nextIndex = activeIndex + 1;

        newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
        newQuestions[nextIndex] = {
            ...newQuestions[nextIndex],
            active: true,
        };
        setQuestions(newQuestions);
    };

    const previousQuestion = () => {
        // make a deep copy of questions
        const newQuestions = clone(questions);
        // get the currently active question
        const currentlyActive = newQuestions.filter(
            (question) => question.active // return if active is true
        );
        const activeIndex = currentlyActive[0].id - 1;
        const nextIndex = activeIndex - 1;
        newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
        newQuestions[nextIndex] = {
            ...newQuestions[nextIndex],
            active: true,
        };
        setQuestions(newQuestions);
    };

    const handleBack = () => {
        const currentlyActive = questions.filter((question) => question.active);
        if (currentlyActive[0].id === 1) return true;
        else return false;
    };

    const handleNext = () => {
        const currentlyActive = questions.filter((question) => question.active);
        // if currently active item is equal to
        if (currentlyActive[0].id === questions[questions.length - 1].id)
            return true;
        else return false;
    };

    const handleSelect = (id) => {
        const newQuestions = clone(questions);
        const currentlyActive = newQuestions.filter(
            (question) => question.active
        );
        const activeIndex = currentlyActive[0].id - 1;
        const newSelected = newQuestions[activeIndex].options[id - 1];
        const previousSelected = currentlyActive[0].options.filter(
            (option) => option.selected
        );

        switch (currentlyActive[0].subtitle) {
            case 'Select one.':
                if (previousSelected[0]) {
                    previousSelected[0].selected = !previousSelected[0]
                        .selected;
                }
                newSelected.selected = !newSelected.selected;
                break;

            default:
                newSelected.selected = !newSelected.selected;
                break;
        }

        switch (newSelected.title) {
            case 'Custom Software Development':
                setQuestions(softwareQuestions);
                setService('Custom Software Development');
                break;
            case 'Android/IOS App Development':
                setQuestions(softwareQuestions);
                setService('Android/IOS App Development');
                break;
            case 'Website Development':
                setQuestions(websiteQuestions);
                setService('Website Development');
                break;
            default:
                setQuestions(newQuestions);
                break;
        }
    };

    const getTotal = () => {
        let cost = 0;
        const selections = questions
            .map((question) =>
                question.options.filter((option) => option.selected)
            )
            .filter((question) => question.length > 0);

        selections.map((options) =>
            options.map((option) => (cost += option.cost))
        );

        if (questions.length > 2) {
            const userCost = questions
                .filter(
                    (question) =>
                        question.title === 'How many users do you expect?'
                )
                .map((question) =>
                    question.options.filter((option) => option.selected)
                )[0][0].cost;

            cost -= userCost;
            cost *= userCost;
        }

        setTotal(cost);
    };

    return (
        <Grid
            container
            style={{
                marginBottom: '6em',
            }}
        >
            <Grid item xs={12} style={{ margin: '2em' }}>
                <Typography variant="h4" color="primary">
                    Estimate
                </Typography>
            </Grid>

            <Grid item xs={12} lg={5} style={{ marginBottom: '3em' }}>
                <Lottie animationData={estimateAnimation} />
            </Grid>

            <Grid item container direction="column" justify="center" lg={7}>
                {questions
                    .filter((question) => question.active)
                    .map((element) => (
                        <React.Fragment key={element.id}>
                            <Grid item style={{ marginBottom: '2em' }}>
                                <Typography
                                    variant="h5"
                                    color="primary"
                                    align="center"
                                    style={{
                                        fontWeight: 500,
                                        paddingLeft: '0.5em',
                                        paddingRight: '0.5em',
                                    }}
                                >
                                    {element.title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="textSecondary"
                                    align="center"
                                >
                                    {element.subtitle}
                                </Typography>
                            </Grid>

                            <Grid item container>
                                {element.options.map((item) => (
                                    <Grid
                                        key={item.id}
                                        item
                                        container
                                        sm
                                        direction="column"
                                        alignItems="center"
                                        component={ButtonBase}
                                        onClick={() => handleSelect(item.id)}
                                        style={{
                                            backgroundColor: item.selected
                                                ? theme.palette.secondary.light
                                                : null,
                                        }}
                                    >
                                        <Grid
                                            item
                                            style={{ maxWidth: '12em' }}
                                            align="center"
                                        >
                                            <Typography
                                                variant="body1"
                                                color="primary"
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography variant="caption">
                                                {item.subtitle}
                                            </Typography>
                                        </Grid>
                                        <Grid item className={classes.icon}>
                                            <img
                                                alt={item.alt}
                                                src={item.icon}
                                                width="160"
                                                height="150"
                                            />
                                        </Grid>
                                    </Grid>
                                ))}
                            </Grid>
                        </React.Fragment>
                    ))}

                <Grid item container justify="center">
                    <Grid item style={{ marginRight: '8em' }}>
                        <IconButton
                            disabled={handleBack()}
                            color="primary"
                            onClick={previousQuestion}
                        >
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Grid>

                    <Grid item>
                        <IconButton
                            disabled={handleNext()}
                            color="primary"
                            onClick={nextQuestion}
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Grid>
                </Grid>

                <Grid
                    item
                    container
                    justify="center"
                    style={{ marginTop: '2em' }}
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.estimate}
                        component={Link}
                        to="/estimate"
                        onClick={() => {
                            setDialogOpen(true);
                            getTotal();
                        }}
                    >
                        Get Estimate
                    </Button>
                </Grid>
            </Grid>
            <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)} // fired when clicked outside the dialog
                fullScreen={matchesXS}
                PaperProps={{
                    style: {
                        paddingLeft: matchesSM ? 0 : '1.5em',
                        paddingRight: matchesSM ? 0 : '1.5em',
                    },
                }}
                style={{ zIndex: 1302 }}
            >
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h6" gutterBottom>
                                Estimate
                            </Typography>
                        </Grid>
                        <Grid item container direction="column" md={7}>
                            <Grid item container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="name"
                                        label="Name"
                                        // value={name}
                                        fullWidth
                                        required
                                        // onChange={(event) => {
                                        //     setName(event.target.value);
                                        // }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="phone"
                                        label="Phone"
                                        // value={phone}
                                        fullWidth
                                        // error={phoneHelper.length !== 0}
                                        // helperText={phoneHelper}
                                        // onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        // value={email}
                                        fullWidth
                                        // error={emailHelper.length !== 0}
                                        // helperText={emailHelper}
                                        // onChange={handleChange}
                                        required
                                    />
                                </Grid>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="message"
                                    // value={message}
                                    // onChange={(event) =>
                                    //     setMessage(event.target.value)
                                    // }
                                    fullWidth
                                    multiline
                                    rows={10}
                                    className={classes.message}
                                    InputProps={{ disableUnderline: true }}
                                    required
                                />
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="body2"
                                    color="initial"
                                    paragraph
                                >
                                    We can create this digital solution for
                                    estimated{' '}
                                    <span className={classes.specialText}>
                                        ${total.toFixed(2)}
                                    </span>
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="initial"
                                    paragraph
                                >
                                    Fill out your name, phone number and email
                                    place your request and we will get back to
                                    you with details moving forward and final
                                    price.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            direction="column"
                            md={5}
                            style={{ marginLeft: '0em' }}
                        >
                            <Grid item container alignItems="center">
                                <Grid item>
                                    <img src={check} alt="check" />
                                </Grid>
                                <Grid item>
                                    <Typography>You want {service}</Typography>
                                </Grid>
                            </Grid>

                            <Grid item container alignItems="center">
                                <Grid item>
                                    <img src={check} alt="check" />
                                </Grid>
                                <Grid item>
                                    <Typography>Second check</Typography>
                                </Grid>
                            </Grid>

                            <Grid item container alignItems="center">
                                <Grid item>
                                    <img src={check} alt="check" />
                                </Grid>
                                <Grid item>
                                    <Typography>Third check</Typography>
                                </Grid>
                            </Grid>

                            <Grid
                                item
                                container
                                justify="center"
                                style={{ marginTop: '5em' }}
                            >
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    // onClick={onConfirm}
                                    // disabled={loading}
                                >
                                    Place Request
                                    <img
                                        src={send}
                                        alt="paper airplane"
                                        style={{ marginLeft: '0.5em' }}
                                    />
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </Grid>
    );
}

export default Estimate;
