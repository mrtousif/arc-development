import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EventIcon from '@material-ui/icons/Event';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import { Grid, Box } from '@material-ui/core';
import moment from 'moment';

const useStyles = makeStyles({
    root: {
        maxWidth: 300,
    },
    media: {
        height: 130,
    },
    margin: 5,
});

export default function MediaCard(props) {
    const {
        image,
        summary,
        id,
        name,
        price,
        difficulty,
        ratingsAverage,
        duration,
        maxGroupSize,
        startLocation,
        startDates,
        locations,
    } = props.tours;

    let m = moment(startDates[0]).format('MMMM YYYY');
    // console.log(m);

    const classes = useStyles();

    return (
        <Card key={id} className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`https://gotours-touring-app-101.herokuapp.com/img/tours/${image}`}
                    title={name}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h3"
                        align="right"
                    >
                        {name}
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item>
                            <Typography variant="button" gutterBottom>
                                {difficulty} {duration} day tour
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                gutterBottom
                            >
                                {summary}
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Box display="flex">
                                <LocationOnIcon />
                                <Typography variant="caption">
                                    {startLocation.description}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box display="flex">
                                <EventIcon />
                                <Typography variant="caption">{m}</Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box display="flex">
                                <EmojiFlagsIcon />
                                <Typography variant="caption">
                                    {locations.length}
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={6}>
                            <Box display="flex">
                                <PermIdentityIcon />
                                <Typography variant="caption">
                                    {maxGroupSize}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>

            <CardActions style={{ backgroundColor: '#f7f7f7' }}>
                <Grid container direction="column" spacing={1}>
                    <Grid item xs={4}>
                        <Box display="flex">
                            <AttachMoneyIcon />
                            <Typography variant="body2" gutterBottom>
                                {price}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4}>
                        <Box display="flex">
                            <StarBorderIcon />
                            <Typography variant="body2" gutterBottom>
                                {ratingsAverage}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                <Button color="primary">Learn More</Button>
            </CardActions>
        </Card>
    );
}
