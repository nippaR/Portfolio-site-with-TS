import { Box, Grid } from "@mui/system";
import videoBG from "@/assets/videoBG.mp4";
import { IconButton, Typography } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

type Props = {}

const Contact = (props: Props) => {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "100vh", // Full screen height
                overflow: "hidden",
            }}
        >
            {/* Background Video */}
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
                    objectFit: 'scale-down',
                    borderRadius: '20px',
                    marginLeft: '220px',
                    display: 'block', // Default display
                }}
                className="contact-video-bg"
            />

            {/* Content Over Video */}
            <Grid
                container
                spacing={2}
                sx={{
                    position: "relative",
                    zIndex: 1, // Keep above video
                    height: "100%",
                    mt: { xs: '20px', sm: '20px', md: '20px', lg: '20px', xl: '20px' },
                    padding: { xs: '20px', sm: '20px', md: '20px', lg: '20px', xl: '20px' },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}
            >
                <Box>
                    <Typography variant="h4" color="white" sx={{ textAlign: 'center', marginTop: '20px' }}>
                        Contact Us
                    </Typography>
                </Box>

                <Grid item xs={6} sx={{ display: 'block', justifyContent: 'left' }}>
                    <Box sx={{
                        bgcolor: '#3e0bf569',
                        p: 2,
                        width: { xs: 325, sm: 420, md: 420, lg: 420, xl: 420 },
                        height: { xs: 130, sm: 150, md: 150, lg: 150, xl: 150 },
                        mt: 2,
                        ml: 2,
                        borderRadius: '8px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        '&:hover': {
                            boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
                            scale: 1.05,
                            transition: 'all 0.3s ease-in-out',
                        }
                    }}>
                        <Typography variant="body1" color="white" sx={{ mb: 1, fontFamily: 'Roboto, sans-serif' }}>
                            Feel free to reach out to us :
                        </Typography>
                        <IconButton component="a" color="primary" href="https://wa.me/94756506423" target="_blank">
                            <WhatsAppIcon sx={{ color: '#25D366', fontSize: '2rem' }} />
                            <Typography variant="body2" color="white" sx={{ mt: 0.4,ml: 1 }}>
                                +94756506423
                            </Typography>
                        </IconButton>

                        <IconButton component="a" color="primary" href="mailto:thanujmotion829@gmail.com">
                            <EmailIcon sx={{ color: '#ebefc3ff', fontSize: '2rem', }} />
                            <Typography variant="body2" color="white" sx={{ mt: 0.4, ml: 1 }}>
                                thanujmotion829@gmail.com
                            </Typography>
                        </IconButton>
                    </Box>
                </Grid>

                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{
                        bgcolor: '#3e0bf569',
                        p: 2,
                        ml: 2,
                        width: { xs: 145, sm: 420, md: 420, lg: 420, xl: 420 },
                        height: { xs: 200, sm: 150, md: 150, lg: 150, xl: 150 },
                        borderRadius: '8px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                    }} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Contact;
