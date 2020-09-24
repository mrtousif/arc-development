import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ky from 'ky';
import {
    Container,
    Grid,
    Button,
    Typography,
    Dialog,
    DialogContent,
    useMediaQuery,
    CircularProgress,
    Snackbar,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import backgroundImage from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';
import ContactForm from '../components/ContactForm';

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
    background: {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        // backgroundAttachment: 'fixed',
        height: '60em',
        width: '100%',
        [theme.breakpoints.down('sm')]: {
            backgroundImage: `url(${mobileBackground})`,
            backgroundAttachment: 'inherit',
        },
    },

    estimate: {
        ...theme.typography.estimate,
        marginLeft: '5em',
        fontSize: '1.5em',
        width: 200,
        [theme.breakpoints.down('sm')]: {
            marginRight: 0,
            marginLeft: 0,
        },
    },

    message: {
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 5,
        marginTop: '5em',
        marginBottom: '2em',
        paddingLeft: '0.5em',
        paddingRight: '0.5em',
    },
}));

function Contact(props) {
    const { setValue } = props;
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [emailHelper, setEmailHelper] = useState('');
    const [phoneHelper, setPhoneHelper] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({
        open: false,
        message: '',
        backgroundColor: '',
    });

    const onConfirm = async () => {
        setLoading(true);
        try {
            await ky.post('https://cloud.function.com').json({
                name: name,
                email: email,
                phone: phone,
                message: message,
            });

            setLoading(false);
            setOpen(false);
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setAlert({
                open: true,
                message: 'Message sent successfully',
                backgroundColor: '#4BB543',
            });
        } catch (error) {
            setLoading(false);
            setAlert({
                open: true,
                message: 'Something went wrong, please try again',
                backgroundColor: '#FF3232',
            });
            console.error(error);
        }
    };

    const buttonContents = (
        <React.Fragment>
            Send Message
            <img
                src={airplane}
                alt="paper airplane"
                style={{ marginLeft: '0.5em' }}
            />
        </React.Fragment>
    );

    return (
        <Grid container>
            <Grid
                item
                container
                direction="column"
                justify="center"
                lg={4}
                style={{
                    marginBottom: matchesMD ? '3em' : 0,
                    marginTop: matchesMD ? '3em' : 0,
                }}
            >
                <Container maxWidth="sm">
                    <Grid item>
                        <Typography variant="h4" color="primary">
                            Contact us
                        </Typography>
                        <Typography variant="body2" color="primary" paragraph>
                            We're waiting
                        </Typography>
                    </Grid>
                    <Grid item container>
                        <Grid item>
                            <img
                                src={phoneIcon}
                                alt="phone"
                                style={{ marginRight: '0.5em' }}
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="primary">
                                <a
                                    href="tel:(555) 555-5555"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                    }}
                                >
                                    (555) 555-5555
                                </a>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container style={{ marginBottom: '1em' }}>
                        <Grid item>
                            <img
                                src={emailIcon}
                                alt="envelope"
                                style={{
                                    marginRight: '0.5em',
                                    horizontalAlign: 'center',
                                    verticalAlign: 'bottom',
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="primary">
                                <a
                                    href="mailto:tousifislam607@gmail.com"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'inherit',
                                    }}
                                >
                                    tousifislam607@gmail.com
                                </a>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
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
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            color="secondary"
                            fullWidth
                            className={classes.button}
                            disabled={
                                name.length === 0 ||
                                email.length === 0 ||
                                message.length === 0 ||
                                emailHelper.length !== 0 ||
                                phoneHelper.length !== 0
                            }
                            onClick={() => setOpen(true)}
                        >
                            {buttonContents}
                        </Button>
                    </Grid>
                </Container>
            </Grid>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                fullScreen={matchesSM}
                PaperProps={{
                    style: {
                        paddingLeft: matchesSM ? 0 : '1.5em',
                        paddingRight: matchesSM ? 0 : '1.5em',
                    },
                }}
                style={{ zIndex: 1302 }}
            >
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h6" gutterBottom>
                                Confirm message
                            </Typography>
                        </Grid>
                        <Grid item container>
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
                                disabled={true}
                            />
                        </Grid>
                    </Grid>
                    <Grid item container justify="flex-end" spacing={1}>
                        <Grid item>
                            <Button
                                variant="contained"
                                className={classes.button}
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                onClick={onConfirm}
                                disabled={loading}
                            >
                                {/* If loading is true then display
                                 progress bar otherwise buttonContents */}
                                {loading ? (
                                    <CircularProgress size="1.5em" />
                                ) : (
                                    buttonContents
                                )}
                            </Button>
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

            {/*estimate*/}
            <Grid
                item
                container
                className={classes.background}
                justify={matchesSM ? 'center' : undefined}
                alignItems="center"
                direction={matchesSM ? 'column' : 'row'}
                lg
            >
                <Grid
                    item
                    style={{
                        marginLeft: matchesSM ? 0 : '5em',
                        textAlign: matchesSM ? 'center' : 'inherit',
                    }}
                >
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" color="primary">
                                Simple Software <br /> Revolutionary Results
                            </Typography>
                            <Typography variant="h6" color="initial" paragraph>
                                Take advantage of 21st century
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                component={Link}
                                to="/customsoftware"
                            >
                                Learn More
                                <ArrowForwardIosIcon fontSize="inherit" />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.estimate}
                        component={Link}
                        to="/estimate"
                        onClick={() => setValue(5)}
                    >
                        Free Estimate
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Contact;
