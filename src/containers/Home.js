import React from 'react';

// import Button from '@material-ui/core/Button';

import { CssBaseline, Grid, Container } from '@material-ui/core';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

// import Copyright from '../components/Copyright';
// import ky from 'ky';
// import Post from '../components/Post';

export default function Home() {
    return (
        <Container>
            <CssBaseline />
            <Grid container>
                <div style={{ height: 360 }}>Home</div>
                {/* <Grid container direction="column" sm={8} xs={12}>
                    <Typography>Posts....</Typography>

                    {recentScreamMarkup}
                </Grid>
                <Grid container sm={4} xs={12}>
                    <Typography>Profile....</Typography>
                </Grid> */}
            </Grid>
            {/* <Copyright /> */}
        </Container>
    );
}
