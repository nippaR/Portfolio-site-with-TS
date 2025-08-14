import { Box, useMediaQuery, type Theme } from "@mui/system";
import { Grid, Button, IconButton, Typography } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import videoBG from "@/assets/videoBG.mp4";

type Props = {};

const Contact = (props: Props) => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

    return (
        <Box
        sx={{
            position: "relative",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            background: 'linear-gradient(90deg, #0c0c0c1f 50%, #ffffff06 50%)',
        }}
        >
        <video
            src={videoBG}
            autoPlay
            loop
            muted
            style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            opacity: 0.1,
            }}
            className="contact-video-bg"
        />

        <Grid
            container
            spacing={2}
            sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            mt: '20px',
            p: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            }}
        >
            <Typography variant="h4" color="white" sx={{ textAlign: 'center', mt: '20px' }}>
            Contact Us
            </Typography>
            
            <Box sx={{
            mt:-2,
            ml:0.9,
            width: { xs: 160, lg: 180 },
            height: '3px',
            background: 'linear-gradient(45deg, #070769ff 30%, #2a00e4ff 90%)',
            }} />

            <Grid size={12} container>
            <Box
                sx={{
                bgcolor: '#150060ff',
                p: 2,
                width: { xs: 325, lg: 420 },
                height: { xs: 130, lg: 150 },
                mt: 2,
                ml: 2,
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.22)',
                '&:hover': {
                    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s ease-in-out',
                },
                }}
            >
                <Typography variant="body1" color="white" sx={{ mb: 1, fontFamily: 'Roboto, sans-serif' }}>
                Feel free to reach out to us :
                </Typography>
                <IconButton component="a" color="primary" href="https://wa.me/94756506423" target="_blank">
                <WhatsAppIcon sx={{ color: '#25D366', fontSize: '2rem' }} />
                <Typography variant="body2" color="white" sx={{ mt: 0.4, ml: 1 }}>
                    +94756506423
                </Typography>
                </IconButton>

                <IconButton component="a" color="primary" href="mailto:thanujmotion829@gmail.com">
                <EmailIcon sx={{ color: '#ebefc3ff', fontSize: '2rem' }} />
                <Typography variant="body2" color="white" sx={{ mt: 0.4, ml: 1 }}>
                    thanujmotion829@gmail.com
                </Typography>
                </IconButton>

                {!isMobile && (
                <>
                    <Button variant="contained" color="primary" sx={{ mt: 3 }} href="https://wa.me/94756506423" target="_blank">
                    Chat with Us
                    </Button>
                    <Button variant="contained" color="primary" sx={{ mt: 3, ml: 3.5 }} href="mailto:thanujmotion829@gmail.com" target="_blank">
                    Send Email
                    </Button>
                </>
                )}
            </Box>

            <Box
                sx={{
                bgcolor: '#3e0bf569',
                p: 2,
                ml: 32,
                mt: 2,
                width: { xs: 145, lg: 680 },
                height: { xs: 200, lg: 150 },
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                }}
            />
            </Grid>

            <Grid size={6} sx={{ display: 'flex', justifyContent: 'center' }}>
        </Grid>
        </Grid>
        </Box>
    );
};

export default Contact;