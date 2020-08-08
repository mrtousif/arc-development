import React from 'react';
import Card from './Card';

import Grid from '@material-ui/core/Grid';

function CardList(props) {
    const { tours } = props;
    // const classes = useStyles();

    const cardList = tours.map((tour, i) => {
        return (
            <Grid item key={i} tour>
                <Card tour={tour} />
            </Grid>
        );
    });

    return (
        <Grid container justify="center" spacing={2}>
            {cardList}
        </Grid>
    );
}

export default CardList;
