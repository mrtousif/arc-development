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
    useMediaQuery,
    Hidden,
    Snackbar,
    CircularProgress,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { clone } from 'ramda';
import Lottie from 'lottie-react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import estimateAnimation from '../animations/estimateAnimation/data.json';
import {
    defaultQuestions,
    softwareQuestions,
    websiteQuestions,
} from '../components/questions';
import check from '../assets/check.svg';
import send from '../assets/send.svg';
import ky from 'ky';
import ContactForm from '../components/ContactForm';

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
        fontSize: '1.1rem',
    },
}));

function Estimate(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

    const [questions, setQuestions] = useState(defaultQuestions);
    const [activeQIndex, setActiveQIndex] = useState(
        //return the index of active question
        questions
            .map((question, index) => {
                if (question.active) {
                    return index;
                }
            })
            .filter((index) => index !== undefined)[0]
    );
    const [total, setTotal] = useState(0);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [service, setService] = useState('');
    const [platforms, setPlatforms] = useState([]);
    const [features, setFeatures] = useState([]);
    const [customFeature, setCustomFeature] = useState('');
    const [numberOfUsers, setNumberOfUsers] = useState('');
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [emailHelper, setEmailHelper] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');
    const [alert, setAlert] = useState({
        open: false,
        message: '',
        backgroundColor: '',
    });

    const onConfirm = () => {
        setLoading(true);

        ky.post('https://google.cloud.functions')
            .json({
                name,
                email,
                phone,
                message,
                total,
                category,
                service,
                platforms,
                features,
                customFeature,
                // users,
            })
            .then(() => {
                setLoading(false);
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                setAlert({
                    open: true,
                    message: 'Estimate placed successfully',
                    backgroundColor: '#4BB543',
                });
                setDialogOpen(false);
            })
            .catch((error) => {
                setLoading(false);
                setAlert({
                    open: true,
                    message: 'Something went wrong, please try again',
                    backgroundColor: '#FF3232',
                });
                console.error(error);
            });
    };

    const estimateDisabled = () => {
        if (activeQIndex === 0 || activeQIndex !== questions.length - 1)
            return true;

        const selectedQuestions = questions
            .map((question) =>
                question.options.filter((option) => option.selected)
            )
            .filter((questions) => questions.length > 0);

        if (
            selectedQuestions.length > 0 &&
            selectedQuestions.length === questions.length - 1
        ) {
            return false;
        } else {
            return true;
        }
    };

    const nextQuestion = () => {
        const newQuestions = clone(questions);

        newQuestions[activeQIndex].active = false;
        const nextIndex = activeQIndex * 1 + 1;

        if (nextIndex < newQuestions.length) {
            newQuestions[nextIndex].active = true;
            setQuestions(newQuestions);
            setActiveQIndex(nextIndex);
        }
    };

    const previousQuestion = () => {
        const newQuestions = clone(questions);

        newQuestions[activeQIndex].active = false;
        const prevIndex = activeQIndex * 1 - 1;

        if (prevIndex >= 0) {
            newQuestions[prevIndex].active = true;
            setQuestions(newQuestions);
            setActiveQIndex(prevIndex);
        }
    };

    const handleBack = () => {
        if (activeQIndex === 0) {
            return true;
        } else {
            return false;
        }
    };

    const handleNext = () => {
        if (activeQIndex === questions.length - 1) {
            return true;
        } else {
            return false;
        }
    };

    const handleSelect = (id) => {
        const newQuestions = clone(questions);
        const activeQuestion = newQuestions[activeQIndex];
        // get the selected option
        const selected = activeQuestion.options.filter(
            (option) => id === option.id
        );
        // when one option to select set the previously selected option to false
        // and subtract the cost from total
        if (activeQuestion.subtitle === 'Select one.') {
            activeQuestion.options.forEach((option) => {
                if (option.selected) {
                    option.selected = false;
                    return;
                }
            });
        }
        // toggle selected option
        selected[0].selected = !selected[0].selected;

        //get the selected platforms
        if (activeQuestion.title === 'Which platforms do you need supported?') {
            const selectedPlatform = activeQuestion.options
                .filter((option) => option.selected)
                .map((element) => element.title);

            setPlatforms(selectedPlatform);
        }

        switch (selected[0].title) {
            case 'Custom Software Development':
                setQuestions(softwareQuestions);
                setActiveQIndex(1);
                setTotal(0);
                setService('Custom Software Development');
                setPlatforms([]);
                setNumberOfUsers('');
                return;

            case 'Android/IOS App Development':
                setQuestions(softwareQuestions);
                setActiveQIndex(1);
                setTotal(0);
                setService('Android/IOS App Development');
                setPlatforms([]);
                setNumberOfUsers('');
                return;

            case 'Website Development':
                setQuestions(websiteQuestions);
                setActiveQIndex(1);
                setTotal(0);
                setService('Website Development');
                setPlatforms([]);
                setNumberOfUsers('');
                return;

            default:
                setQuestions(newQuestions);
                break;
        }
    };

    const getFeatures = () => {
        //get the selected features
        const featureTitles = [];
        questions
            .filter(
                (question) =>
                    question.title === 'Which features do you expect to use?'
            )
            .map((question) =>
                question.options.filter((option) => option.selected)
            )
            .map((element) =>
                element.map((feature) => featureTitles.push(feature.title))
            );
        // console.log(featureQuestions);
        setFeatures(featureTitles);
    };

    const getCustomFeatures = () => {
        if (questions.length < 3) return;
        try {
            const selectedCustomFeatures = questions
                .filter(
                    (question) =>
                        question.title ===
                        'What type of custom features do you expect to need?'
                )
                .map((question) =>
                    question.options.filter((option) => option.selected)
                )[0][0].title;

            setCustomFeature(selectedCustomFeatures);
        } catch (error) {
            console.error(
                'Option of question: What type of custom features do you expect to need? is not selected'
            );
        }
    };

    const getCategory = () => {
        if (questions.length > 3) return;

        try {
            const selectedCategory = questions
                .filter(
                    (question) =>
                        question.title ===
                        'Which type of website are you wanting?'
                )[0]
                .options.filter((option) => option.selected)[0].title;

            setCategory(selectedCategory);
        } catch (error) {
            console.error(error);
        }
    };

    const getTotal = () => {
        let cost = 0;
        questions.map((question) =>
            question.options.forEach((option) => {
                if (option.selected) {
                    cost += option.cost;
                }
            })
        );

        if (
            questions[questions.length - 1].title ===
            'How many users do you expect?'
        ) {
            questions[questions.length - 1].options.forEach((option) => {
                if (option.selected) {
                    cost -= option.cost;
                    cost *= option.cost;
                    setNumberOfUsers(option.title);
                }
            });
        }

        setTotal(cost);
    };

    const softwareSelection = (
        <React.Fragment>
            <Grid item container alignItems="center">
                <Grid item xs={2}>
                    <img
                        src={check}
                        alt="check"
                        width="25em"
                        // style={{ marginRight: '0.5em' }}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">
                        You want {service}
                        {platforms.length < 1
                            ? null
                            : ` for ${
                                  //if only web application is selected...
                                  platforms.indexOf('Web Application') > -1 &&
                                  platforms.length === 1
                                      ? //then finish sentence here
                                        'a Web Application.'
                                      : //otherwise, if web application and another platform is selected...
                                      platforms.indexOf('Web Application') >
                                            -1 && platforms.length === 2
                                      ? //then finish the sentence here
                                        `a Web Application and an ${platforms[1]}.`
                                      : //otherwise, if only one platform is selected which isn't web application...
                                      platforms.length === 1
                                      ? //then finish the sentence here
                                        `an ${platforms[0]}`
                                      : //otherwise, if other two options are selected...
                                      platforms.length === 2
                                      ? //then finish the sentence here
                                        'an iOS Application and an Android Application.'
                                      : //otherwise if all three are selected...
                                      platforms.length === 3
                                      ? //then finish the sentence here
                                        'a Web Application, an iOS Application, and an Android Application.'
                                      : null
                              }`}
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container alignItems="center">
                <Grid item xs={2}>
                    <img
                        src={check}
                        alt="check"
                        width="25em"
                        // style={{ marginRight: '0.5em' }}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">
                        {'with '}
                        {/* if we have features... */}
                        {features.length > 0
                            ? //...and there's only 1...
                              features.length === 1
                                ? //then end the sentence here
                                  `${features[0]}.`
                                : //otherwise, if there are two features...
                                features.length === 2
                                ? //...then end the sentence here
                                  `${features[0]} and ${features[1]}.`
                                : //otherwise, if there are three or more features...
                                  features
                                      //filter out the very last feature...
                                      .filter(
                                          (feature, index) =>
                                              index !== features.length - 1
                                      )
                                      //and for those features return their name...
                                      .map((feature, index) => (
                                          <span
                                              key={index}
                                          >{`${feature}, `}</span>
                                      ))
                            : null}
                        {features.length > 2
                            ? //...and then finally add the last feature with 'and' in front of it
                              ` and ${features[features.length - 1]}.`
                            : null}
                    </Typography>
                </Grid>
            </Grid>

            <Grid item container alignItems="center">
                <Grid item xs={2}>
                    <img
                        src={check}
                        alt="check"
                        width="25em"
                        // style={{ marginRight: '0.5em' }}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">
                        The custom features will be{' '}
                        {customFeature.toLowerCase()}
                        {`, and project will be used by about ${numberOfUsers} users.`}
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );

    const websiteSelection = (
        <React.Fragment>
            <Grid item container alignItems="center">
                <Grid item xs={2}>
                    <img
                        src={check}
                        alt="check"
                        width="25em"
                        // style={{ marginRight: '0.5em' }}
                    />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">
                        You want{' '}
                        {category === 'Basic' ? 'a Basic' : `an ${category}`}{' '}
                        website
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    );

    return (
        <Grid
            container
            justify="center"
            style={{
                marginBottom: '6em',
            }}
        >
            <Grid item xs={12} style={{ margin: '2em' }}>
                <Typography variant="h4" color="primary">
                    Estimate
                </Typography>
            </Grid>

            <Grid
                item
                xs={12}
                lg={5}
                style={{
                    marginBottom: '3em',
                    maxWidth: '50em',
                }}
            >
                <Lottie animationData={estimateAnimation} />
            </Grid>

            <Grid item container direction="column" justify="center" lg={7}>
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
                        {questions[activeQIndex].title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        align="center"
                    >
                        {questions[activeQIndex].subtitle}
                    </Typography>
                </Grid>

                <Grid item container>
                    {questions[activeQIndex].options.map((option) => (
                        <Grid
                            key={option.id}
                            item
                            container
                            md
                            direction="column"
                            alignItems="center"
                            component={ButtonBase}
                            onClick={() => handleSelect(option.id)}
                            style={{
                                backgroundColor: option.selected
                                    ? theme.palette.secondary.light
                                    : null,
                            }}
                        >
                            <Grid
                                item
                                style={{ maxWidth: '12em' }}
                                align="center"
                            >
                                <Typography variant="body1" color="primary">
                                    {option.title}
                                </Typography>
                                <Typography variant="caption">
                                    {option.subtitle}
                                </Typography>
                            </Grid>
                            <Grid item className={classes.icon}>
                                <img
                                    alt={option.alt}
                                    src={option.icon}
                                    width="160"
                                    height="150"
                                />
                            </Grid>
                        </Grid>
                    ))}
                </Grid>

                <Grid item container justify="center">
                    <Grid item style={{ marginRight: '8em' }}>
                        <IconButton
                            disabled={handleBack()}
                            color="primary"
                            onClick={() => previousQuestion()}
                        >
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Grid>

                    <Grid item>
                        <IconButton
                            disabled={handleNext()}
                            color="primary"
                            onClick={() => nextQuestion()}
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
                            getTotal();
                            setDialogOpen(true);
                            getFeatures();
                            getCustomFeatures();
                            getCategory();
                        }}
                        disabled={estimateDisabled()}
                    >
                        Get Estimate
                    </Button>
                </Grid>
            </Grid>
            <Dialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)} // fired when clicked outside the dialog
                fullScreen={matchesSM}
                maxWidth="md"
                PaperProps={{
                    style: {
                        paddingLeft: matchesSM ? 0 : '5em',
                        paddingRight: matchesSM ? 0 : '5em',
                        paddingBottom: matchesSM ? 0 : '2em',
                        paddingTop: matchesSM ? 0 : '2em',
                    },
                }}
                style={{ zIndex: 1302 }}
            >
                <DialogContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                align="center"
                            >
                                Estimate
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            direction="column"
                            md={7}
                            style={{ paddingRight: matchesSM ? 0 : '5em' }}
                        >
                            <ContactForm
                                name={name}
                                setName={setName}
                                email={email}
                                setEmail={setEmail}
                                phone={phone}
                                setPhone={setPhone}
                                message={message}
                                setMessage={setMessage}
                                emailHelper={emailHelper}
                                setEmailHelper={setEmailHelper}
                                phoneHelper={phoneHelper}
                                setPhoneHelper={setPhoneHelper}
                            />

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
                            spacing={2}
                            // style={{ marginLeft: '0em' }}
                        >
                            {questions.length > 2
                                ? softwareSelection
                                : websiteSelection}
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
                                    onClick={onConfirm}
                                    disabled={
                                        name.length === 0 ||
                                        email.length === 0 ||
                                        message.length === 0 ||
                                        emailHelper.length !== 0 ||
                                        phoneHelper.length !== 0 ||
                                        loading
                                    }
                                >
                                    {loading ? (
                                        <CircularProgress />
                                    ) : (
                                        <React.Fragment>
                                            Place Request
                                            <img
                                                src={send}
                                                alt="paper airplane"
                                                style={{ marginLeft: '0.5em' }}
                                            />
                                        </React.Fragment>
                                    )}
                                </Button>
                                <Hidden mdUp>
                                    <Button
                                        variant="contained"
                                        onClick={() => setDialogOpen(false)}
                                        // style={{ borderRadius: '50px',  }}
                                        className={classes.button}
                                    >
                                        Cancel
                                    </Button>
                                </Hidden>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            <Snackbar
                open={alert.open}
                autoHideDuration={6000}
                message={alert.message}
                ContentProps={{
                    style: { backgroundColor: alert.backgroundColor },
                }}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                onClose={() => setAlert({ ...alert, open: false })}
            />
        </Grid>
    );
}

export default Estimate;
