import { Box, Grid, Stack } from "@mui/system";
import IMG2 from "@/assets/AniationTitle.png";
import { Button, Typography } from "@mui/material";
import BackgroundVideo from "@/assets/bg.mp4";

type Props = {};

const Home = (props: Props) => {
    return (
        <>
        <Box
                component="img"
                src={IMG2}
                alt="Hero Image"
                sx={{ width: 450, height: 'auto', mt: 2, mx: 'auto' }}
            />
        <Grid
            container
            direction="column"
            sx={{ minHeight: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#13111C' }}
        >


            {/* Background Video */}
            <video
                src={BackgroundVideo}
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
                }}
            />


            {/* Vertically Centered Image */}
            <Grid
                container
                alignItems="center"
                sx={{ flexGrow: 1 }}
            >

            </Grid>

            {/* Additional Content */}
            <Grid
                container
                spacing={2}
                alignItems=""
                direction="column"
                sx={{ flexGrow: 1, fontFamily: 'poppins', position: 'relative', zIndex: 1 }}
            >
                <Typography align="center" sx={{ color: '#fff', ml: 7, fontSize: '4.5rem' }}>
                    We make it easy
                </Typography>
                <Typography align="center" sx={{ color: '#fff', ml: 7, fontSize: '2.5rem', fontWeight: 'bold' }}>
                    Create beautiful and functional <br /> websites, Easily!
                </Typography>

                <Button
                    variant="contained"
                    sx={{
                        mt: 2,
                        bgcolor: '#2137ffff',
                        '&:hover': { bgcolor: '#ff068bff' },
                        width: '150px',
                        alignItems: 'center',
                        mx: 'auto',
                        display: 'block',
                        borderRadius: '8px'
                    }}
                    onClick={() => window.open('https://admirable-pavlova-07fae5.netlify.app/', '_blank')}
                >
                    Live Demo
                </Button>
                
            </Grid>
        </Grid>
        </>
    );
};

export default Home;