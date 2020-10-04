import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    message: {
        border: `2px solid ${theme.palette.primary.main}`,
        borderRadius: 5,
        marginTop: '4em',
        marginBottom: '1em',
        paddingLeft: '0.5em',
        paddingRight: '0.5em',
    },
}));

function ContactForm(props) {
    const classes = useStyles();
    const {
        name,
        setName,
        email,
        setEmail,
        phone,
        setPhone,
        message,
        setMessage,
        emailHelper,
        setEmailHelper,
        phoneHelper,
        setPhoneHelper,
        disabled,
    } = props;

    // const [emailHelper, setEmailHelper] = useState('');
    // const [phoneHelper, setPhoneHelper] = useState('');

    const handleChange = (event) => {
        let target = event.target;
        let valid;

        switch (target.id) {
            case 'email':
                setEmail(target.value);
                valid = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gim.test(
                    target.value
                );
                if (!valid) {
                    setEmailHelper('Invalid email');
                } else {
                    setEmailHelper('');
                }
                break;

            case 'phone':
                setPhone(target.value);
                valid = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/.test(
                    target.value
                );
                if (!valid) {
                    setPhoneHelper('Invalid phone number');
                } else {
                    setPhoneHelper('');
                }
                break;

            default:
                break;
        }
    };

    return (
        <Grid container direction="column">
            <Grid item container direction="column" spacing={2}>
                <Grid item>
                    <TextField
                        id="name"
                        label="Name"
                        value={name}
                        fullWidth
                        required
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        disabled={disabled}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="phone"
                        label="Phone"
                        value={phone}
                        fullWidth
                        required
                        error={phoneHelper.length !== 0}
                        helperText={phoneHelper}
                        onChange={handleChange}
                        disabled={disabled}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        id="email"
                        label="Email"
                        value={email}
                        fullWidth
                        error={emailHelper.length !== 0}
                        helperText={emailHelper}
                        onChange={handleChange}
                        required
                        disabled={disabled}
                    />
                </Grid>
            </Grid>
            <Grid item>
                <TextField
                    id="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    fullWidth
                    multiline
                    rows={10}
                    placeholder="Tell us more about your project"
                    className={classes.message}
                    InputProps={{ disableUnderline: true }}
                    required
                    disabled={disabled}
                />
            </Grid>
        </Grid>
    );
}

export default ContactForm;
