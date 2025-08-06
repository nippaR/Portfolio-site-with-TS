import { Box, Grid } from "@mui/system";
import IMG1 from "@/assets/OURS.png"
import { Button, IconButton } from "@mui/material";
import TripelLines from '@/Component/TripelLines'
import NotificationsIcon from '@mui/icons-material/Notifications';

type Props = {}

export const Navbar = (props: Props) => {
    const onClickHandler = (section: string) => {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Grid container spacing={3} sx={{ backgroundColor: '#16141edc', padding: 1.5, boxShadow: '0px 0px 10px rgba(64, 0, 255, 0.25)', position: 'sticky', top: 0, zIndex: 1000 }}>
            <Grid size={4}>
                <Box component="img" src={IMG1} alt="Description" sx={{ width: 120, height: 'auto', display: { xs: 'none', sm: 'block' }, '&:hover': { opacity: 0.8 } }} />
                <Box component="img" src={IMG1} alt="Description" sx={{ width: 80, height: 'auto', display: { xs: 'block', sm: 'none' }, '&:hover': { opacity: 0.8 } }} />
            </Grid>
            <Grid size={4} sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex' }, justifyContent: 'space-around' }}>
                <Button variant="text" color="primary" size="small" sx={{ color: "#fff" }} onClick={() => onClickHandler('home')}>Home</Button>
                <Button variant="text" color="primary" size="small" sx={{ color: "#fff" }} onClick={() => onClickHandler('category')}>Category</Button>
                <Button variant="text" color="primary" size="small" sx={{ color: "#fff" }} onClick={() => onClickHandler('contact')}>Contact Us</Button>
                <Button variant="text" color="primary" size="small" sx={{ color: "#fff" }} onClick={() => onClickHandler('projects')}>Sample Projects</Button>

                <Box display={{ xs: 'none', sm: 'block' }}>
                    <TripelLines />
                </Box>
            </Grid>
            <Grid size={4}
                sx={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 1, color: 'white'}}>
                <IconButton aria-label="notifications" sx={{ color: 'white', display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                    <NotificationsIcon />
                </IconButton>
            </Grid>
        </Grid>
    );
}