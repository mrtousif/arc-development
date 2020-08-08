import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[800],
        },
        secondary: {
            main: orange[300],
        },
    },
});

export default theme;
