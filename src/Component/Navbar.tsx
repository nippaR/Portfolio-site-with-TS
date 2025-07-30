import { Box, Button, Stack, IconButton, AppBar, Toolbar } from '@mui/material';
import Grid from '@mui/material/Grid';
import IMG1 from '../assets/OURS.png';
import NotificationsIcon from '@mui/icons-material/Notifications';

type Props = {};

const Navbar = (props: Props) => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Box sx={{ display:{xs:'none', sm:'block'} }}>
                <img src={IMG1} alt="Logo" style={{ height: 40, marginRight: '20px' }} />
                </Box>
                <Box sx={{ display:{xs:'block', sm:'none'} }}>
                <img src={IMG1} alt="Logo" style={{ height: 20, marginRight: '20px' }} />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;